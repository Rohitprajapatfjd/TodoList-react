import React, { useState } from 'react'
import { useTodo } from './Context'
import TodoItem from './TodoItem';

export default function Form() {
  const { addTodo, todos} = useTodo();

  const [todo, settodo] = useState("");
 
  const add = (e) => {
    e.preventDefault()
    addTodo(todo)
    settodo("")
  }
  

  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-gray-500 sm:w-4/6 w-11/12 m-auto pb-4'>

        <form onSubmit={add} className='flex flex-col justify-center items-center md:flex-row  sm:flex-col '>

          <input
            className='text-2xl rounded-lg px-6 py-3 m-4 w-60 sm:w-[300px] md:w-[400px] lg:w-[560px]  outline-none shadow-gray-700 shadow-inner'
            type='text'
            placeholder='Add Todo'
            value={todo}
            onChange={(e) => settodo(e.target.value)}
            required
          />
          <button type='submit' className='text-xl text-zinc-100 disabled:bg-zinc-800  py-2 px-4 m-2 rounded-lg bg-gray-700'  >
            Save
          </button>
        </form>
        <h1 className='text-3xl text-white text-center ' >Your Todo</h1>
        <div className='w-5/6' key={Math.random()*1000}>

          {todos.length == 0 && <div className='text-2xl text-center text-white '>No Todo to display</div>}
          {todos.map(({ id, todo, compleled }) => (
            <TodoItem todo={{id:id ,todo:todo ,compleled:compleled}}/>
          ))}
        </div>

      </div>

    </div>
  )
}
