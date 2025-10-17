import Welcom from "./Components/Welcom"
import { BrowserRouter, Route, Routes } from "react-router"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Welcom/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App