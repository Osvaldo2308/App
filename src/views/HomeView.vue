<template>
  <mapView/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlaceStore } from '@/composables';

import MapView from '@/components/mapview/mapView.vue'

export default defineComponent({
  name: 'HomeView',
  components: { MapView },
  setup(){
    usePlaceStore();
  }
});
</script>
