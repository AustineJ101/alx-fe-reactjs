import { useParams } from "react-router-dom";
import recipeData from "../data.json"

function RecipeDetail(){
    const {id} = useParams();
    const recipe = recipeData.filter(recipe => recipe.id == id)
    
    return(
        <div className="max-w-lg p-6">
            <h1 className="text-lg font-bold text-pink-600 sm:text-xl md:text-2xl">Recipe Details for {recipe[0].title}</h1>
            <hr className="my-2 border-pink-600"/>
            <img src={recipe[0].image}/>
            <h2 className="font-semibold text-lg sm:text-xl mb-2">Instructions</h2>
            <p className="text-gray-600">{recipe[0].summary}</p>

        </div>
    )
}

export default RecipeDetail;