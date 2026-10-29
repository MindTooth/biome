---
"@biomejs/biome": patch
---

Fixed [`useTailwindSortedClasses`](https://biomejs.dev/linter/rules/use-tailwind-sorted-classes/) removing whitespace at the edges of string literals inside template interpolations. Conditional class strings now retain the separators between adjacent classes.
