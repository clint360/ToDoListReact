import React from 'react'
import './Input.css'

export default function Input() {
  return (
    <div className='inputsection'>
     <p>Add Task:</p><input placeholder='input task'/>
     <button>✓</button>
    </div>
  )
}
