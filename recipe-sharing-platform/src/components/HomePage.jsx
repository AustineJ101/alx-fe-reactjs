import { useEffect, useState } from "react";
import recipesData from "../data.json"
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function HomePage(){
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData)
    }, []);

    return(
        <div className = "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-6">
            {recipes.map(recipe => {
                    const path = `recipe/${recipe.id}`;

               return  (
                    <Link to={path} key={recipe.id}>
                        <div className="border p-6 rounded-lg bg-gray-100 cursor-pointer hover:shadow transition">
                            <h1 className="text-xl text-pink-600 font-semibold mb-2">{recipe.title}</h1>
                            <hr className="mb-2 border-pink-600" />
                            <img src={recipe.image}  className="mb-2"/>
                            <p className="text-gray-600">{recipe.summary}</p>
                         </div>
                    </Link>
               ) 
                  
                
                
                
            })}

            <AddRecipeForm />
        </div>
    )
}

export default HomePage;