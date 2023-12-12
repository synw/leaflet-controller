<template>
  <div class="flex flex-col">
    <div class="p-5 flex flex-row space-x-3 items-center">
      <div>
        <MultiSelect v-model="selected" :options="countries" filter optionLabel="name" optionValue="name"
          placeholder="Select countries" :loading="!isLoaded" @change="onSelect($event)" />
      </div>
      <div>
        <button class="btn secondary" @click="updateMap()">Update map</button>
      </div>
    </div>
    <div class="w-full h-full border relative">
      <the-map></the-map>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import MultiSelect from 'primevue/multiselect';
import TheMap from '@/components/TheMap.vue';
import { loadCountriesList, loadCountries } from '@/services/db';
import L, { LatLngBounds, LatLngExpression, map } from "leaflet";
import { usePolygonController } from "leaflet-controller";
import { mapController } from '@/state';
import { PolygonController } from 'leaflet-controller/dist/interfaces';

const isLoaded = ref(false);
const countries = ref<Array<Record<string, string>>>([]);
const selected = ref();

function polygonFromGeometry(name: string, geom: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][]): PolygonController {
  const poly = usePolygonController({
    name: name,
    polygon: L.polygon(geom),
  });
  //console.log("POLY", poly);
  return poly
}

function fitBounds() {
  const polygons = Object.values(mapController.state.polygons);
  const first = polygons.shift();
  if (!first) {
    throw new Error("No polygons on map for bounds")
  }
  const bounds = first.polygon.getBounds();
  for (const poly of Object.values(mapController.state.polygons)) {
    bounds.extend(poly.polygon.getBounds())
  }
  bounds.pad(0.1);
  mapController.map.fitBounds(bounds);
}

function onSelect(evt) {
  console.log(selected.value, "//", evt.value)
}

async function updateMap() {
  const _c = countries.value.filter(c => selected.value.includes(c.name));
  const names = new Array<string>();
  _c.forEach((c) => {
    names.push(c.name)
  });
  const cs = await loadCountries(names);
  //console.log("Countries", cs);

  // cleanup before redraw all
  for (const k of Object.keys(mapController.state.polygons)) {
    mapController.removePolygonController(k)
  }

  for (const country of cs) {
    const data = JSON.parse(country.coordinates);
    const poly = polygonFromGeometry(country.name, data);  // type: ignore
    mapController.addPolygonController(poly)
  }

  if (cs.length > 0) {
    fitBounds()
  }
}

onBeforeMount(() => {
  loadCountriesList().then((c) => {
    countries.value = c;
    isLoaded.value = true;
    console.log("C", c);
  })
})
</script>