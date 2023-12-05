import TodoItem from "./TodoItem"
import { Draggable, Droppable } from "@hello-pangea/dnd"

const TodoList = ({todos, removeTodo,updateTodo}) => { 
    return (
      <Droppable droppableId="todos">
          {(droppableProvided)=>(
            <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="bg-white rounded-t-md mt-8">
              {todos.map((todo,index)=>( 
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {(draggableProvided)=>(
                      <TodoItem todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                      />
                  )}
                </Draggable>
              ))}
            {droppableProvided.placeholder}
            </div>  
          )}

      </Droppable>
    )    
 }

 export default TodoList