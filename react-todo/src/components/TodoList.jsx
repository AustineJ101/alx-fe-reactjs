import useTodo from "../store/TodoStore";
import { useForm } from "react-hook-form";

function TodoList(){
    const todos = useTodo(state => state.Todos);
    const deleteTodo = useTodo(state => state.deleteTodo);
    const toggleComplete = useTodo(state => state.toggleComplete);
    const addTodo = useTodo(state => state.addTodo);

    const {register, handleSubmit, formState:{ errors }, reset} = useForm();

    const onSubmit = (data) => {
        const item = {name: data.todo, isComplete: false, id: `${crypto.randomUUID()}` }

        addTodo(item);

        reset();
    };


    return(
        <div>
            <h2>Todo Items</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: "20px"}}>
                <label htmlFor="todo">Enter Todo Item</label>
                <input id="todo" type="Text" {...register("todo", {required: "Please enter a todo"})}/>
                {errors.todo && <p style={{color: "red"}}>{errors.todo.message}</p>}

                <button type="submit">Add Item</button>
            </form>
            {todos.length == 0 && <p>No Todo Items Available...</p>}
            <div style={{display: "flex", gap: "20px"}}>
                {todos.map(item => (
                    <div key={item.id} style={{border: "1px solid grey", padding: "20px", borderRadius: "10px"}}>
                        <h1>{item.name}</h1>
                        <hr />
                        <button  onClick={
                            () => {
                                toggleComplete(item.name)
                                setTimeout(() => {deleteTodo(item.name)}, 2000);
                            }
                            } style={{color: "white", backgroundColor: "green", border: "none", padding: "5px 10px"}}>
                           {item.isComplete? "Mark as incomplete" : "Mark as complete"} 
                        </button>

                        {item.isComplete? <p>Done✅</p> : <p>Pending...</p>}
                        <button onClick={() => deleteTodo(item.name)} style={{color: "white", backgroundColor: "darkred", border: "none", padding: "5px 10px", borderRadius: "5px"}}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
        
    )

}

export default TodoList;