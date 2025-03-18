import { useForm } from "react-hook-form"
import recipeData from "../data.json"
function AddRecipeForm({addRecipe}){
    const{register, reset, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        const id = Date.now()
        const newData = {id, ...data};
        addRecipe(prev => prev.push(newData))
    }
    return(
        <form  onSubmit={handleSubmit(onSubmit)}>

            <input type="text" {...register("title", {required: true})} placeholder="Enter Title" className="border px-2 py-1 rounded outline-none focus:border-green-400"/>
           {errors.title && <p className="text-red-500">Username is required</p>}

           <textarea {...register("ingredients", {required: true})}className="border rounded outline-none focus:border-green-400" placeholder="Enter Ingredients"></textarea>
           {errors.ingredients && <p className="text-red-500">Please input the ingredients</p>}

           <textarea {...register("instructions", {required: true})}className="border rounded outline-none focus:border-green-400" placeholder="Enter Prep Steps"></textarea>
           {errors.instructions && <p className="text-red-500">Please input the prep steps for the meal</p>}
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg block">Submit</button>
        </form>
    )
}

export default AddRecipeForm;