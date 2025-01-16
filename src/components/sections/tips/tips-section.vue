<script setup lang="ts">
import SectionHeader from '@/components/sections/components/section-header.vue';
import { useTips } from '@/components/sections/tips/useTips.ts';
import { useI18n } from 'vue-i18n';
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';

const { t } = useI18n();
const { tipsGlassFirst, tipsWhiskeyFirst, tipsConclusions } = useTips();
</script>

<template>
  <section
    id="tips"
    class="flex flex-col items-center justify-start h-auto bg-primary py-10 px-5"
  >
    <section-header text="SECTIONS.TIPS.TITLE" />
    <div class="max-w-7xl">
      <!-- Glass First Section -->
      <section-sub-header class="mt-8" text="SECTIONS.TIPS.GLASS_FIRST.TITLE" />

      <div v-for="(tip, index) in tipsGlassFirst" :key="index" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">{{ t(tip.title) }}</h2>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="(step, i) in tip.steps" :key="i" v-html="t(step)"></li>
        </ul>
      </div>

      <!-- Whiskey First Section -->
      <section-sub-header
        class="mt-8"
        text="SECTIONS.TIPS.WHISKEY_FIRST.TITLE"
      />

      <div v-for="(tip, index) in tipsWhiskeyFirst" :key="index" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">{{ t(tip.title) }}</h2>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="(step, i) in tip.steps" :key="i" v-html="t(step)"></li>
        </ul>
      </div>

      <!-- Conclusions Section -->
      <div class="mt-10 p-6 border border-quinary rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">{{ t(tipsConclusions.title) }}</h2>
        <p class="mb-4">{{ t(tipsConclusions.description) }}</p>
        <ul class="list-disc list-inside space-y-2">
          <li
            v-for="(step, i) in tipsConclusions.steps"
            :key="i"
            v-html="t(step)"
          ></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
