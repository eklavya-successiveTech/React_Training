import TaskList from "../components/taskList";
const TaskListBox = () =>{
    const task1 = ["wakeup", "brush", "Study"];
    const task2 = ["Collect wood", "Cook food", "Wash Dishes"];
    return(
        <div>
            <TaskList tasks = {task1} />
            <TaskList tasks = {task2} />
        </div>
    )
}
export default TaskListBox;