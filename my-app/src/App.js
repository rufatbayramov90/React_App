import logo from './logo.svg';
import './App.css';

function App({text,qrup}) {
  return (
    <div className="App">
      <h1>{text}</h1>
      <h3>{qrup}</h3>
    </div>
  );
}

export default App;
