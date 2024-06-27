import { createContext,useContext } from 'react'

export const Context = createContext({
    todos: [
        {
            id: "1",
            todo: "todo one",
            completed: false,
           
        }
    ],
    addTodo: ()=>{},
    updateTodo: ()=>{},
    deleteTodo: ()=>{},
    toggleComplete: ()=>{}
})

export const useTodo = ()=>{
    return useContext(Context)
} 
export const TodoProvider = Context.Provider
