
import './App.css';

function App({text,qrup}) {
  const [name,setName] = useState("Ilham");
  const changeName =()=>{
    setName("Rufat");
  }
 
  return (
    <div className="App">
      <h1>{text}</h1>
      <h3>{qrup}</h3>
      <button onclick={changeName}>Change Name</button>
    </div>
  );
}

export default App; 
