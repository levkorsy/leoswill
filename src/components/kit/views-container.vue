<template>
  <main class="flex flex-col w-full">
    <home class="min-h-screen w-full" />
    <smoke-sip-enjoy />
    <base-divider />
    <recipes />
    <base-divider />
    <instructions />
    <base-divider />
    <tips />
    <base-divider />
  </main>
</template>

<script setup lang="ts">
import Home from '@/components/sections/home-section.vue';
import SmokeSipEnjoy from '@/components/sections/smoke-sip-enjoy-section.vue';
import Recipes from '@/components/sections/recipes/recipes-section.vue';
import Instructions from '@/components/sections/instructions/instructions-section.vue';
import Tips from '@/components/sections/tips/tips-section.vue';
import BaseDivider from '@/components/kit/base-divider.vue';
</script>

<style scoped></style>
