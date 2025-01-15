import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import scrollIntoView from '@/helpers/scroll-into-view.ts';

export function useNavigation() {
  const { t } = useI18n();

  interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }

  const navigation = ref<NavigationItem[]>([]);

  const updateNavigation = () => {
    navigation.value = [
      { name: t('NAVBAR.HOME'), href: '#home', current: true },
      {
        name: t('NAVBAR.SMOKE_SIP_ENJOY'),
        href: '#smoke-sip-enjoy',
        current: false,
      },
      { name: t('NAVBAR.RECIPES'), href: '#recipes', current: false },
      { name: t('NAVBAR.INSTRUCTIONS'), href: '#instructions', current: false },
      { name: t('NAVBAR.TIPS'), href: '#tips', current: false },
    ];
  };

  const handleNavigation = (item: NavigationItem) => {
    navigation.value.forEach((navItem) => {
      navItem.current = navItem.name === item.name;
    });
    //TODO fix navigation
    scrollIntoView(item.href);
  };

  watchEffect(() => {
    updateNavigation();
  });

  return { handleNavigation, navigation };
}
