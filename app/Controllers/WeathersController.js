import { ProxyState } from "../AppState.js";
import {weathersService} from "../Services/WeathersService.js"


function _drawWeather(){
    let weathers = ProxyState.weathers
    let template = ""
    console.log("weather from the control")
    
    document.getElementById("weathers").innerHTML = weathers.Template
}

export default class WeathersController{
    constructor(){
       ProxyState.on("weathers",_drawWeather)
    }
}