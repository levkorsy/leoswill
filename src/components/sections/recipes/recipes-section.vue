<script lang="ts" setup>
import SectionHeader from '@/components/sections/components/section-header.vue';
import {
  Recipe,
  useRecipes,
} from '@/components/sections/recipes/useRecipes.ts';
import RecipeCard from '@/components/sections/recipes/recipe-card.vue';
import { ref } from 'vue';
import RecipePreviewModal from '@/components/sections/recipes/recipe-preview-modal.vue';

const { recipes } = useRecipes();

const activeRecipe = ref<Recipe>({} as Recipe);
const isRecipeModalOpen = ref(false);

const handleRecipeCardClick = (recipe: Recipe) => {
  isRecipeModalOpen.value = true;

  activeRecipe.value = recipe;
};
</script>

<template>
  <section
    id="recipes"
    class="flex flex-col items-center justify-start h-auto bg-primary py-10 px-2"
  >
    <section-header text="SECTIONS.RECIPES.TITLE" />

    <div class="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4">
      <recipe-card
        v-for="(recipe, index) in recipes"
        :key="recipe.title + index"
        :recipe="recipe"
        @click="handleRecipeCardClick(recipe)"
      />
    </div>
  </section>
  <!--TODO add flip effect-->
  <recipe-preview-modal
    :is-recipe-modal-open="isRecipeModalOpen"
    :recipe="activeRecipe"
    @close="isRecipeModalOpen = false"
  />
</template>

<style scoped></style>
