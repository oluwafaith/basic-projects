"use strict";
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const form = document.querySelector('.form');
const list = document.querySelector('.list');
function readTodo() {
    const todo = localStorage.getItem("todos");
    if (todo === null) {
        return [];
    }
    return JSON.parse(todo);
}
function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
const todos = readTodo();
todos.forEach(todoElement);
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    todoElement(newTodo);
    todos.push(newTodo);
    saveTodo();
    input.value = "";
}
function todoElement(todo) {
    let val = todo.text;
    const listItem = document.createElement('LI');
    const check = document.createElement('input');
    check.type = "checkbox";
    check.checked = todo.completed;
    check.addEventListener("change", function () {
        todo.completed = check.checked;
        saveTodo();
    });
    listItem.append(val);
    listItem.append(check);
    list.append(listItem);
}
form.addEventListener('submit', handleSubmit);
btn.addEventListener('click', handleSubmit);
