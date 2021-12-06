import * as day1 from "./solution/day1.ts";
import * as day2 from "./solution/day2.ts";
import * as day3 from "./solution/day3.ts";
import * as day4 from "./solution/day4.ts";
import * as day5 from "./solution/day5.ts";

async function exec(solution: number): Promise<void> {
  const input = await readInput(solution);
  const result = await solutions[solution - 1](input);
  console.log(`Day ${solution}:`, ...result);
}

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

const day = parseInt(Deno.args[0]);
const solutions: ((input: string) => [unknown, unknown])[] = [
  (input) => {
    const data = parseNumberList(input);
    return [day1.part1(data), day1.part2(data)];
  },
  (input) => {
    const data = parseStringList(input);
    return [day2.part1(data), day2.part2(data)];
  },
  (input) => {
    const data = parseStringList(input);
    return [day3.part1(data), day3.part2(data)];
  },
  (input) => {
    return [day4.part1(input), day4.part2(input)];
  },
  (input) => {
    return [day5.part1(input), day5.part2(input)];
  },
];

if (isNaN(day)) {
  for (let index = 1; index <= solutions.length; index++) {
    await exec(index);
  }
} else {
  await exec(day);
}
