<script setup lang="ts">
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import { useI18n } from 'vue-i18n';
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';

const { t } = useI18n();
const { metalVsIceAdvantages } = useInstructions();
</script>

<template>
  <section-sub-header
    class="mt-8 sm:mt-16"
    text="SECTIONS.INSTRUCTIONS.ADVANTAGES.TITLE"
  />
  <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
    <div
      v-for="(advantage, index) in metalVsIceAdvantages"
      :key="index"
      class="p-2 sm:p-4 border-none sm:border-l-8 sm:border-quinary sm:border-double text-justify"
    >
      <h4 class="mb-3 font-bold text-2xl">{{ t(advantage.title) }}</h4>
      <ul>
        <li
          v-for="(step, idx) in advantage.steps"
          :key="idx"
          v-html="t(step)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
