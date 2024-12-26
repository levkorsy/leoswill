<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-orange-300 hover:bg-orange-400 text-white rounded-lg p-3 shadow-lg transition-opacity duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
