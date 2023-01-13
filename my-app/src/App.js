
import './App.css';
import {useEffect,useState} from "react";

function App({text,age}) {
  const [student,setStudent] = useState({
    name:"Ilhan",
    age:26,
    qrup:"2.1"
  });
  const[second,setSecond]=useState(0);
  const[start,setStart]=useState(false);
  const changeName =()=>{
    setStudent({
      ...student,
      name:"Aysel",
      age:22
    })
  }
  const runTimer =()=>{
   setStart(!start)
  }
  useEffect(()=>{
    if(!start){
      return;
    }
    const timer = setInterval(()=>{
      setSecond(second + 1)
    },1000);
    return ()=>{
      clearInterval(timer);
    }
  })
 
  return (
    <div className="App">
      <h1>{text}</h1>
      <h3>{student.age}</h3>
      <h2>{student.name}</h2>
      <button onClick={changeName}>Change Name</button>
    
      <p>{second}</p>
      <button onClick={runTimer}>{start ? "Stop" : "Start"} Time</button>
    </div>
  );
}
 
export default App; 
