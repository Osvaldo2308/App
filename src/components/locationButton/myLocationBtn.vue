<template>
    <button
        v-if="isBtnReady"
        @click="onMyLocationClicked" 
        class="btn btn-primary">
        Ir a mi ubicación
    </button>
</template>

<script lang="ts">
import { useMapStore, usePlaceStore } from '@/composables';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name:'myLocationBtn',
    setup(){
        const { userLocation, isUserLocationReady } = usePlaceStore()
        const { map, isMapReady} = useMapStore()
        return{
            isBtnReady: computed<boolean>(()=>isUserLocationReady.value && isMapReady.value ),

            onMyLocationClicked: ()=>{
                map.value?.flyTo({
                    center: userLocation.value, 
                    zoom: 18
                })
            }
        }
    }
})
</script>

<style scoped>
button{
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>