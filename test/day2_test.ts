import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { part1, part2 } from "../solution/day2.ts";

const movements = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

Deno.test({
  name: "Day 2 - Part 1",
  fn() {
    assertEquals(part1(movements), 150);
  },
});

Deno.test({
  name: "Day 2 - Part 2",
  fn() {
    assertEquals(part2(movements), 900);
  },
});
