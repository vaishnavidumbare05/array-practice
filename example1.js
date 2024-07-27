//Program to find the largest number from the given array

const numbers=[55,29,94,28,35,99]

largestNum=numbers[0]
// for(let i=0;i<numbers.length;i++)
//     {
//       if(numbers[i]>largestNum){
//         largestNum=numbers[i]
//       }
// }

//using key of loop
   for(const num of numbers)
        {
      if(num>largestNum){
            largestNum=num
          }
       }

console.log(`Largest number in array is ${largestNum}`)