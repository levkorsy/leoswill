/* eslint-disable */
// @ts-nocheck
import { onBeforeUnmount, Ref } from 'vue';
import { isMobileDevice } from '@/helpers/isMobileDevice.ts';

export default (aboutVideo: Ref): void => {
  let observer = null;

  if (aboutVideo.value) {
    const videoElement = aboutVideo.value;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isMobileDevice()) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    });

    if (isMobileDevice()) {
      videoElement.removeAttribute('autoplay');
      videoElement.pause();
    } else {
      observer.observe(videoElement);
    }
  }

  onBeforeUnmount(() => {
    if (observer && video) {
      observer.unobserve(video);
      observer.disconnect();
    }
  });
};
