import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoib3N2YWxkbzI2diIsImEiOiJjbGU3ZXJiaTAwNHFsM3BvNm82dHd3d2h3In0.nZEaXfJlpltxi3l42SrycA';



if(!navigator.geolocation){
    alert('Tu navegador no soporta la Geolocalización');
    throw new Error('Tu navegador no soporta la Geolocalización');  
}

createApp(App)
.use(store)
.use(router)
.mount('#app')
