//Для решения всех задач используйте ключевую особенность set.
//Даны два массива целых чисел nums1 и nums2.
//Bернуть массив состоящий из элементов, которые встречаются в обоих массивах.
//В массиве на выходе допустимо чтобы повторяющиеся значения встречались несколько раз.
const nums1 = [1, 2, 3, 4];
const nums2 = [5];

const getIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter((item) => set1.has(item));
};
console.log(getIntersection(nums1, nums2));
