

export default class Quote{
    constructor(data){
        this.quote = data.content,
        this.author = data.author
    }
    
   

    get Template() {
        return /*html*/ `
       
        <div class="card-body">
            <p class ="d-inline">${this.quote}</p><br>
            <p class ="d-inline">${this.author}</p>
        </div>
    </div>`
      }

}

