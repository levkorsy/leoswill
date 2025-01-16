import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import scrollIntoView from '@/helpers/scroll-into-view.ts';

export function useNavigation() {
  const { t } = useI18n();

  interface NavigationItem {
    name: string;
    href: string;
  }

  const navigationItems = computed(() => [
    { name: t('NAVBAR.HOME'), href: '#home' },
    {
      name: t('NAVBAR.SMOKE_SIP_ENJOY'),
      href: '#smoke-sip-enjoy',
    },
    { name: t('NAVBAR.RECIPES'), href: '#recipes' },
    { name: t('NAVBAR.INSTRUCTIONS'), href: '#instructions' },
    { name: t('NAVBAR.TIPS'), href: '#tips' },
  ]);

  const activeNavItem = ref<string>('#home');

  const isNavItemActive = (item: NavigationItem) => {
    return item.href === activeNavItem.value;
  };

  const handleNavigation = (item: NavigationItem) => {
    activeNavItem.value = item.href;

    scrollIntoView(item.href, 'start');
  };

  const observer = ref<IntersectionObserver | null>(null);

  const createObserver = () => {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeNavItem.value = `#${entry.target.id}`;
        }
      });
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.value!.observe(section));
  };

  const isShowBackToTopButton = computed(() => {
    const sectionsToShowBackToTopButton = [
      '#recipes',
      '#instructions',
      '#tips',
    ];

    return sectionsToShowBackToTopButton.includes(activeNavItem.value);
  });

  onMounted(() => {
    createObserver();
  });

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect();
    }
  });

  return {
    handleNavigation,
    isNavItemActive,
    navigationItems,
    isShowBackToTopButton,
  };
}
