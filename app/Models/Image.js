

export default class Image{
    constructor(data){
        this.url = data.url
    }
    
   

    get Template() {
        return /*html*/ `
       
        <div class="card-body">
            <p class ="d-inline">${this.url}</p><br>
        </div>
    </div>`
      }

}

