import React, {useState} from 'react';

export function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(event) {
        setNewTask(event.target.value);
    }

    function handleNewTaskAddition() {
        setTasks(tasks => [...tasks, {name: newTask, completed: false}]);
        setNewTask('');
    }

    function handleTaskCompletion(taskIndex) {
        setTasks(tasks => {
            const updatedTasks = [...tasks];
            updatedTasks[taskIndex].completed = true;
            return updatedTasks;
        });
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleTaskCompletion(index)}
                            />
                            {task.name}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" value={newTask} onChange={handleNewTaskChange}/>
                <button onClick={handleNewTaskAddition}>Add Task</button>
            </div>
        </div>
    );
}

