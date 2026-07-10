import { copyFile } from "node:fs/promises";

await copyFile("dist/index.html", "dist/404.html");
console.log("Created dist/404.html for GitHub Pages routing.");
