import axios from "axios";

const directionApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:'pk.eyJ1Ijoib3N2YWxkbzI2diIsImEiOiJjbGU3ZXJiaTAwNHFsM3BvNm82dHd3d2h3In0.nZEaXfJlpltxi3l42SrycA'
    }
})

export default directionApi;