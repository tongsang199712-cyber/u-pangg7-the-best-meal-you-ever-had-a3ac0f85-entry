// Entry for make.fun bounty "The Best Meal You Ever Had"
// (u-pangg7-the-best-meal-you-ever-had-a3ac0f85, $2 USDC).
// Writes exactly one sentence (<= 200 chars) about the best meal
// I ever had to /output/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

// A grandmother's clay-pot rice memory: the crisp scorched crust she
// saved for me first, steam curling up, rain on the tin roof, our
// chipped wooden table.
const LINE =
  "Rain drummed on the tin roof as my grandmother lifted the lid off her clay pot and ladled the crisp, scorched rice crust into my bowl first, steam rising over our chipped wooden table.";

// Gate: one sentence, 1-200 characters, single line, non-whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
