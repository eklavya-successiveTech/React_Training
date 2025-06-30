'use client'
import { useEffect, useState } from "react";


const ToDoList = () =>{
    const [todo, setTodo] = useState([]);
    const [todoItem, setTodoItem] = useState("");

    const addItem = () =>{
        const valueEntered = todoItem.trim();
        const newItem = {
            title: valueEntered,
            status: "unchecked"
        }
        setTodo([...todo, newItem]);
        setTodoItem("");
    }
    const deleteItem = (i) =>{
        const updatedValue = todo.filter((element,index)=> i !== index);
        setTodo(updatedValue);
    }
    const statusUpdate = (i)=>{
        const updatedTodo = todo.map((element,index)=>(
            i === index? {...element, status: element.status === "checked" ? "unchecked":"checked"}:element
        ));
        setTodo(updatedTodo);
    }
    useEffect(()=>{
        console.log(todo)
    })
    return(
        <div>
            <div>
                <input type="text" name="todo" value={todoItem} onChange={(e)=> setTodoItem(e.target.value)} />
                <button onClick={addItem}>Submit</button>
            </div>
            <div>
                <ul>
                {todo.map((element,index)=>(
                    <li key={index}>
                    <input type="checkbox" onChange={()=> statusUpdate(index)}></input>
                    {index+1}{". "}{element.title}
                    <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default ToDoList;