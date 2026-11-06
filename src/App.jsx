import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Movies' element={<Movies/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
