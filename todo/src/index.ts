interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.querySelector('.input')! as HTMLInputElement 
const form = document.querySelector('.form')! as HTMLFormElement
const list = document.querySelector('.list')! as HTMLUListElement 


function readTodo():Todo[]{
  const todo = localStorage.getItem("todos")
  if(todo === null){
     return []
  }
  return JSON.parse(todo)
}

function saveTodo (){
  localStorage.setItem("todos", JSON.stringify(todos))
}

const todos: Todo[] = readTodo()
todos.forEach(todoElement)
function handleSubmit(e: Event){
e.preventDefault()
const newTodo:Todo = {
  text: input.value,
  completed: false
}
todoElement(newTodo)
todos.push(newTodo)
saveTodo()
input.value = ""
}

function todoElement(todo:Todo){
  let val = todo.text
  const listItem = document.createElement('LI')
  const check  = document.createElement('input')

  check.type = "checkbox"
  check.checked = todo.completed
  check.addEventListener("change", function(){
  todo.completed = check.checked
  saveTodo()
  })

   listItem.append(val)
   listItem.append(check)

  list.append(listItem)
}

form.addEventListener('submit',handleSubmit)
btn.addEventListener('click',handleSubmit)

