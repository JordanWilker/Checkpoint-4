import { ProxyState } from "../AppState.js";
import {imagesService} from "../Services/ImagesService.js"


function _drawImage(){
    let images = ProxyState.images.url
    console.log(images)
    
    document.getElementById("images").style.backgroundImage = "url("+images+")";
}

export default class ImagesController{
    constructor(){
       ProxyState.on("images",_drawImage)
    }
}