import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./Page/Dashboard"
import Layout from "./Components/Layout"
import Register from "./Components/Register"
import Login from "./Components/Login"
import { AuthContextProvider } from "./context/AuthContext"


const App = () => {
  return (
    <div>
      <AuthContextProvider>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Register/>}/>
              <Route path="login" element={<Login/>}/>
        </Route>
        <Route  path="dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
     
      </AuthContextProvider>
     
    </div>
  )
}

export default App