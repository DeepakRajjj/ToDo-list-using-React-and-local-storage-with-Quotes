import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children})=>{
    const [todos, setTodos] = useState(()=>{
        const localtodos = localStorage.getItem("todos")
        return  localtodos?JSON.parse(localtodos):[]
    })

    useEffect(()=>{
        if(todos.length > 0)
        {
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    },[todos])

    const addTodo =(text)=>{
        const newTodo = {text, completed: false}
        setTodos([...todos,newTodo])
    }

    const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
        if (i === index) {
            return {
                ...todo,
                completed: !todo.completed,
                completedAt: !todo.completed ? new Date().toISOString() : null
            };
        }
        return todo;
    });
    setTodos(newTodos);
};
const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
};

    return (
        <TodoContext.Provider value={{todos,addTodo,toggleTodo,deleteTodo}}>  
            {children} 
        </TodoContext.Provider>
    )
}

export const useTodos =()=>{
    const context = useContext(TodoContext)
    return context
}

export default TodoContext;