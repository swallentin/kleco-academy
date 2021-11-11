// (['a', 'b'], 'x') => ['a', 'x', 'b', 'x' ]

function intersperse<T>(array: readonly T[], separator: T): T[] {
  return array.flatMap((value) => [value, separator]);
}

// const values: ReadonlyArray<string> = ["a", "b", "c"];
const values: string[] = ["a", "b", "c"];

const valuesWithSeparator = intersperse(values, "X");
