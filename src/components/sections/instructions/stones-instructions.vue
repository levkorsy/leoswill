<script setup lang="ts">
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import BaseImage from '@/components/kit/base-image.vue';
import { useI18n } from 'vue-i18n';
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';

const { t } = useI18n();
const { stonesInstructions } = useInstructions();
</script>

<template>
  <section-sub-header class="mt-16" text="SECTIONS.INSTRUCTIONS.STONES.TITLE" />

  <div class="flex">
    <div class="flex flex-col sm:flex-row p-6">
      <div>
        <base-image
          image-src="/images/instructions/whiskey_stones_washing.webp"
          alt="Stones washing"
          class="w-full h-auto rounded-lg shadow-lg max-w-xl mb-8"
        />
        <base-image
          image-src="/images/instructions/stones_with_liquid_smole.webp"
          alt="Stones with liquid"
          class="w-full h-auto rounded-lg shadow-lg max-w-xl"
        />
      </div>
      <div
        class="border-none sm:border-r-8 sm:border-quinary sm:border-double ml-10"
      ></div>
      <div class="px-0 sm:px-6 p-6 ml-0 sm:ml-4">
        <h4 class="text-xl font-bold mb-4">
          {{ t('SECTIONS.INSTRUCTIONS.STONES.DESCRIPTION') }}
        </h4>

        <ul class="list-disc pl-6 space-y-3">
          <li
            v-for="(instruction, index) in stonesInstructions"
            :key="index"
            class="text-lg leading-relaxed"
          >
            {{ t(instruction) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
