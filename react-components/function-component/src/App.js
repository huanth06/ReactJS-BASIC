import logo from './logo.svg';
import './App.css';
import AddComponent from './components/AddComponent';

function App() {
  return (
    <div className="App">
      <AddComponent firstNumber={1} secondNumber={2}></AddComponent>
    </div>
  );
}

export default App;
