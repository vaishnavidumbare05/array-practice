//Program to find the largest number from the given array

const numbers=[55,29,94,28,35,99]

largestNum=numbers[0]
for(let i=0;i<numbers.length;i++)
    {
      if(numbers[i]>largestNum){
        largestNum=numbers[i]
      }
}
console.log(`largest number in array is ${largestNum}`)