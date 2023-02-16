import { defineComponent, ref, onMounted, reactive, readonly, watch } from 'vue';
import { usePlaceStore, useMapStore } from '@/composables';

import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup(){
        const mapElement = ref<HTMLDivElement>();
        const{userLocation, isUserLocationReady} = usePlaceStore()

        const {setMap} = useMapStore();

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

                const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat( userLocation.value)
                .setHTML(`
                <h4>Aquí estoy</h4>
                <p>Actualmente en Polanco</p>
                `)

                const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);

                setMap(map)
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