import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import CardListContainer from './components/Cards/CardListContainer';
import CardDetailContainer from './components/CardDetail/CardDetailContainer';
import ProductsList from './components/ProductList/ProductsList.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<CardListContainer/>}></Route>
          <Route exact path='/products/:id' element={<CardDetailContainer/>}></Route>
          <Route exact path='/product/:category' element={<ProductsList/>}></Route>
          <Route exact path='/info' element={<p>info</p>}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
