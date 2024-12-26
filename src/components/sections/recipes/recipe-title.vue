<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h3 class="text-2xl text-center">
    {{ title }}
  </h3>
</template>
