import { sandBoxApiTodo } from "./Axios.js"
import {ProxyState} from "../AppState.js"
import Todo from "../Models/Todo.js"


class TodosService{
    constructor(){
        this.getMyTodos()
    }
    
    
    async getMyTodos(){
        try {
            let res = await sandBoxApiTodo.get("todos")
            console.log("meep")
            ProxyState.todos = res.data.map(t=> new Todo(t))
            console.log(ProxyState.todos);
        } catch (error) {
           console.error(error) 
        }
    }
    
    async createTodo(rawTodo) {
       try {
           let res = await sandBoxApiTodo.post("todos",rawTodo)
           this.getMyTodos()
       } catch (error) {
           console.error(error)
       }
    }

    async completeMyTodos(_id){
        let todo = ProxyState.todos.find(t=>t._id ==_id)
        todo.completed = true
        try {
            let res = await sandBoxApiTodo.put("todos/"+_id, todo )
            console.log(res.data);
            ProxyState.todos = ProxyState.todos
        } catch (error) {
            console.error(error)
        }

    }

    async deleteTodos(_id){
       try {
           
            let res = await sandBoxApiTodo.delete("todos/"+_id)
            this.getMyTodos()
            console.log(res);   
       } catch (error) {
          console.error(error) 
       }
    }
}

export const todosService = new TodosService