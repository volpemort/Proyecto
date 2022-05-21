import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import CardListcontainer from './components/Cards/CardListContainer';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <CardListcontainer/>
    </div>
  );
}

export default App;
