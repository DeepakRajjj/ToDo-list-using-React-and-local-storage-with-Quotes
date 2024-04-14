import React from 'react';
import { useTodos } from '../../../contexts/TodoContext';

const TodoList = () => {
    const { todos, toggleTodo,deleteTodo } = useTodos();

    return (
        <div className='mt-4'>
            {todos.map((todo, index) => (
                <div key={index} className={`flex items-center mb-2 ${todo.completed ? 'bg-green-300' : ''}`}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => { toggleTodo(index) }}
                        className='form-checkbox h-5 w-5 text-blue-600 mx-2'
                    />

                    <label className={`ml-2 text-lg flex-1 ${todo.completed ? 'text-gray-400 line-through' : 'text-black'}`}>
                        {todo.text}
                    </label>

                    {todo.completed && todo.completedAt && (
                        <span className='text-sm text-gray-500 bg-gray-200 rounded-md py-1 px-2'>
                            Completed At: {new Date(todo.completedAt).toLocaleString()}
                        </span>
                    )}

        <button  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => deleteTodo(index)}>Delete</button>

              </div>
            ))}
        </div>
    );
}

export default TodoList;

