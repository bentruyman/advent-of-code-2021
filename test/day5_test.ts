import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { part1, part2 } from "../solution/day5.ts";

const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

Deno.test({
  name: "Day 5 - Part 1",
  fn() {
    assertEquals(part1(input), 5);
  },
});

Deno.test({
  name: "Day 5 - Part 2",
  fn() {
    assertEquals(part2(input), 12);
  },
});
