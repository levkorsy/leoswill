<script setup lang="ts">
import BaseModal from '@/components/kit/base-modal.vue';
import RecipeTitle from '@/components/sections/recipes/recipe-title.vue';
import RecipeDescription from '@/components/sections/recipes/recipe-description.vue';
import RecipeIngredients from '@/components/sections/recipes/recipe-ingredients.vue';
import RecipeInstructions from '@/components/sections/recipes/recipe-instructions.vue';
import RecipeAlternative from '@/components/sections/recipes/recipe-alternative.vue';
import RecipePreferred from '@/components/sections/recipes/recipe-preferred.vue';
import RecipeImage from '@/components/sections/recipes/recipe-image.vue';

defineProps({
  isRecipeModalOpen: {
    type: Boolean,
    required: true,
  },
  recipe: {
    type: Object,
    required: true,
  },
});

defineEmits(['close']);
</script>

<template>
  <base-modal
    dialogPanelClass="bg-primary border-4 border-double border-quinary w-full sm:w-5/6"
    :is-open="isRecipeModalOpen"
    @close="$emit('close')"
  >
    <template #body>
      <div class="mt-4 overflow-auto flex flex-col">
        <div class="mb-4 border-b-4 border-quinary border-double">
          <recipe-title
            :title="recipe.title"
            class="text-xl font-bold text-secondary"
          />
          <recipe-description :description="recipe.description" />
        </div>

        <div class="flex flex-col md:flex-row mb-3">
          <div
            class="me-3 sm:pe-3 border-none sm:border-r-4 sm:border-quinary sm:border-double"
          >
            <recipe-image class="h-auto" :image-src="recipe.image" />

            <recipe-ingredients :ingredients="recipe.ingredients" />
          </div>
          <div
            class="me-3 sm:pe-3 border-none sm:border-r-4 sm:border-quinary sm:border-double"
          >
            <recipe-instructions :instructions="recipe.instructions" />
          </div>
          <div class="me-3">
            <recipe-preferred :preferred="recipe.preferred" />
            <recipe-alternative :alternative="recipe.alternative" />
          </div>
        </div>
      </div>
    </template>
  </base-modal>
</template>
