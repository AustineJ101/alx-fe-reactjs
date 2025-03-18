import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import recipeData from "../data.json"

function RecipeDetail(){
    const[ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const {id} = useParams();
    useEffect(() =>{
        if(id == 1){
            setIngredients("Ingredients for 1")
            setInstructions("Instructions for 1")
        }else{
            setIngredients("Ingredients for 2")
            setInstructions("Instructions for 2")
        }
    }, [])
    const recipe = recipeData.filter(recipe => recipe.id == id)
    
    return(
        <div className="max-w-lg p-6">
            <h1 className="text-lg font-bold text-pink-600 sm:text-xl md:text-2xl">Recipe Details for {recipe[0].title}</h1>
            <hr className="my-2 border-pink-600"/>
            <img src={recipe[0].image}/>
            <h2 className="font-semibold text-lg sm:text-xl mb-2">Instructions</h2>
            <p className="text-gray-600">{instructions}</p>
            <h2 className="font-semibold text-lg sm:text-xl mb-2">Ingredients</h2>
            <p className="text-gray-600">{ingredients}</p>

        </div>
    )
}

export default RecipeDetail;