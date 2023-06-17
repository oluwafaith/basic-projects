// // variable
// //  let , const var

// // let  firstName  = 'faith';

// //data types
// // primitive  || object

// //string, number , undefined symbol, bigint boolean null => primitive

// //object => object, array, function

// //strings: sequence of characters
// //single quote=> ''
// //double quote=> ""
// // template strings => ``

// // const firstName = 'faith'
// // const lastName = "okpala"
// // const middleName = `doe`

// // console.log(firstName, lastName, middleName)

// //concatenation  +
// // const fullName = firstName + " " +  middleName+ " " + lastName
// // const fullName = `${firstName}  ${middleName}  ${lastName}  is  ${2 * 10} years old`
// // console.log(fullName)
// // numbers => integers  && floating point
// // let num1 = 2300000000

// //boolean : true or false
// // let age = null;

// // console.log(num1)

// // operators
// //arithmetic  : + - * / % ==  ===    **

// // +
// // ==  ===

// // ++ -- 
// // let num = 2
// // num = num - 1
// // console.log(num)

// // +=
// //comparison > < >=  <=

// //if/else

// //given 2 numbers  check which is even or odd
// let a = 3
// let b = 4

// // else if
// // if(a === b){
// // console.log('equal')
// // }
// // else if(b > a){
// //   console.log('b is greater')
// // }
// // else{
// //   console.log("no condition")
// // }

// // if(a % 2 === 0){
// //   console.log(true)
// // }else{
// //   console.log(false)
// // }

// //given an age check if they are eligible to drive
// //18 or greater => congratulations
// // unqualified
// // let age = 17
// // let feeStatus = true

// // if ( age >= 18) { console.log("congratulations") } else { 
// //   console.log( "unqualified") } 

// // && || !
// //&&
// // if(age >= 18 || feeStatus == true ){
// // console.log('success')
// // }else{
// //   console.log('failed')
// // }

// //function declaration
// function sum(num1, num2){
// return num1 + num2
// }

// // objects
// const obj = {}
// //[] .
// //add values to object
// obj.firstName = 'ify'
// obj.age = 18
// obj.dev = true
// obj['lastName'] = 'dinma'


// access
// console.log(obj)

// //array => indexes => 0

//add
///push
// arr.push(5)
// arr.push(5)
// arr.push(5)
// arr.push(5)
// arr.push(5)
// arr.push(5)

//pop()
// arr.pop()
//length
// console.log(arr)
// console.log(arr.length)

//strings arrays obj
//loop
//+=
// const arr = [2, 3, 4, 5]
// let total = 0;
// for(let i = 0; i < arr.length ; i++){
//   total += arr[i]
// }

// function totalSum(arr){

// let total = 0;
// for(let i = 0; i < arr.length ; i++){
//  total += arr[i]
// }
// return
// }


// function totalSum(arr){

// let total = 0;
// for(let i = 0; i < arr.length ; i++){
//  total += arr[i]
// }
// return total
// }


// function totalSum(arr){
//   const arr = [2, 3, 4, 5]
// let total = 0;
// for(let i = 0; i < arr.length ; i++){
//  total += arr[i]
// }
// return total
// }
// function totalSum(arr){

// let total = 0;
// for(let i = 0; i < arr.length ; i++){
//  total = arr[i]
// }
// return total
// }

// function totalSum(arr){
//   // const arr = [2, 3, 4, 5]
// let total = 0;
// for(let i = 0; i < arr.length ; i++){
//  total += arr[i]
// }
// return total
// }
// console.log(totalSum([2, 3, 4, 5]))
// console.log(total)

// Implement the function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.

// sumMix([9, 3, '7', '3']) to return 22
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) to return 42
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) to return 41

// Implement a function fizzBuzz(input) that takes a number and retuns: "fizz": if the number is divisible by 3 "buzz": if the number is divisible by 5 "fizzbuzz": if the number is both divisible by 3 and 5 number: if it is not divisible by 3 or 5

// fizzBuzz(3) to return "fizz" 
// fizzBuzz(5) to return "buzz" 
// fizzBuzz(15) to return "fizz" 
// fizzBuzz(7) to return 7 

// const arr = [2, 3, 4, 5]
// // let total = 0

// for(let i = 0; i < arr.length; i++){

// total += arr[i]
// // total = total + arr[3]
// }
// console.log(total)

// function sumMix(arr){

//   let total =0;
  
//   for (k=0; k < arr.length; k++){
  
//   total += Number(arr[k])
  
//   }
  
//   return k
  
//   }
//   console.log(sumMix([9, 3, '7', '3']))

// function total(arr) {
//   // let all = arr.Number;
//   let a = 0;
//   for(let i = 0; i < arr.length; i++) {
//       a += Number(arr[i]);
//   }   return a   
// }

// console.log(total(['5', '0', 9, 3, 2, 1, '9', 6, 7]))

const btn = document.querySelector('.test')
const show = document.querySelector('.show')

btn.addEventListener('click', function(){
  console.log('clicked')
})
const p = document.createElement('p')
p.textContent = 'hello there'

show.textContent = 'test'
// show.prepend(p)
// show.append(p)

// fetch('http://127.0.0.1:5500/index.html')
// then 
// 
async
