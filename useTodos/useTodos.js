import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || []); //init the reducer with previous val.
}

export const useTodos = () => {
    

       const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    
        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
        }, [todos]);
        
    
        const handleNewTodo = ( todo ) => {
    
            const action = {
                type: '[TODO]Add Todo',
                payload: todo
            }
    
            dispatch( action );
        }
    
        const handleDeleteTodo = ( todo ) => {
    
            const action = {
                type: '[TODO]Remove Todo',
                payload: todo
            }
    
            dispatch( action );
        }
    
        const handleToggleTodo = ( todo ) => {
    
            const action = {
                type: '[TODO]Toggle Todo',
                payload: todo
            }
    
            dispatch( action );
        }

        const todosCount = todos.length;

        const pendingTodosCount = todos.filter(t => !t.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }
}
