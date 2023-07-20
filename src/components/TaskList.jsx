const TaskList = ({ tasks, onDeleteTask }) => {
    return (
        <div>
            <ul className="taskList">
                {tasks.map((task) => (
                <li key={task}>
                    {task}
                    <button onClick={() => onDeleteTask(task)} type="delete" className="dltBtn">Delete</button>
                </li>
                ))} 
            </ul>           
        </div>
    );
};

export default TaskList;