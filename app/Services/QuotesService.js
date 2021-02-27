import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import {sandBoxApi} from "./Axios.js"

class QuotesService{
    constructor(){
        this.getQuote()
    }
    async getQuote(){
        try {
            let res = await sandBoxApi.get("quotes/")
            ProxyState.quotes = new Quote (res.data)

        } catch (error) {
            console.error(error)
        }
    }
}

export const quotesService = new QuotesService