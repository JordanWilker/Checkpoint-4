import { ProxyState } from "../AppState.js";
import {quotesService} from "../Services/QuotesService.js"


function _drawQuote(){
    let quotes = ProxyState.quotes
    let template = ""
    console.log("quote from the control")
    
    document.getElementById("quotes").innerHTML = quotes.Template
}

export default class QuotesController{
    constructor(){
       ProxyState.on("quotes",_drawQuote)
    }
}