import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Favorites from './components/Favorites/Favorites';
import SearchCard from './components/Search/SearchCard';
import Detail from './components/Detail/Detail';
import { ProtectedRoute } from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path={"/"} element ={<Home/>}/>
        <Route path={"/favorites"} element = {<ProtectedRoute component={<Favorites/>}/>}/>
        <Route path={"/search"} element = {<SearchCard/>}/>
        <Route path={"/dog/:id"} element = {<Detail/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
