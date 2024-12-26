<template>
  <img :src="getImageSrc(imageSrc)" :alt="alt" />
</template>

<script setup lang="ts">
import { getImageSrc } from '@/helpers/get-image-src.ts';

defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Image',
  },
});
</script>
