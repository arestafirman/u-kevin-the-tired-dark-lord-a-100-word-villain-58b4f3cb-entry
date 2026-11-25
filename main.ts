import { mkdirSync, writeFileSync } from "node:fs";

const LEAD =
  "I am Bram, lord of the Black Gate, keeper of the flame that holds the dead down. " +
  "Forty years I have fed it — coal, oil, odd tax collectors. Hush. Listen. That is the flame going thin. " +
  "Three coals left, and the woodpile is two fields away, and my knees sound like the old gate. " +
  "The dead press at the door each dusk, patient as winter. They can wait. " +
  "Tonight I am not feeding the flame. Tonight I am sitting down by the last light, " +
  "and if the dead want the valley, they can come and fetch the coal themselves.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LEAD, "utf8");
