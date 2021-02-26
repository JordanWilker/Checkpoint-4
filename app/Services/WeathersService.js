import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"
import {sandBoxApi} from "./Axios.js"

class WeathersService{
    constructor(){
        this.getWeather()
    }
    async getWeather(){
        try {
            let res = await sandBoxApi.get("weather/")
            ProxyState.weathers = new Weather (res.data)

        } catch (error) {
            console.error(error)
        }
    }
}

export const weathersService = new WeathersService