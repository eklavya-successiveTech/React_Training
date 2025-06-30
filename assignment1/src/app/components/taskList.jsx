'use client'
const TaskList = ({tasks}) =>{
    return(
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task,index)=>{
                   return <li key={index}>{task}</li>
                })}
            </ul>
        </div>
    );
}
export default TaskList;