<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';

const { t } = useI18n();
const { additionalTips } = useInstructions();
</script>

<template>
  <div class="w-full p-10 mt-16 border border-quinary rounded-lg">
    <h3 class="text-xl font-bold mb-4 text-secondary uppercase">
      {{ t('SECTIONS.INSTRUCTIONS.ADDITIONAL_TIPS') }}
    </h3>

    <ul class="list-none list-outside space-y-4">
      <li
        v-for="(tip, index) in additionalTips"
        :key="index"
        class="flex items-start space-x-3"
      >
        <span
          class="flex items-center justify-center w-6 h-6 min-w-6 min-h-6 bg-quaternary text-white rounded-full"
        >
          💡
        </span>
        <p class="text-lg leading-relaxed text-white" v-html="t(tip)"></p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
