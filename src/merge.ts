export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    type Source = "c1" | "c2" | "c3";

    const candidates: { value: number; src: Source }[] = [];

    if (i < collection_1.length) {
      candidates.push({ value: collection_1[i], src: "c1" });
    }

    if (j < collection_2.length) {
      candidates.push({ value: collection_2[j], src: "c2" });
    }

    if (k >= 0) {
      candidates.push({ value: collection_3[k], src: "c3" });
    }

    let chosen = candidates[0];
    for (let idx = 1; idx < candidates.length; idx++) {
      if (candidates[idx].value < chosen.value) {
        chosen = candidates[idx];
      }
    }

    result.push(chosen.value);

    if (chosen.src === "c1") {
      i++;
    } else if (chosen.src === "c2") {
      j++;
    } else {
      k--;
    }
  }

  return result;
}
