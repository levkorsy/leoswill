<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  text: { type: String, default: '' },
});
</script>

<template>
  <h2 class="text-4xl font-bold mb-6 text-center pt-16">
    {{ t(text) }}
  </h2>
</template>
