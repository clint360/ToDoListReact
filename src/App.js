import './App.css';
import Input from './Components/Input';
import Task from './Components/Task';

function App() {
  const tasks = [{nme: "Clean the house"},{nme: "Eat"}, {nme: "Play"}, {nme: "Play Music"}]
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Input />
      <div className='Tasksection'>
        {tasks.map(()=>{
          return <Task name={tasks[2].nme}/>
        })
        }
      </div>
    </div>
  );
}

export default App;
