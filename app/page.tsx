'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [toDoList, setToDoList]= useState(null);
  return (
    <>
      <div>
        <label htmlFor="newEntry">New ToDo: </label>
        <input type='text' id='newEntry' name='newEntry'></input>
        <button>Add new ToDo</button>
      </div>
    </>
  )
}
