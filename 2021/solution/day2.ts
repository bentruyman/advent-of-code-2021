interface Movement {
  direction: MovementDirection;
  amount: number;
}

const DIRECTIONS = ["forward", "down", "up"] as const;
type MovementDirection = typeof DIRECTIONS[number];

export function part1(input: string[]): number {
  const movements = input.map(parseMovement);

  let depth = 0;
  let horizontal = 0;

  movements.forEach(({ direction, amount }) => {
    switch (direction) {
      case "forward":
        horizontal += amount;
        break;
      case "down":
        depth += amount;
        break;
      case "up":
        depth -= amount;
        break;
    }
  });

  return depth * horizontal;
}

export function part2(input: string[]) {
  const movements = input.map(parseMovement);

  let aim = 0;
  let depth = 0;
  let horizontal = 0;

  movements.forEach(({ direction, amount }) => {
    switch (direction) {
      case "forward":
        horizontal += amount;
        depth += aim * amount;
        break;
      case "down":
        aim += amount;
        break;
      case "up":
        aim -= amount;
        break;
    }
  });

  return depth * horizontal;
}

function isValidDirection(direction: string): direction is MovementDirection {
  return DIRECTIONS.find((v) => v === direction) !== undefined;
}

function parseMovement(movement: string): Movement {
  const [direction, rawAmount] = movement.split(" ");
  const amount = parseInt(rawAmount);

  if (!isValidDirection(direction)) {
    throw new Error(`Invalid movement direction: ${direction}`);
  }

  return {
    direction,
    amount,
  };
}
