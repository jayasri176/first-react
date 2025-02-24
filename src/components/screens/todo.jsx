import React, { useState } from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = (e) => {
        if (e.key === "Enter" && newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-10">
            <div className="bg-white p-4 shadow-lg rounded-lg w-90">
                <h1 className="text-4xl font-bold text-gray-200 text-center mb-2">todos</h1>
                <ul className="space-y-4">
                    {todos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center border-b pb-2">
                            <div className="flex items-center space-x-2">
                                <FaRegCircle className="text-gray-200" />
                                <span className="text-lg text-gray-500">{todo}</span>
                            </div>
                            <FaTimes className="text-red-200 cursor-pointer" onClick={() => removeTodo(index)} />
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="E.g. Build a web app"
                    className="mt-4 w-full border p-2 rounded-lg text-gray-700 item-center"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={addTodo}
                />
            </div>
        </div>
    );
};

export default TodoApp;
