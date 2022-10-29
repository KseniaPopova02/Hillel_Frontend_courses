const numArr = [1, 2, 3];

const isContainSame = (num) => {
  const set = [...new Set(num)];
  console.log("set length:", set.length);
  console.log("num length:", num.length);
  return num.length !== set.length;
};

console.log(isContainSame(numArr));
