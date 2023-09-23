/**
 * Generate a slug from a string.
 *
 * @param {string} string - The string to generate the slug from.
 * @return {string} The generated slug.
 */
export function generateSlug(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Generates category data based on the given categories.
 *
 * @param {Array} categories - An array of categories.
 * @return {Array} An array of category data.
 */
export function generateCategoryData(categories) {
  let categoryData = [];
  categories.forEach((category) => {
    categoryData.push({
      name: category,
      slug: `${generateSlug(category)}`,
    });
  });
  return categoryData;
}
