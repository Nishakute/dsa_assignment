function reverseArray(array){
    const reveredArray=[]
    for(i=array.length-1;i>=0;i--){
        reveredArray.push(array[i]);
    }
    return reveredArray;

}
const numbers=[1,2,3,4,5];
const reveredNumber=reverseArray(numbers);
console.log(reveredNumber);