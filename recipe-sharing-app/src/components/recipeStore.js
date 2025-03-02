import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
    recipes: [],
    favorites: [], // Stores the list of favorite recipe IDs
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),  //Add a recipe ID to the favorites list
    removeFavorite: (recipeId) => set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })), //remove recipe id from favorites list
    recommendations: [],
    generateRecommendations: () => set(state => {
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5 //randomized filtering
      );
      return { recommendations: recommended };
    }),    // Generates recommendations based on favorited recipes
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

