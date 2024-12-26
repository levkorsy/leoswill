import { ref, onMounted, onUnmounted } from 'vue';
import { observeElementVisibility } from '@/helpers/intersection-observer';

export function useElementVisibility(
  selector: string,
  options = { threshold: 0.1 }
) {
  const isVisible = ref(false);
  let cleanupObserver: () => void;

  onMounted(() => {
    const element = document.querySelector(selector);
    if (element) {
      cleanupObserver = observeElementVisibility(
        element as HTMLElement,
        (isIntersecting) => {
          isVisible.value = isIntersecting;
        },
        options
      );
    }
  });

  onUnmounted(() => {
    if (cleanupObserver) cleanupObserver();
  });

  return { isVisible };
}
