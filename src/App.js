import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListItem from './list-item/ListItem';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  const [todolist, setList] = useState([])
  const addTask = () => {
    const arr = [...todolist]

    let text = document.getElementById("inputText").value
    document.getElementById("inputText").value = ""
    const obj = {
      task: text,
      status: "Running",
    }
    arr.push(obj)
    setList(arr)
  }

  const deleteFunction = (position) => {
    const arr = [...todolist]
    arr.splice(position, 1)
    setList(arr)

  }
  const markDoneF = (position)=>{
    const arr = [...todolist]
    arr[position].status = "Done"
    setList(arr)
  }
  return (
    <div className="App">
      <h3>To do list</h3>
      <div className='AppTaskInput'>
        <input placeholder='Enter task' type={Text} id="inputText"></input>
        <button onClick={addTask}>Add task</button>
      </div>

      <div className='AppTable'>
        <table className='table'>
        <thead>
        <tr>
            <th scope="col"  style={{ textAlign: "start" }} >Task</th>
            <th scope="col" style={{ textAlign: "start" }} >Status</th>
            <th scope="col" style={{ textAlign: "start" }} >Delete</th>
            <th scope="col" style={{ textAlign: "start" }}>Change status</th>
          </tr>
        </thead>
        <tbody>

        {
            todolist.map((value, index) => {
              return (
                <ListItem item={value} position={index} deleteFunc={deleteFunction}  markDone = {markDoneF}/>
              )
            })
          }

        </tbody>
       
        </table>
      </div>



    </div>
  );
}

export default App;
