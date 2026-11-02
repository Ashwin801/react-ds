import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
