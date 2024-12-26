<script setup lang="ts">
import SectionHeader from '@/components/sections/components/section-header.vue';
import BaseImage from '@/components/kit/base-image.vue';
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import TorchInstructions from '@/components/sections/instructions/torch-instructions.vue';
import AdditionalTips from '@/components/sections/instructions/additional-tips.vue';
import InstructionsList from '@/components/sections/instructions/instructions-list.vue';
import StonesInstructions from '@/components/sections/instructions/stones-instructions.vue';
import MetalStonesAdvantages from '@/components/sections/instructions/metal-stones-advantages.vue';
import MetalStonesCleaning from '@/components/sections/instructions/metal-stones-cleaning.vue';
</script>

<template>
  <section
    class="flex flex-col items-center justify-start h-auto bg-primary py-10 px-2"
  >
    <section-header text="SECTIONS.INSTRUCTIONS.TITLE" />

    <base-image
      imageSrc="/images/instructions/smoker_instruction.webp"
      alt="Smoker instructions"
      class="w-full h-auto rounded-lg shadow-lg max-w-7xl"
    />
    <!--TODO enlarge images-->
    <div class="max-w-7xl">
      <section-sub-header class="mt-16" text="SECTIONS.INSTRUCTIONS.SUBTITLE" />

      <instructions-list />

      <additional-tips />

      <torch-instructions />

      <stones-instructions />

      <metal-stones-advantages />

      <metal-stones-cleaning />
    </div>
  </section>
</template>

<style scoped></style>
