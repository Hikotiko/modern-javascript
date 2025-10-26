// 3 Hands-On Exercises (Increasing Difficulty)
// 1. Array Creation and Access
const pLanguages = ['SQL', 'Java', 'Go', 'JavaScript', 'Python']

console.log(pLanguages[0], pLanguages[pLanguages.length -1]);
console.log(`Total languages: ${pLanguages.length}`);

// 2. Basic Array Methods & Nesting  
let nums = [2,4,6]

nums.push(8)
nums.unshift(1)
nums.pop()

let allArrays = [nums, ['a', 'b', 'c']]

console.log(allArrays[0][0], allArrays[1][2]);

// 3. concat and Spread
const arr1 = [1,2,3]
const arr2 = [4,5,6]

x = arr1.concat(arr2)
y = [...arr1, ...arr2]

console.log(x);
console.log(y);