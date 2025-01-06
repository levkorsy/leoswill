<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

import SectionHeader from '@/components/sections/components/section-header.vue';
import SectionSubHeader from '@/components/sections/components/section-sub-header.vue';
import BaseImage from '@/components/kit/base-image.vue';
import { isMobileDevice } from '@/helpers/isMobileDevice.ts';
</script>

<template>
  <section
    class="flex flex-col items-center justify-start h-auto bg-primary py-10"
  >
    <section-header class="mt-8" text="SECTIONS.SMOKE_SIP_ENJOY.TITLE" />

    <div class="w-full max-w-7xl mb-10 about-video-container">
      <!--      TODO improve video logic-->
      <video
        src="/videos/backround-vid.mp4"
        muted
        playsinline
        :loop="!isMobileDevice()"
        autoplay
        :controls="isMobileDevice()"
        class="w-full h-auto rounded-lg shadow-lg"
      ></video>
    </div>

    <div class="flex flex-col items-center w-full max-w-7xl">
      <section-sub-header text="SECTIONS.SMOKE_SIP_ENJOY.ABOUT_US" />

      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <base-image
            imageSrc="/images/angel_leo.webp"
            alt="Family photo"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div class="flex-1">
          <base-image
            imageSrc="/images/about_us_text.jpg"
            alt="About us"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <div class="w-full max-w-7xl mt-10 px-4">
      <section-sub-header text="SECTIONS.SMOKE_SIP_ENJOY.OUR_PRODUCT.TITLE" />

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PRODUCT.DESCRIPTION_LINE_1') }}
      </p>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PRODUCT.DESCRIPTION_LINE_2') }}
      </p>
    </div>

    <div class="w-full max-w-7xl mt-10 px-4">
      <section-sub-header
        text="SECTIONS.SMOKE_SIP_ENJOY.OUR_PHILOSOPHY.TITLE"
      />

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PHILOSOPHY.DESCRIPTION_LINE_1') }}
      </p>

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.OUR_PHILOSOPHY.DESCRIPTION_LINE_2') }}
      </p>
    </div>

    <div class="w-full max-w-7xl mt-10 px-4">
      <section-sub-header text="SECTIONS.SMOKE_SIP_ENJOY.JOIN_US.TITLE" />

      <p class="mb-6 text-lg leading-relaxed indent-10 text-justify">
        {{ t('SECTIONS.SMOKE_SIP_ENJOY.JOIN_US.DESCRIPTION_LINE_1') }}
      </p>
    </div>
  </section>
</template>
<style scoped>
video {
  object-fit: cover;
}
</style>
