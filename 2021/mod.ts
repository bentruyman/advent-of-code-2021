import * as day1 from "./solution/day1.ts";

async function readInput(day: number): Promise<string> {
  const decoder = new TextDecoder();
  const data = await Deno.readFile(`./data/day${day}.txt`);

  return decoder.decode(data);
}

function parseNumberList(data: string): number[] {
  return data.split("\n").map((n) => parseInt(n));
}

async function solveDay1(): Promise<void> {
  const data = parseNumberList(await readInput(1));
  console.log("Day 1 - Part 1:", day1.part1(data));
  console.log("Day 1 - Part 2:", day1.part2(data));
}

solveDay1();
