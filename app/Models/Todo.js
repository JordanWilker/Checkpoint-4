

export default class Todo{
    constructor(data){
        this._id = data._id
        this.completed = data.completed || false
        this.user = data.user
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
       
        <div class="card-text ${this.completed ==true ? 'completed': ''}  " style ="max-width: 18rem;">
            <li class ="" onclick="app.todosController.completeMyTodos('${this._id}')">${this.description} <button class=" d-inline text-danger close" onclick="app.todosController.deleteTodos('${this._id}')"><span>&times;</span></button></li>
    </div>`
      }
}

