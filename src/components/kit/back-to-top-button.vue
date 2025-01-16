<template>
  <button
    v-if="isShowBackToTopButton"
    class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-orange-300 hover:bg-orange-400 text-white rounded-lg p-3 shadow-orange pulse-animation"
    @click="scrollToTop"
  >
    <svg
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { useNavigation } from '@/composables/useNavigation.ts';
import { useI18n } from 'vue-i18n';

const { handleNavigation, isShowBackToTopButton } = useNavigation();
const { t } = useI18n();

const scrollToTop = () => {
  handleNavigation({
    name: t('NAVBAR.SMOKE_SIP_ENJOY'),
    href: '#smoke-sip-enjoy',
  });
};
</script>
<style>
.shadow-orange {
  box-shadow: 0 4px 15px rgba(255, 165, 0, 0.6);
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

.pulse-animation {
  animation: pulse 2s infinite;
}
</style>
