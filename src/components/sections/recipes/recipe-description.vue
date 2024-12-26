<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="text-lg mb-4 leading-relaxed indent-10 text-justify">
    {{ description }}
  </p>
</template>
