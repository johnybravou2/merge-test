import { merge } from "../src/merge";

describe("merge", () => {
  test("merges three basic arrays correctly", () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 8, 7];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);

    const c1 = [1, 2, 3];
    expect(merge(c1, [], [])).toEqual([1, 2, 3]);

    const c2 = [4, 5];
    const c3 = [10, 9];
    expect(merge([], c2, c3)).toEqual([4, 5, 9, 10]);
  });

  test("handles duplicates correctly", () => {
    const c1 = [1, 2, 2, 3];
    const c2 = [2, 3, 4];
    const c3 = [5, 4, 2];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 2, 2, 2, 3, 3, 4, 4, 5]);
  });

  test("handles negative numbers", () => {
    const c1 = [-5, -3, -1];
    const c2 = [0, 2, 4];
    const c3 = [3, 1, -2, -4];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);
  });

  test("handles cases where one array dominates", () => {
    const c1 = [1, 2, 3, 4, 5];
    const c2: number[] = [];
    const c3 = [10, 9, 8, 7, 6];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("handles single-element arrays", () => {
    const c1 = [1];
    const c2 = [3];
    const c3 = [2];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3]);
  });
});
