import './App.css';
import Task from './Components/Task';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const [taskarray, setTaskArray] = useState([]);
  const handleSubmit = (e) => {
   const currentValue = inputRef.current.value;
   setTaskArray([...taskarray,currentValue]);
  inputRef.current.value = '';
  }
  
  const deleteTask = (task) => {
    const x = taskarray.splice(task, 1);
    setTaskArray([...taskarray]);
  } 

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div className='inputsection'>
     <p>Add Task:</p><input placeholder='input-task' ref={inputRef} name="task"/>
     <button type='submit' onClick={handleSubmit}>✓</button>
    </div>
      <div className='Tasksection'>
        {taskarray.map((item, index)=>{
          if (taskarray[index]==="") { return <></> } else {
          return <Task name={item} deleteFunction={()=>{deleteTask(index)}}/>
}})
        }
      </div>
    </div>
  );
}

export default App;
