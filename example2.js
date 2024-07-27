//Program to find the sum of odd numbers from the given array

const numbers=[4,10,67,36,55,13]

let sum=0;
// for(let i=0;i<numbers.length;i++)
// {
//     if(numbers[i]%2==1){
//         sum += numbers[i];
//     }
   
// }

 for(const num of numbers){
    if(num%2==1){
        sum += num
    }
 }
console.log(`Sum of odd number in array is ${sum}`);