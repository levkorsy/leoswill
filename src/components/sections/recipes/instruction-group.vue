<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  steps: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<template>
  <div>
    <h5 class="text-lg font-semibold mt-2">{{ title }}</h5>
    <ul class="list-decimal list-inside space-y-1">
      <li v-for="(step, index) in steps" :key="index">
        {{ step }}
      </li>
    </ul>
  </div>
</template>
