import { defineComponent, ref, onMounted, reactive, readonly, watch } from 'vue';
import { usePlaceStore } from '../../composables/usePlaceStore';
import Mapboxgl from 'mapbox-gl';


export default defineComponent({
    name: 'MapView',
    setup(){
        const mapElement = ref<HTMLDivElement>();
        const{userLocation, isUserLocationReady} = usePlaceStore()

        const initMap = async() =>{
            if(!mapElement.value) throw new Error('Div Elemento no existe');
            if(!userLocation.value)throw new Error('User location no Existe')

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });
        }
        onMounted(()=>{
        if (isUserLocationReady.value) 
            return initMap();
        })
        watch(
            isUserLocationReady, (newVal)=>{
                if(isUserLocationReady.value)
                initMap()
            })
        return{
            isUserLocationReady,
            mapElement
        }
    }
})