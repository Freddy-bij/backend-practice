import Welcom from "./Components/Welcom"
import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./Page/Dashboard"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Welcom/>}/>
        <Route  path="dashboard" element={<Dashboard/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App