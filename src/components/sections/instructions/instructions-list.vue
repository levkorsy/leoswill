<script setup lang="ts">
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { instructions } = useInstructions();
</script>

<template>
  <ul class="list-disc pl-6 space-y-4">
    <li
      v-for="(key, index) in instructions"
      :key="index"
      class="flex items-start gap-3"
    >
      <div
        class="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-primary"
      >
        <span class="text-base">★</span>
      </div>
      <span class="leading-relaxed">{{ t(key) }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
