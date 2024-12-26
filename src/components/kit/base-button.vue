<template>
  <button :disabled="disabled" @click="handleClick">
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>
