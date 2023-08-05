import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import HPage from './Components/HPage/HPage'
import AllPage from './Components/AllPage/AllPage'
import Credit from './Components/Credits/Attribute'

function App() {

  return (
    <div className="App">
  
  <BrowserRouter>
  
  <Routes>

    <Route exact path='/' element={<HPage/>}/>
    <Route exact path='/AllPage' element={<AllPage/>}/>
    <Route exact path='/Credit' element={<Credit/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
