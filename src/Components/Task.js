import React, { useState } from 'react';
import "./Task.css";

export default function Task({name, deleteFunction}) {
  const [editable, setEditable] = useState("false");
  const [icon, setIcon] = useState("fa-solid fa-pen-to-square");
  const [checked, setChecked] = useState(false);
  const [checkstatus, setCheckstatus] = useState('⌛');
  const checkValue = () => {
    setChecked(!checked);
     {checked ? setCheckstatus("⌛") : setCheckstatus("✅");
  } console.log(checkstatus);
  } 


  const edit = (editable) => {
      if (editable === "false") {
        setEditable("true");
        setIcon("fa-solid fa-check");
      } else {
        setEditable("false");
        setIcon("fa-solid fa-pen-to-square");
      }
      
  }

  return (
    <div className='atask'>
        <input type="checkbox" class="defaultCheckbox"
            name="checkBox1" defaultChecked={checked} onChange={checkValue}/>
        <p contenteditable={editable}>{name}</p> <p>{checkstatus}</p>
        <button onClick={()=>{edit(editable)}}><i class={icon}></i></button>&nbsp;
        <button onClick={deleteFunction}><i class={"fa-solid fa-trash"}></i></button>
    </div>
  )
}
