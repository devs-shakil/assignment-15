import { useState } from "react";

const TaskInput = ({onAddTask}) => {
     const [task, setTask] =useState("")

     const handleChange = (e) =>{
        setTask(e.target.value);
     }

     const handleSubmit = (e) =>{
        e.preventDefault();
        onAddTask(task);
        setTask("");
     }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={handleChange}
                />
                <button className="submitBtn" type="submit">Add Task</button>
            </form>    
        </div>
    );
};

export default TaskInput;