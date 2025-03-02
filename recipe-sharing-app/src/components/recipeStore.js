import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (recipeId) => {
        let newRecipe = get().recipes.filter(recipe => recipe.id !== recipeId);
        set({recipes: newRecipe})
    },
    updateRecipe: (recipe) => set({recipes: recipe});

}));

export default useRecipeStore;

