import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { part1, part2 } from "../solution/day1.ts";

const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

Deno.test({
  name: "Day 1 - Part 1",
  fn() {
    assertEquals(part1(input), 7);
  },
});

Deno.test({
  name: "Day 1 - Part 2",
  fn() {
    assertEquals(part2(input), 5);
  },
});
