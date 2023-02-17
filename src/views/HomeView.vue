<template>
  <MapView/>
  <searchBar/>
  <myLocationBtn/>
  <TripDetails/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlaceStore } from '@/composables';


import MapView from '@/components/mapview/mapView.vue';
import searchBar from '@/components/searchBar/searchBar.vue';
import myLocationBtn from '@/components/locationButton/myLocationBtn.vue';
import TripDetails from '../components/DetailsMap/detailsMap.vue'

export default defineComponent({
  name: 'HomeView',
  components: { MapView, myLocationBtn, searchBar, TripDetails},
  setup(){
    usePlaceStore();
  }
});
</script>
