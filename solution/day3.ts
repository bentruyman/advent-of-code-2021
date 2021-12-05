type Bit = 0 | 1;
type Comparator = (list: Bit[]) => Bit;

export function part1(input: string[]): number {
  const gamma = transpose(input.map(toBitList)).map(mostCommon);
  const epsilon = gamma.map(flipBit);

  return toDecimal(gamma) * toDecimal(epsilon);
}

export function part2(input: string[]): number {
  const list = input.map(toBitList);

  let o2 = rate(list, mostCommon);
  let co2 = rate(list, leastCommon);

  return toDecimal(o2) * toDecimal(co2);
}

const flipBit = (n: Bit): Bit => (n === 0 ? 1 : 0);
const leastCommon: Comparator = (list) => flipBit(mostCommon(list));
const mostCommon: Comparator = (list) => {
  const zeroes = list.reduce<number>((z, bit) => (bit === 0 ? z + 1 : z), 0);

  return zeroes * 2 > list.length ? 0 : 1;
};

const toBitList = (str: string): Bit[] =>
  str.split("").map((s) => (s === "0" ? 0 : 1));
const toDecimal = (bin: Bit[]): number => parseInt(bin.join(""), 2);

const transpose = <T>(list: T[][]): T[][] =>
  list[0].map((_, colIndex) => list.map((row) => row[colIndex]));

function rate(list: Bit[][], fn: Comparator, index = 0): Bit[] {
  const bit = fn(transpose(list)[index]);
  const filtered = list.filter((row) => row[index] === bit);

  return filtered.length > 1 ? rate(filtered, fn, index + 1) : filtered[0];
}
