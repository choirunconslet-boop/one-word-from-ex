import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex — entry program.
//
// Writes exactly one word to /output/entry.txt: the word my ex would
// use to describe me. Nothing else. The gate requires UTF-8 text of
// 1 to 24 characters, not only whitespace.
//
// Word choice: "manchild" beats the first draft ("unemployed") —
// unemployed is a circumstance, manchild is a character verdict.
// It is the exact word an ex says, it lands instantly with no
// explanation, it stings because it is true, and no near-synonym
// ("immature", "childish") carries the same punch.
const WORD = "manchild";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
