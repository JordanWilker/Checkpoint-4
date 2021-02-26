

export default class Weather{
    constructor(data){
        this.temp = data.main.temp,
        this.weather = data.weather
    }
    
    getTypes(){
        let types = " "
        for (let i = 0; i< this.weather.length; i++){
        
        types = types+(this.weather[i].main)+" "
        }
        return types
    }

    get Template() {
        return /*html*/ `
       
        <div class="card-body">
            <p class ="d-inline">${this.getTypes()}</p><br>
            <p class ="d-inline">${this.temp}°K</p>
        </div>
    </div>`
      }

}

