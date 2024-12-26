<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  text: { type: String, default: '' },
});
</script>

<template>
  <h3 class="mb-8 text-3xl text-center">
    {{ t(text) }}
  </h3>
</template>
