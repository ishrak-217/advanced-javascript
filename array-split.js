const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 6);
console.log(part);

const removed = nums.splice(2, 3, 10, 11, 12);
console.log(removed);
console.log(nums);

const together = nums.join(", ");
console.log(together);