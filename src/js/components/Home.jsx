import React, { useState } from "react";
import './Home.css';

//create your first component
const Home = () => {
    const [tasks, setTasks] = useState([]); 

    const [newTask, setNewTask] = useState({ TODO: "", NOTES: "" });

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { id: tasks.length + 1, ...newTask, CHECK: false }]);
        setNewTask({ TODO: "", NOTES: "" });
    };

    const toggleCheck = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, CHECK: !task.CHECK } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">TODO LIST</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="TODO"
                    value={newTask.TODO}
                    onChange={(e) => setNewTask({ ...newTask, TODO: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="NOTES"
                    value={newTask.NOTES}
                    onChange={(e) => setNewTask({ ...newTask, NOTES: e.target.value })}
                    required
                />
                <button type="submit">ADD TODO</button>
            </form>
            {tasks.length === 0 ? (
                <p className="no-tasks-message">No tienes tareas, agrega tareas</p>
            ) : (
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">TODO</th>
                                <th scope="col">NOTES</th>
                                <th scope="col">CHECK</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <th scope="row">{task.id}</th>
                                    <td>{task.TODO}</td>
                                    <td>{task.NOTES}</td>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked={task.CHECK} 
                                            onChange={() => toggleCheck(task.id)} 
                                        />
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-danger btn-sm delete-btn" 
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <p>Made by Lchaves205!</p>
        </div>
    );
};

export default Home;