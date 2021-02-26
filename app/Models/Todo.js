

export default class Todo{
    constructor(data){
        this._id = data._id
        this.completed = data.completed || false
        this.user = data.user
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
       
        <div class="card-body ${this.completed ==true ? 'text-success': 'text-danger'} ">
            <p class ="d-inline"onclick="app.todosController.completeMyTodos('${this._id}')">${this.description}</p>
            <button class=" d-inline text-danger close mt-3" onclick="app.todosController.deleteTodos('${this._id}')"><span>&times;</span></button> 
        </div>
    </div>`
      }
}

