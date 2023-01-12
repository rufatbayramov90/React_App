
import './App.css';

function App({text,qrup}) {
  const onclick = (e) =>{
    const title = e.target.innerText;
    alert(title)
  }
  return (
    <div className="App">
      <h1 onclick={onclick}>{text}</h1>
      <h3>{qrup}</h3>
    </div>
  );
}

export default App;
