<template>
  <div id="mapContainer"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { mapController } from '@/state';

function initMap() {
  console.log("Init map");
  mapController.setMap({
    container: "mapContainer",
    center: [0, 0],
    zoom: 2,
    options: { attributionControl: false, zoomControl: true, zoomAnimation: false },
  });
};

onMounted(() => initMap());
</script>

<style lang="sass">
#mapContainer
  width: 100%
  height: 32rem
  //position: absolute

</style>