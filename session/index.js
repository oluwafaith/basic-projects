"use strict";
// // const input = [
// //   {
// //     name: "Hendrick",
// //     dob: "1853-07-18T00:00:00.000Z",
// //     regNo: "041",
// //   },
// //   {
// //     name: "Albert",
// //     dob: "1879-03-14T00:00:00.000Z",
// //     regNo: "033",
// //   },
// //   {
// //     name: "Marie",
// //     dob: "1867-11-07T00:00:00.000Z",
// //     regNo: "024",
// //   },
// //   {
// //     name: "Neils",
// //     dob: "1885-10-07T00:00:00.000Z",
// //     regNo: "02",
// //   },
// //   {
// //     name: "Max",
// //     dob: "1858-04-23T00:00:00.000Z",
// //     regNo: "014",
// //   },
// //   {
// //     name: "Erwin",
// //     dob: "1887-08-12T00:00:00.000Z",
// //     regNo: "09",
// //   },
// //   {
// //     name: "Auguste",
// //     dob: "1884-01-28T00:00:00.000Z",
// //     regNo: "08",
// //   },
// //   {
// //     name: "Karl",
// //     dob: "1901-12-05T00:00:00.000Z",
// //     regNo: "120",
// //   },
// //   {
// //     name: "Louis",
// //     dob: "1892-08-15T00:00:00.000Z",
// //     regNo: "022",
// //   },
// //   {
// //     name: "Arthur",
// //     dob: "1892-09-10T00:00:00.000Z",
// //     regNo: "321",
// //   },
// //   {
// //     name: "Paul",
// //     dob: "1902-08-08T00:00:00.000Z",
// //     regNo: "055",
// //   },
// //   {
// //     name: "William",
// //     dob: "1890-03-31T00:00:00.000Z",
// //     regNo: "013",
// //   },
// //   {
// //     name: "Owen",
// //     dob: "1879-04-26T00:00:00.000Z",
// //     regNo: "052",
// //   },
// //   {
// //     name: "Martin",
// //     dob: "1871-02-15T00:00:00.000Z",
// //     regNo: "063",
// //   },
// //   {
// //     name: "Guye",
// //     dob: "1866-10-15T00:00:00.000Z",
// //     regNo: "084",
// //   },
// //   {
// //     name: "Charles",
// //     dob: "1868-02-14T00:00:00.000Z",
// //     regNo: "091",
// //   },
// // ];
// // function classify(input){
// // const newInput = sortAges(input)
// // const output = {
// // noOfGroups: 0,
// // }
// // return output;
// // }
// // function group(input){
// //   const newInput = sortAges(input)
// //   let output = {
// //     noOfGroups: 0,
// //   }
// //   for(let i = 0; i < newInput.length; i++){
// //     output.noOfGroups++
// //     let groupname = `group${i / 3 + 1}`
// //     }
// // }
// // function calcAge(input){
// //   const birthDate = new Date(input);
// //   const today = new Date();
// // return  today.getFullYear() - birthDate.getFullYear();
// // }
// // function sortAges(input){
// //   return input.sort((a, b)=>{
// //   return new Date(b.dob).getTime() - new Date(a.dob).getTime()
// //   })
// //   }
// // // function calcAge(input){
// // //   const sortedAge = sortAges(input)
// // // return sortedAge.map((arr)=>{
// // //   const birthDate = new Date(arr.dob);
// // //   const today = new Date();
// // //   const age = today.getFullYear() - birthDate.getFullYear();
// // //   arr.age = age
// // //   return sortedAge
// // // })
// // // }
// // console.log(calcAge('1890-03-31T00:00:00.000Z'))
// const describePerson = (person: {name:string; age:number; parentNames:{
//   mom: string;
//   dad: string
// } }): string =>{
// return `Person: ${person.name}
// Age : ${person.age}
// parents: ${person.parentNames.mom} ${person.parentNames.dad}`
// }
// console.log(describePerson({name: 'jane', age: 12, parentNames:{ mom: 'john', dad: 'doe'}}))
// type Movie =  {
// readonly title: string;
// originalTitle? : string;
// director: string;
// releaseYear: number,
// boxOffice:{
//   budget: number;
//   grossNg: number;
//   grossWorld: number;
// }
// }
// const dune: Movie  = {
//   title: 'Dune', 
//   originalTitle: "Dune part one",
//   director: "Dennis",
//   releaseYear: 2021,
//   boxOffice:{
//     budget: 165000,
//     grossNg: 108000,
//     grossWorld: 400600
//   }
// }
// const cats: Movie = {
//   title: 'Cats', 
//   director: "Tom",
//   releaseYear: 2019,
//   boxOffice:{
//     budget: 950000,
//     grossNg: 271000,
//     grossWorld: 738600
//   }
// }
// // write a function called getProfit that accepts a single movie object 
// // it should return the movies worldwide gross minus budget
// // e.g getProfit(cats)=> -12400
// function getProfit(input: Movie){
// return  input.boxOffice.grossWorld - input.boxOffice.budget
// }
// function getProfit1(input: Movie){
//   const {grossWorld, budget} = input.boxOffice
// return  grossWorld - budget
// }
// function getProfit2({boxOffice:{grossWorld, budget}}: Movie){
// return  grossWorld - budget
// }
// const arr:[string, number] = ['a', 3];
// // const arr: Array<string | number> = []
