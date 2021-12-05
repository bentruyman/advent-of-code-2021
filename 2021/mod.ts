import * as day1 from "./solution/day1.ts";
import * as day2 from "./solution/day2.ts";
import * as day3 from "./solution/day3.ts";
import * as day4 from "./solution/day4.ts";

async function readInput(day: number): Promise<string> {
  const decoder = new TextDecoder();
  const data = await Deno.readFile(`./data/day${day}.txt`);

  return decoder.decode(data).trimEnd();
}

function parseNumberList(data: string): number[] {
  return data.split("\n").map((n) => parseInt(n));
}

function parseStringList(data: string): string[] {
  return data.split("\n");
}

const solutions: ((input: string) => Promise<[unknown, unknown]>)[] = [
  async (input) => {
    const data = parseNumberList(input);
    return [day1.part1(data), day1.part2(data)];
  },
  async (input) => {
    const data = parseStringList(input);
    return [day2.part1(data), day2.part2(data)];
  },
  async (input) => {
    const data = parseStringList(input);
    return [day3.part1(data), day3.part2(data)];
  },
  async (input) => {
    return [day4.part1(input), day4.part2(input)];
  },
];

for (let index = 0; index < solutions.length; index++) {
  const input = await readInput(index + 1);
  const solution = await solutions[index](input);
  console.log(`Day ${index + 1}:`, ...solution);
}
