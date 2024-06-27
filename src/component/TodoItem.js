import React,{useState} from 'react'
import deletes from '../assets/images/delete.svg'
import edited from '../assets/images/edit.svg'
import saved from '../assets/images/save.svg'
import { useTodo } from './Context'
export default function TodoItem({todo}) {
    const { todos, toggleComplete, deleteTodo, updateTodo } = useTodo();
    const [isEditable, setEditable] = useState(false)
    const [mgs, setmsg] = useState(todo.todo);
    const toggleCompleted = () => {
        toggleComplete(todo.id)


    }
    const updatetodos = () => {
      
        updateTodo(todo.id, mgs)
        setEditable(!isEditable)
    }
    const deleteTodos = () => {
        deleteTodo(todo.id)
    }
    
  return (
    <div>
          <div key={todo.id} className={`todo flex items-center justify-between gap-3 my-4 px-4 break-all text-lg font-serif font-medium text-pretty ${todo.compleled ? "bg-zinc-700" : " bg-zinc-400"} scroll-py-12`}>
              <input type='checkbox' onChange={(e) => toggleCompleted(e)} checked={todo.compleled} name={todo.id} />
              <input className={` bg-transparent outline-none ${isEditable ? "border border-black/30 px-2" : "border-transparent"}  w-full text-center ${todo.compleled ? "line-through" : ""}`} onChange={(e) => setmsg(e.target.value)} value={mgs} readOnly={!isEditable} />
              <div className='btn flex'>
                  <button id={todo.id} className={`text-xl text-zinc-100 w-8 h-8 py-1 px-1 mx-3 my-1 rounded-lg ${todo.compleled ? "bg-gray-300 opacity-25" : "bg-gray-600"}`} disabled={todo.compleled}>
                      <img src={isEditable ? saved : edited} width={22} onClick={(e) => {
                          if (todo.compleled) return;
                          if (isEditable) {
                              updatetodos(e)
                          } else setEditable((prev) => !prev)
                      }
                      } />
                  </button >

                  <button className='text-xl text-zinc-100 w-8 h-8 py-1 px-1 my-1 rounded-lg bg-gray-600'>
                      <img name={todo.id} src={deletes} onClick={(e) => deleteTodos(e)} width={22} />
                  </button>
              </div>

          </div>
    </div>
  )
}
