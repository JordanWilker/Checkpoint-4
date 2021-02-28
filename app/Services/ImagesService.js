import { ProxyState } from "../AppState.js"
import Image from "../Models/Image.js"
import {sandBoxApi} from "./Axios.js"

class ImagesService{
    constructor(){
        this.getImage()
    }
    async getImage(){
        try {
            let res = await sandBoxApi.get("images/")
            ProxyState.images = new Image (res.data)
            //console.log(ProxyState.images.url);

        } catch (error) {
            console.error(error)
        }
    }
}

export const imagesService = new ImagesService