<script setup lang="ts">
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import { useInstructions } from '@/components/sections/instructions/useInstructions.ts';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { torchInstructions } = useInstructions();
</script>

<template>
  <section-sub-header class="mt-16" text="SECTIONS.INSTRUCTIONS.TORCH.TITLE" />

  <div class="flex flex-col md:flex-row items-start gap-8 p-6 rounded-lg">
    <div class="flex justify-center shadow-lg">
      <video
        src="/videos/fill_torch.mp4"
        muted
        playsinline
        loop
        autoplay
        controls
        class="w-full h-auto max-h-[750px] rounded-lg shadow-lg"
      ></video>
    </div>

    <!-- Text Section -->
    <div class="w-full md:w-1/2 text-left">
      <h4 class="text-xl font-bold mb-4">
        {{ t('SECTIONS.INSTRUCTIONS.TORCH.DESCRIPTION') }}
      </h4>

      <ul class="list-disc pl-6 space-y-3">
        <li
          v-for="(instruction, index) in torchInstructions"
          :key="index"
          class="text-lg leading-relaxed"
        >
          {{ t(instruction) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
