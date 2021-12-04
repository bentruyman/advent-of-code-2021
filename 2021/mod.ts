import * as day1 from "./solution/day1.ts";
import * as day2 from "./solution/day2.ts";
import * as day3 from "./solution/day3.ts";

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

async function solveDay1(): Promise<void> {
  const data = parseNumberList(await readInput(1));
  console.log("Day 1", day1.part1(data), day1.part2(data));
}

async function solveDay2(): Promise<void> {
  const data = parseStringList(await readInput(2));
  console.log("Day 2", day2.part1(data), day2.part2(data));
}

async function solveDay3(): Promise<void> {
  const data = parseStringList(await readInput(3));
  console.log("Day 3", day3.part1(data), day3.part2(data));
}

await solveDay1();
await solveDay2();
await solveDay3();
