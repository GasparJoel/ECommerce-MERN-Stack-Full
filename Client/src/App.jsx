import { Route, Routes } from "react-router-dom"
import { AuthLayout } from "./components/auth/layout"
import { AuthLogin } from "./pages/auth/login"
import { AuthRegiter } from "./pages/auth/register"


function App() {
  

  return (
    <div className="flex flex-col overflow-hidden">

      <h1>Header Components </h1>
   
      <Routes>
        <Route path="/auth" element={ <AuthLayout/> }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register"element={<AuthRegiter/>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout/>} >

        </Route>

       
      </Routes>
    </div>
  )
}

export default App
