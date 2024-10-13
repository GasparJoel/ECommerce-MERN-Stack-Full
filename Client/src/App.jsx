import { Route, Routes } from "react-router-dom"
import { AuthLayout } from "./components/auth/layout"
import { AuthLogin } from "./pages/auth/login"
import { AuthRegiter } from "./pages/auth/register"
import { AdminDashboard } from "./pages/admin-view/dashboard"
import { AdminProducts } from "./pages/admin-view/products"
import { AdminOrders } from "./pages/admin-view/orders"
import { AdminFeatures } from "./pages/admin-view/features"
import { AdminLayout } from "./pages/admin-view/layout"


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
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="products" element={<AdminProducts/>} />
          <Route path="orders" element={<AdminOrders/>} />
          <Route path="features" element={<AdminFeatures/>} />
        </Route>

       
      </Routes>
    </div>
  )
}

export default App
