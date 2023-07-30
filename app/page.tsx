'use client'
import React, {useState } from 'react'
interface ToDoItem {
  id: number;
  value: string;
}
export default function Home() {

  const [item, setItem] = useState("");
  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);

  function addItem() {
    if(!item){alert("you have not entered an item")
  return;}

    const newItem: ToDoItem = {
      id: Math.floor(Math.random() * 1000),
      value: item,
    };
    setToDoList([...toDoList, newItem]);
    setItem("");
  }

  function deleteItem(id: number)
  {
      const temp = toDoList.filter(item=>item.id !=id);
      setToDoList(temp);
  }
  
  

  return (
    <>
      <div>
        <label htmlFor="newEntry">New ToDo: </label>
        <input type='text' 
                placeholder='Add an item' 
                id='newEntry' 
                name='newEntry'
                value={item}
                onChange={e => setItem(e.target.value)}
        />
        <button onClick={()=>addItem()}>Add</button>
      </div>
      <div>
        <ul>
          {toDoList.map(toDo=>{
             return(
              <li key={toDo.id}>{toDo.value} <button onClick={()=>deleteItem(toDo.id)}>❌</button></li>
             )  
             }
            )}
        </ul>
      </div>
    </>
  )
}
