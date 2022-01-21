import axios from "axios"; 
//import { config } from "../../../server/db";

const $host = axios.create({
    //baseURL: process.env.REACT_APP_API_URL 
    baseURL: process.env.REACT_APP_SERVER_URL
})

export {
    $host
}