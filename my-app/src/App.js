
import './App.css';
import {useState} from "react";

function App({text,age}) {
  const [student,setStudent] = useState({
    name:"Ilhan",
    age:26,
    qrup:"2.1"
  });
  const changeName =()=>{
    setStudent({
      ...student,
      name:"Aysel",
      age:22
    })
  }
 
  return (
    <div className="App">
      <h1>{text}</h1>
      <h3>{age}</h3>
      <h2>{student.name}</h2>
      <button onclick={changeName}>Change Name</button>
    </div>
  );
}
 
export default App; 
