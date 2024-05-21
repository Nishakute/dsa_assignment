const arr = [1, 4, 2, 6, 3];
const targetSum = 8;
function hasPairWithSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === targetSum) {
              return true; 
          }
      }
  }
  return false; 
}
console.log("has pair with sum", targetSum, ":", hasPairWithSum(arr, targetSum));