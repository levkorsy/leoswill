<script setup lang="ts">
import RecipeTitle from './recipe-title.vue';
import RecipeDescription from './recipe-description.vue';
import RecipeImage from '@/components/sections/recipes/recipe-image.vue';

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    class="h-auto transition-all duration-500 ease-in-out cursor-pointer shadow-lg rounded-lg overflow-hidden border-4 border-double border-quinary hover:scale-105 hover:shadow-lg hover:border-secondary"
  >
    <div
      class="h-auto flex items-center justify-center text-center flex-col md:flex-row"
    >
      <recipe-image :image-src="recipe.image" />

      <div>
        <recipe-title
          :title="recipe.title"
          class="text-xl font-bold text-secondary mt-2"
        />

        <recipe-description :description="recipe.description" class="m-3" />
      </div>
    </div>
  </article>
</template>

<style scoped></style>
