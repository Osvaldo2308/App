import axios from "axios";

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        Language: 'es',
        access_token:'pk.eyJ1Ijoib3N2YWxkbzI2diIsImEiOiJjbGU3ZXJiaTAwNHFsM3BvNm82dHd3d2h3In0.nZEaXfJlpltxi3l42SrycA'
    }
})

export default searchApi;