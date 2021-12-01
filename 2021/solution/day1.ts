export function part1(input: number[]): number {
  return input.reduce((prev, curr, index) => {
    if (index === 0) return prev;
    return curr > input[index - 1] ? prev + 1 : prev;
  }, 0);
}

export function part2(input: number[]): number {
  let count = 0;

  for (let index = 1; index < input.length; index++) {
    const prev = cut(input, index - 1, 3);
    const curr = cut(input, index, 3);

    if (sum(curr) > sum(prev)) count++;
  }

  return count;
}

function cut(numbers: number[], start: number, amount: number): number[] {
  return numbers.slice(start, start + amount);
}

function sum(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr);
}
