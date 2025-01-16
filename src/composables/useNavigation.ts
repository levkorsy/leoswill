import { computed, ref } from 'vue';
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

  const activeNavItem = ref<string>(t('NAVBAR.HOME'));

  const handleNavigation = (item: NavigationItem) => {
    activeNavItem.value = item.name;
    //TODO fix navigation
    scrollIntoView(item.href, 'start');
  };

  // watchEffect(() => {
  //   updateNavigation();
  // });

  const isNavItemActive = (item: NavigationItem) =>
    item.name === activeNavItem.value;

  return { handleNavigation, isNavItemActive, navigationItems };
}
