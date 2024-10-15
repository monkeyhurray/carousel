import type { ItemType } from '@/types/cardType';

const deepCopyArr = (arr: ItemType[] | ItemType): ItemType[] => {
  if (Array.isArray(arr)) {
    const result = [];
    for (const item of arr) {
      result.push(...deepCopyArr(item));
    }
    return result;
  }
  return [{ ...arr }];
};

export { deepCopyArr };
