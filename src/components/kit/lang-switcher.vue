<template>
  <div class="locale-changer relative">
    <select
      v-model="locale"
      class="block w-full px-4 py-2 text-sm text-secondary uppercase rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary bg-primary"
    >
      <option
        v-for="locale in availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
        class="text-secondary uppercase"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();
</script>
