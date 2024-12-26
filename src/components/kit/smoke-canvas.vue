<template>
  <div class="relative w-full h-full">
    <canvas id="canvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useSmokeCanvas from '@/composables/useSmokeCanvas.ts';

onMounted(() => {
  var canvas = document.getElementsByTagName('canvas')[0];
  if (canvas) {
    useSmokeCanvas(canvas);
  }
});
</script>

<style scoped>
canvas {
  display: block;
}
</style>
