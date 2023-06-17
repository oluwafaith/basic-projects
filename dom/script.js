//DOM =>

//API =>

//SELECTING
//selectors:
//getElementById
// document.getElementById()

// document.getElementsByClassName()

// document.getElementsByTagName()

// document.querySelector()

// document.querySelectorAll(): 

// const id = document.getElementById('hello')
// const classType = document.getElementsByClassName('hello1')
// const tagType = document.getElementsByTagName('p')

// const selectorAll = document.querySelectorAll('.hello1')



//creating element 


//prepend  append
// selector.prepend(paragraph)
// 

//classList 
// paragraph.classList.add('hello1')
// paragraph.textContent = "hello , how are you"
// selector.append(paragraph)


//events 
// const paragraph = document.createElement('p')
// const selector = document.querySelector('.hello1')
// const today = function(){
//   console.log('hello');
//   }
// selector.addEventListener('click', today())

//api
//client  => server
      //  api
//request

//public 
//private

//public: 
//fetch('url')
//synchronous  || asynchronous
//

const data = fetch('https://swapi.dev/api/people')
console.log(data)