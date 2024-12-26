<script setup lang="ts">
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import { useI18n } from 'vue-i18n';
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';

const { t } = useI18n();
const { cleaningMaintenanceStones } = useInstructions();
</script>

<template>
  <section-sub-header
    class="mt-16"
    text="SECTIONS.INSTRUCTIONS.STONES.CLEANING.TITLE"
  />

  <div class="p-6">
    <ul class="list-disc pl-6 space-y-3">
      <li
        v-for="(rule, idx) in cleaningMaintenanceStones"
        :key="idx"
        v-html="t(rule)"
        class="text-lg leading-relaxed"
      ></li>
    </ul>

    <p class="mt-6 text-justify font-extrabold">
      {{ t('SECTIONS.INSTRUCTIONS.STONES.CLEANING.CONCLUSION') }}
    </p>
  </div>
</template>

<style scoped></style>
