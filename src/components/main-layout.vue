<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BaseNavbar from './kit/base-navbar.vue';
import ViewsContainer from './kit/views-container.vue';
import BaseFooter from './kit/base-footer.vue';

const isNavbarVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isNavbarVisible.value = !entry.isIntersecting;
    },
    { threshold: 0.1 }
  );

  const firstSection = document.querySelector('#home');
  if (firstSection) {
    observer.observe(firstSection);
  }
});
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <div
      class="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out"
      :class="
        isNavbarVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      "
    >
      <base-navbar class="h-[53px]" />
    </div>

    <div class="flex-1 overflow-y-auto">
      <views-container />

      <base-footer class="h-[80px] bg-gray-900 text-white" />
    </div>
  </div>
</template>

<style scoped></style>
