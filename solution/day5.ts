type Point = [number, number];
type Line = [Point, Point];

export function part1(input: string) {
  return parseInput(input)
    .filter(isStraight)
    .map(expandLine)
    .flat()
    .reduce(onlyDuplicates, []).length;
}

export function part2(input: string) {
  return parseInput(input).map(expandLine).flat().reduce(onlyDuplicates, [])
    .length;
}

function expandLine(line: Line): Point[] {
  const a = line[0];
  const b = line[1];

  let left: number[] = [];
  let right: number[] = [];

  if (isStraight([a, b])) {
    if (a[0] < b[0]) left = spread(a[0], b[0]);
    else if (a[0] > b[0]) left = spread(b[0], a[0]);
    else if (a[1] < b[1]) right = spread(a[1], b[1]);
    else if (a[1] > b[1]) right = spread(b[1], a[1]);

    if (a[0] === b[0]) left = new Array(right.length).fill(a[0]);
    else right = new Array(left.length).fill(a[1]);
  } else {
    left = a[0] < b[0] ? spread(a[0], b[0]) : spread(b[0], a[0]).reverse();
    right = a[1] < b[1] ? spread(a[1], b[1]) : spread(b[1], a[1]).reverse();
  }

  return zip(left, right);
}

function spread(from: number, to: number): number[] {
  return Array.from({ length: 1 + to - from }, (_v, k) => k + from);
}

function zip(left: number[], right: number[]): Point[] {
  return left.map((_, index) => {
    return [left[index], right[index]];
  });
}

function isSamePoint(a: Point, b: Point): boolean {
  return a[0] === b[0] && a[1] === b[1];
}

function isStraight([[x1, y1], [x2, y2]]: Line): boolean {
  return x1 === x2 || y1 === y2;
}

function onlyDuplicates(
  dupes: Point[],
  point: Point,
  _index: number,
  points: Point[],
): Point[] {
  if (dupes.some((dupe) => isSamePoint(dupe, point))) return dupes;
  const instances = points.filter((possibleDupe) =>
    isSamePoint(possibleDupe, point)
  );
  if (instances.length > 1) dupes.push(point);

  return dupes;
}

function parseInput(input: string): Line[] {
  return input.split("\n").map((line) => {
    const [[x1, y1], [x2, y2]] = line
      .split(" -> ")
      .map((pair) => pair.split(",").map((str) => parseInt(str)));

    return [
      [x1, y1],
      [x2, y2],
    ];
  });
}
