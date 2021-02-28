import { ProxyState } from "../AppState.js";
import {todosService} from "../Services/TodosService.js"

function _drawMyTodos(){
    let todos = ProxyState.todos
    let template = ""
    console.log("working from the control")
    todos.forEach(t=> template += t.Template)
    document.getElementById("todos").innerHTML = template; 
    // @ts-ignore
    document.getElementById("todos-amount").innerText = ProxyState.todos.length+" Tasks";
}

export default class TodosController{
    constructor(){
       ProxyState.on("todos", _drawMyTodos)
    }

    createTodo(event){
        event.preventDefault();
        console.log("creating todo");
        let form = event.target
        //console.log(form);
        let rawTodo = {
            description: form.description.value,
            
        }
        console.log(rawTodo);
        todosService.createTodo(rawTodo)
    }
    completeMyTodos(_id){
        todosService.completeMyTodos(_id)
    }
    deleteTodos(_id){
        todosService.deleteTodos(_id)
    }
}