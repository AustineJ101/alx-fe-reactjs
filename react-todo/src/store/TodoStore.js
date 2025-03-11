import { create } from "zustand";

const useTodo = create((set) => ({
    Todos: [
        {name: "Write tests", isComplete: false, id: `${crypto.randomUUID()}`},
        {name: "Hit the gym", isComplete: false,  id: `${crypto.randomUUID()}`},
        {name: "Shower", isComplete: false, id: `${crypto.randomUUID()}`},
    ],

   addTodo: (item) => set(state => ({
    Todos: [...state.Todos, item]
   })),

   deleteTodo: (name) => set(state => ({
    Todos: state.Todos.filter(item => item.name !== name)
   })),

   toggleComplete: (name) => set(state => ({
    Todos: state.Todos.map(item => {
        if(item.name == name){
           return item.isComplete == true? {...item, isComplete: false}: {...item, isComplete: true};
        }else{
           return  item
        }
    })
   }))
}))

export default useTodo;
