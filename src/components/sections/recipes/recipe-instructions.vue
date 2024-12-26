<script setup lang="ts">
import InstructionGroup from './instruction-group.vue';
import { useI18n } from 'vue-i18n';

defineProps({
  instructions: {
    type: Array as () => { title: string; steps: string[] }[],
    required: true,
  },
});
const { t } = useI18n();
</script>

<template>
  <div>
    <h4 class="text-xl font-bold mt-4 text-secondary">
      {{ t('SECTIONS.RECIPES.INSTRUCTIONS') }}
    </h4>

    <instruction-group
      v-for="(group, index) in instructions"
      :key="index"
      :title="group.title"
      :steps="group.steps"
    />
  </div>
</template>
