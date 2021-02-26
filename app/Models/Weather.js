

export default class Weather{
    constructor(data){
        this.temp = data.main.temp,
        this.weather = data.weather.main
    }


    get Template() {
        return /*html*/ `
       
        <div class="card-body">
            <p class ="d-inline">${this.weather}++${this.temp}</p>
        </div>
    </div>`
      }

}

