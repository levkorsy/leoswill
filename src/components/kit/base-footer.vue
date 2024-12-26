<template>
  <footer class="flex items-center flex-col w-full max-h-96 bg-primary">
    <social-media class="mt-3 mb-3" />

    <p class="text-[11px]">
      <span class="text-tertiary">Leo`s Will.</span>
      All rights reserved
      <span class="text-tertiary">© {{ getYearForCopy() }}</span>
    </p>
  </footer>
</template>

<script setup>
import SocialMedia from '@/components/kit/social-media.vue';

const getYearForCopy = () => {
  return new Date().getFullYear();
};
</script>

<style scoped></style>
