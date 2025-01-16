<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import LangSwitcher from '@/components/kit/lang-switcher.vue';
import SocialMedia from '@/components/kit/social-media.vue';
import { useNavigation } from '@/composables/useNavigation.ts';

const { handleNavigation, isNavItemActive, navigationItems } = useNavigation();
</script>

<template>
  <Disclosure
    as="nav"
    class="bg-quaternary border-b-2 border-secondary"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <button
                v-for="item in navigationItems"
                :key="item.name"
                :class="[
                  isNavItemActive(item)
                    ? 'text-tertiary hover:text-tertiary'
                    : 'text-white hover:text-secondary',
                  'uppercase rounded-md px-3 py-2 text-base font-medium',
                ]"
                :aria-current="isNavItemActive(item) ? 'page' : undefined"
                @click="handleNavigation(item)"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <social-media />
          <lang-switcher class="ml-3 mb-3" />
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden bg-quaternary">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigationItems"
          :key="item.name"
          as="button"
          :class="[
            isNavItemActive(item)
              ? 'text-tertiary hover:text-tertiary'
              : 'text-white hover:text-secondary',
            'block uppercase rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="isNavItemActive(item) ? 'page' : undefined"
          @click="handleNavigation(item)"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
