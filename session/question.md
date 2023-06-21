write the movie type alias to make the following two variables properly typed
make sure the originalTitle is optional  and title is readonly 

const dune: Movie = {
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
const cats: Movies = {
  title: 'Cats', 
  director: "Tom",
  releaseYear: 2019,
  boxOffice:{
    budget: 950000,
    grossNg: 271000,
    grossWorld: 738600
  }
}
write a function called getProfit that accepts a single movie object 
it should return the movies worldwide gross minus budget
e.g getProfit(cats)=> -12400

type Movie =  {
readonly title: string;
originalTitle? : string;
director: string;
releaseYear: number,
boxOffice:{
  budget: number;
  grossNg: number;
  grossWorld: number;
}
}


function getProfit(input: Movie){
return  input.boxOffice.grossWorld - input.boxOffice.budget
}
function getProfit1(input: Movie){
  const {grossWorld, budget} = input.boxOffice
return  grossWorld - budget
}
function getProfit2({boxOffice:{grossWorld, budget}}: Movie){
return  grossWorld - budget
}