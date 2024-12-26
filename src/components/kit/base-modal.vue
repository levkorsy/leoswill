<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog class="relative z-10 bg" @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              :class="[
                'relative transform rounded-lg text-left shadow-xl transition-all max-h-[88vh] mt-8 overflow-auto',
                dialogPanelClass,
              ]"
            >
              <span
                class="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-200 rounded-full hover:bg-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                role="button"
                @click="$emit('close')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>

              <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <slot name="body" />
              </div>
              <div
                v-if="isShowActionButtons"
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="$emit('close')"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="$emit('close')"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  isShowActionButtons: {
    type: Boolean,
    default: false,
  },
  dialogPanelClass: { type: String, default: '' },
});

defineEmits(['close']);
</script>
