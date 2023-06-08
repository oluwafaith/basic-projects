// fetch('https://swapi.dev/api/people').then(
// (response) =>{
//   return response.json()
// }
// ).then(data=>{
//   console.log(data.results)
// })

const doc = document.querySelector(".hello");
const characters = fetch("https://swapi.dev/api/people");
// console.log(characters);
let output = '';
characters
  .then((response) => response.json())
  .then((data) => {
    const value = data.results;

    console.log(value)

    for (let i = 0; i < value.length; i++) {
      output += `
    <li>${value[i].name}</li>

`;
      doc.innerHTML = output;
    }
  });



async function getData(){
  const doc = document.querySelector(".hello");
  const response = await fetch('https://swapi.dev/api/people')
let output = ''
  const data = await response.json()
  const characters = data.results
  console.log(characters)
  for (let i = 0; i < characters.length; i++) {
    output += `
  <li>${characters[i].name}</li>

`;
    doc.innerHTML = output;
  }
 
}
getData()
