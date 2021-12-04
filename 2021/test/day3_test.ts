import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { part1, part2 } from "../solution/day3.ts";

const bits = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

Deno.test({
  name: "Day 3 - Part 1",
  fn() {
    assertEquals(part1(bits), 198);
  },
});

Deno.test({
  name: "Day 3 - Part 2",
  fn() {
    assertEquals(part2(bits), 230);
  },
});
