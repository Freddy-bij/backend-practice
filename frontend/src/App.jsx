import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "./Components/Layout"
import Register from "./Components/Register"
import Login from "./Components/Login"
import { AuthContextProvider } from "./context/AuthContext"

import Dashboard from "./Page/Dashboard"


const App = () => {
  return (
    <div className="font-[sofia]">
      <AuthContextProvider>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Register/>}/>
              <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
     
      </AuthContextProvider>
     
    </div>
  )
}

export default App