<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>
http://localhost:5173/lw-v3/images/recipes/spring.png
<template>
  <img
    :src="'/lw-v3' + imageSrc"
    alt="Recipe image"
    class="w-full h-64 object-cover"
  />
</template>
