import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

function App() {
  const [theme ,toggleTheme ] = useContext(AppContext)
  return (
    <div className="App">
      <h1>shoaib</h1>
      <Button>Hello</Button>
      <Button onClick={()=> toggleTheme()} />
   
    </div>
  );
}

export default App;
