// https://forms.gle/6xKgHdkRkMETToP5A
//typescript

let firstName: string = 'first';

let num = 10 

let isAdmin = true
//any 
let lastName: any = 'doe34'

//delayed initialization
// const alphabet = ['a', 'b', 'c']
// let found: string;

// for(let alph of alphabet){
//   if(alph === 'a'){
//     found = alph
//   }
// }

//function parameters 
const encourageDev = (name: string) => {
return `Hi ${name}, keep at it`
}
encourageDev('rachel')

//implement a function that calculates the square given a number

function squareNumbers(num1: number){
  return  num1 * num1
}
console.log(squareNumbers(2))
//default parameters
function greet(name: string = 'jane'){
return `hi ${name}`
}
//return type
// function sumNumbers(x: number, y: number): void{
//  console.log('hello')
// }

// sumNumbers(2, 4)
//never
// function throwE():never{
// throw new Error("");

// }
// const dontStop = ():never =>{

//   while(true){
//   //do something
//   }
// }
//type aliases
// type Person = {
//   first: string;
//   last: string;
//   age: number;

// }
// // objects
// function printName(person: Person): Person{
// return { first: person.first, last: person.last, age: person.age}
// }


// printName({first:'he', last: 'doe',age: 12})

// const describerPerson = (person: {
//   name: string,
//   age: number,
//   parent:{
//     mom: string,
//     dad: string
//   }
// }) =>{

// }
// write the movie type alias to make the following two variables properly typed Movie
// write a function called getProfit that accepts a single movie object 
// it should return the movies worldwide gross minus budget
// e.g getProfit(cats1)=> -12400
type Movie = {
  readonly title: string,
  originalTitle?: string,
  director: string,
  releaseYear: number,
  boxOffice:{
      budget: number,
      grossNg: number,
      grossWorld: number
  }
}

const dune1: Movie  = {
  title: 'Dune', 
  originalTitle: "Dune part one",
  director: "Dennis",
  releaseYear: 2021,
  boxOffice:{
    budget: 165000,
    grossNg: 108000,
    grossWorld: 400600
  }
}


const cats1: Movie = {
  title: 'Cats', 
  director: "Tom",
  releaseYear: 2019,
  boxOffice:{
    budget: 950000,
    grossNg: 271000,
    grossWorld: 738600
  }
}

//intersection types &
type Circle = {
  radius: number;
}

type Color = {
  color: string;
}


type ColorfulCircle = Circle & Color

const smilie: ColorfulCircle = {
  radius: 4,
  color: 'red'
}

// Array
// let arrOfString: string[] = ['2', '4']
// let arrOfNumbers: number[] = [2, 4]

// let arrOfString: Array<string> = ['2', '4']
// let arrOfNumbers: Array<number> = [2, 4]

//multidimensional
const arr1: string[][][] = [
  [[]],
  [],
  []
]

// union type  |
//type check
const guessAge = (age: number | string ) =>{
  if(typeof age === 'string'){
    Number(age)
  }
// Math.floor(age)
}

// guessAge('$55')

const arr2:  (number | string)[] = [2, 't', 't'] 
const arr3:  Array<number | string> = [2, 't', 't'] 

//literal type
const zero : 'hi' = 'hi'
let mood: "happy" | "sad"
type DayOfWeek = "monday" 
| "tuesday"
| "wednesday"

const today :DayOfWeek = "wednesday"

// tuples 
let aTuple: [string, number] = ['r', 4]

type Response1 = [number, string]
//http 
const goodResponse:Response1 = [ 200, 'OK'] 
const badResponse:Response1 = [ 404, 'Not found'] 

// enums
enum Response2 {
  "no",//1
  "yes"//2
}

enum Response3 {
  ok = 200,
  notFound = 404
}
enum Status1 {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const myStatus = Status1.SHIPPED

//interfaces
interface Person {
  name : string;
  age: number;
}

type Human = {
  name: string;
  breed : string;
}

interface Person {
  breed : string
}

const person1 :Person ={
  name: "",
  age: 2,
  breed: ""
}
//extend: inheriting
interface Dog {
 readonly breed: string;
  age : number;
}

interface ServiceDog extends Dog{
  job: "sing" | "dance"
}


const dogService : ServiceDog = {
  breed: "agric",
  age: 3,
  job: "dance"
}
const dogService1 : ServiceDog = {
  breed: "agric",
  age: 30,
  job: "dance"
}
// **
//type assertion as
let myVar: unknown = 'hello'


const newVar = myVar as string

const btn = document.querySelector('.btn')
const input = document.querySelector('.input')! as HTMLInputElement

input.addEventListener('click', function(){
  const val = input.value
})

//TYPE DECLATION 
// .d.ts
// console

