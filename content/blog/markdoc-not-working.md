---
external: false
draft: false
title: Markdoc cannot be added to Astro Project
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

# The Goal

**To add [markdoc](https://markdoc.dev/) to astro project.**

## The problem

```
npx astro add markdoc
✔ Resolving packages...

Astro will run the following command:
If you skip this step, you can always run it yourself later

╭────────────────────────────────────────────╮
│ npm install @astrojs/markdoc astro@^3.0.0  │
╰────────────────────────────────────────────╯

✔ Continue? … yes
✔ Installing dependencies...
error   The requested module '../core/logger/core.js' does not provide an export named 'Logger'
file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/config/index.js:1
import { Logger } from "../core/logger/core.js";
        ^^^^^^
SyntaxError: The requested module '../core/logger/core.js' does not provide an export named 'Logger'
  at ModuleJob._instantiate (node:internal/modules/esm/module_job:122:21)
  at async ModuleJob.run (node:internal/modules/esm/module_job:188:5)
  at async DefaultModuleLoader.import (node:internal/modules/esm/loader:228:24)
  at async loadConfigWithVite (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/core/config/vite-load.js:83:22)
  at async resolveConfigPath (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/core/config/config.js:121:20)
  at async add (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/core/add/index.js:148:25)
  at async runCommand (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/cli/index.js:108:14)
  at async cli (file:///Users/ichiharayuto/Documents/programs/blogs/node_modules/astro/dist/cli/index.js:176:5)
```

## Tries

- Ensured `node_modules/astro/dist/core/logger` exists
- Ensured class Logger is exported as following

```
import { dim } from "kleur/colors";
import stringWidth from "string-width";
const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function info(opts, label, message) {
  return log(opts, "info", label, message);
}
function warn(opts, label, message) {
  return log(opts, "warn", label, message);
}
function error(opts, label, message) {
  return log(opts, "error", label, message);
}
function table(opts, columns) {
  return function logTable(logFn, ...input) {
    const message = columns.map((len, i) => padStr(input[i].toString(), len)).join(" ");
    logFn(opts, null, message);
  };
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function padStr(str, len) {
  const strLen = stringWidth(str);
  if (strLen > len) {
    return str.substring(0, len - 3) + "...";
  }
  const spaces = Array.from({ length: len - strLen }, () => " ").join("");
  return str + spaces;
}
let defaultLogLevel;
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) {
      defaultLogLevel = "debug";
    } else if (proc.argv.includes("--silent")) {
      defaultLogLevel = "silent";
    } else {
      defaultLogLevel = "info";
    }
  } else {
    defaultLogLevel = "info";
  }
} else {
  defaultLogLevel = "info";
}
function timerMessage(message, startTime = Date.now()) {
  let timeDiff = Date.now() - startTime;
  let timeDisplay = timeDiff < 750 ? `${Math.round(timeDiff)}ms` : `${(timeDiff / 1e3).toFixed(1)}s`;
  return `${message}   ${dim(timeDisplay)}`;
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message) {
    info(this.options, label, message);
  }
  warn(label, message) {
    warn(this.options, label, message);
  }
  error(label, message) {
    error(this.options, label, message);
  }
  debug(label, message, ...args) {
    debug(this.options, label, message, args);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.options, this.label, message);
  }
}
export {
  AstroIntegrationLogger,
  Logger,
  dateTimeFormat,
  debug,
  defaultLogLevel,
  error,
  info,
  levels,
  log,
  table,
  timerMessage,
  warn
};
```

Then why the terminal keep providing this error??

## Solution

As I seriously had no idea why it gets me this error, I attempted to update the order of export as following.

```
export {
  AstroIntegrationLogger,
  dateTimeFormat,
  debug,
  defaultLogLevel,
  error,
  info,
  Logger,
  levels,
  log,
  table,
  timerMessage,
  warn
};
```

This random solution solves the problem.

```
% npx astro add tailwind
✔ Resolving packages...

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭────────────────────────────────────────────────────╮
 │ npm install @astrojs/tailwind tailwindcss@^3.0.24  │
 ╰────────────────────────────────────────────────────╯

✔ Continue? … yes
⠼ Installing dependencies...
✔ Installing dependencies...

   success  Configuration up-to-date.
```
