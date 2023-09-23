import type { z } from "zod";
import path from "path";
import matter from "gray-matter";
import fs from "fs/promises";
import { globby } from "globby";
import Markdoc from "@markdoc/markdoc";
import { config } from "./markdoc.config";

// path is relative to where you run the `yarn build` command
const contentDirectory = path.normalize("./content");

async function parseAndTransform({ content }: { content: string }) {
  const ast = Markdoc.parse(content);

  const errors = Markdoc.validate(ast, config);
  if (errors.length) {
    console.error(errors);
    throw new Error("Markdoc validation error");
  }
  const transformedContent = Markdoc.transform(ast, config);

  return transformedContent;
}

function validateFrontmatter<T extends z.ZodTypeAny>({
  frontmatter,
  schema,
  filepath,
}: {
  frontmatter: { [key: string]: unknown };
  schema: T;
  filepath: string;
}) {
  try {
    const validatedFrontmatter = schema.parse(frontmatter);
    return validatedFrontmatter as z.infer<T>;
  } catch (e) {
    const errMessage = `
      There was an error validating your frontmatter. 
      Please make sure your frontmatter for file: ${filepath} matches its schema.
    `;
    throw Error(errMessage + (e as Error).message);
  }
}

export async function read<T extends z.ZodTypeAny>({
  filepath,
  schema,
}: {
  filepath: string;
  schema: T;
}) {
  const rawString = await fs.readFile(filepath, "utf8");
  const { content, data: frontmatter } = matter(rawString);
  const transformedContent = await parseAndTransform({ content });
  const validatedFrontmatter = validateFrontmatter({
    frontmatter,
    schema,
    filepath,
  });

  const filename = filepath.split("/").pop();
  if (typeof filename !== "string") {
    throw new Error("Check what went wrong");
  }
  const fileNameWithoutExtension = filename.replace(/\.[^.]*$/, "");

  return {
    slug: fileNameWithoutExtension,
    content: transformedContent,
    frontmatter: validatedFrontmatter,
  };
}

/**
 * Reads and returns the content of a specific file based on the given directory and slug.
 *
 * @param {string} directory - The directory where the file is located.
 * @param {string} slug - The slug of the file.
 * @param {T} frontmatterSchema - The schema used to validate the file's frontmatter.
 * @return {Promise} The content of the file.
 */
export async function readOne<T extends z.ZodTypeAny>({
  directory,
  slug,
  frontmatterSchema: schema,
}: {
  directory: string;
  slug: string;
  frontmatterSchema: T;
}) {
  const filepath = path.join(contentDirectory, directory, `${slug}.md`);
  return read({
    filepath,
    schema,
  });
}

export async function readAll<T extends z.ZodTypeAny>({
  directory,
  frontmatterSchema: schema,
}: {
  directory: string;
  frontmatterSchema: T;
}) {
  // get path to the md file
  const pathToDir = path.posix.join(contentDirectory, directory);
  // get all paths to the md files such as ["blog/first-post.md", "blog/second-post.md"]
  const paths = await globby(`${pathToDir}/*.md`);

  return Promise.all(paths.map((path) => read({ filepath: path, schema })));
}

export async function readByCategory<T extends z.ZodTypeAny>({
  directory,
  category,
  frontmatterSchema: schema,
}: {
  directory: string;
  category: string;
  frontmatterSchema: T;
}) {
  // すべてのMarkdownファイルを読み込む
  const allPosts = await readAll({ directory, frontmatterSchema: schema });

  // 指定されたカテゴリに一致する投稿のみをフィルタリング
  const filteredPosts = allPosts.filter((post) =>
    post.frontmatter.categories.includes(category)
  );

  return filteredPosts;
}
