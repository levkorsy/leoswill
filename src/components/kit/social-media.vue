<script setup lang="ts">
import { amazonLink, instagramLink } from '@/constans/social-media-links.ts';
</script>

<template>
  <!-- Instagram -->
  <div class="flex items-center space-x-4">
    <a
      :href="instagramLink"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-300 hover:text-secondary transition duration-300 hover:scale-150"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" />
    </a>

    <!-- Amazon -->
    <a
      :href="amazonLink"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-300 hover:text-secondary transition duration-300 hover:scale-150"
    >
      <font-awesome-icon :icon="['fab', 'amazon']" class="w-6 h-6" />
    </a>
  </div>
</template>

<style scoped></style>
