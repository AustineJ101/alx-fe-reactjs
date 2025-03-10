import { create } from "zustand";

const useTodo = create((set) => ({
    Todos: [
        {name: "Write tests", isComplete: false},
        {name: "Hit the gym", isComplete: false},
        {name: "Shower", isComplete: false},
    ],

   addTodo: (item) => set(state => ({
    Todos: [...state.Todos, item]
   })),

   deleteTodo: (name) => set(state => ({
    Todos: state.Todos.filter(item => item.name !== name)
   })),

   markComplete: (name) => set(state => ({
    Todos: state.Todos.map(item => {
        item.name == name? {...item, isComplete: true} : item
    })
   }))
}))

export default useTodo;