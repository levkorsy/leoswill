<script setup lang="ts">
import SmokeCanvas from '@/components/kit/smoke-canvas.vue';
import BaseButton from '@/components/kit/base-button.vue';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useElementVisibility } from '@/composables/useElementVisibility.ts';
import { useNavigation } from '@/composables/useNavigation.ts';

const { t } = useI18n();

const { isVisible: isCanvasVisible } = useElementVisibility(
  '.smoke-canvas-container'
);
const { handleNavigation } = useNavigation();

const handleLetsTry = () => {
  handleNavigation({
    name: t('NAVBAR.SMOKE_SIP_ENJOY'),
    href: '#smoke-sip-enjoy',
    current: false,
  });
};
</script>

<template>
  <section
    class="flex items-center justify-center w-full h-screen bg-primary relative smoke-canvas-container"
  >
    <smoke-canvas v-if="isCanvasVisible" />

    <div
      class="absolute items-center justify-center text-center pointer-events-none"
    >
      <h1 class="text-4xl md:text-5xl mb-4 leading-tight">
        {{ t('SECTIONS.HOME.TITLE') }}
        <p class="text-tertiary font-bold mt-4">
          {{ t('SECTIONS.HOME.SUBTITLE') }}
        </p>
      </h1>
      <p
        class="text-4xl md:text-5xl mb-6"
        v-html="t('SECTIONS.HOME.DESCRIPTION')"
      ></p>

      <base-button class="pointer-events-auto" @click="handleLetsTry">
        <div
          class="group text-2xl p-1 px-8 border-white border-2 hover:border-secondary hover:bg-secondary transition-all duration-500 ease-in-out"
        >
          {{ t('SECTIONS.HOME.BUTTON_TITLE') }}
          <font-awesome-icon
            :icon="faArrowRight"
            class="ml-2 transition-transform duration-500 transform group-hover:rotate-90 w-5 h-5"
          />
        </div>
      </base-button>
    </div>
  </section>
</template>

<style scoped></style>
