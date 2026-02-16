const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");

const files = ["index.es.js", "index.umd.js"];

files.forEach((fileName) => {
  const filePath = path.join(distDir, fileName);

  if (!fs.existsSync(filePath)) {
    console.warn(`${fileName} does not existe in dist, skipping...`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");

  if (
    content.startsWith(`'use client';`) ||
    content.startsWith(`"use client";`)
  ) {
    console.log(`${fileName} already has 'use client', skipping.`);
    return;
  }

  const newContent = `'use client';\n${content}`;
  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`✅ Added 'use client' to ${fileName}`);
});
