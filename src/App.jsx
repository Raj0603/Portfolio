import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import HPage from './Components/HPage/HPage'
import AllPage from './Components/AllPage/AllPage'

function App() {

  return (
    <div className="App">
  
  <BrowserRouter>
  
  <Routes>

    <Route exact path='/' element={<HPage/>}/>
    <Route exact path='/AllPage' element={<AllPage/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
