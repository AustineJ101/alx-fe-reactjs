import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),
    addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    deleteRecipe: (recipeId) => {
        let newRecipe = get().recipes.filter(recipe => recipe.id !== recipeId);
        set({recipes: newRecipe})
    },
    updateRecipe: (recipeId) => {
        let updatedRecipe = get().recipes.filter(recipe => recipe.id == recipeId)
    },
    

}));

export default useRecipeStore;

