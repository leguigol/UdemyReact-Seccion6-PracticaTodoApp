import CheckIcon from "./icons/CheckIcon"
import CrossIcon from "./icons/CrossIcon"

const TodoItem = ({todo, removeTodo, updateTodo}) => { 

    const {id,title,completed}=todo

    return (
        <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>
        {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        </button>   */}
        <button className={`${completed ? "rounded-full border-2 w-5 h-5 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
        : "inline-block h-5 w-5 flex-none rounded-full border-2"}`}
        onClick={()=>updateTodo(id)}
        >
            { completed && <CheckIcon /> }
        </button>
        <p className={`text-gray-600 grow ${completed && "line-through"}`}>{title}</p>
        <button className='flex-none' onClick={()=>removeTodo(id)}><CrossIcon /></button>
      </article>

    )
 }

 export default TodoItem