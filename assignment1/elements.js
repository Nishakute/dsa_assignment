function hasDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true; 
            }
        }
    }
    return false; 
}


const arr1 = [0, 1, 2, 3, 4, 2];
const arr2 = [3, 1, 2, 0, 4, 5]; 

console.log("Has duplicates in arr1:", hasDuplicates(arr1));
console.log("Has duplicates in arr2:", hasDuplicates(arr2));