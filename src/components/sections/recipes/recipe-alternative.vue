<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
  alternative: {
    type: Array as () => string[],
    required: true,
  },
});

const { t } = useI18n();
</script>

<template>
  <h4 class="text-xl font-bold mt-4 text-secondary">
    {{ t('SECTIONS.RECIPES.ALTERNATIVE') }}
  </h4>

  <ul class="list-disc list-inside space-y-2">
    <li v-for="(item, index) in alternative" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
