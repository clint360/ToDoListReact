import React from 'react'
import "./Task.css"

export default function Task({name, deleteFunction}) {
  return (
    <div className='atask'>
        <input type="checkbox" class="defaultCheckbox"
            name="checkBox1"/>
        <p>{name}</p>
        <button onClick={deleteFunction}><i class="fa-solid fa-trash"></i></button>
    </div>
  )
}
