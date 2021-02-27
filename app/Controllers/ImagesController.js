import { ProxyState } from "../AppState.js";
import {imagesService} from "../Services/ImagesService.js"


function _drawImage(){
    let images = ProxyState.images
    let template = ""
    console.log("image from the control")
    
    //document.getElementById("images"). = images.url
}

export default class ImagesController{
    constructor(){
       ProxyState.on("images",_drawImage)
    }
}