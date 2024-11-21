import { Route, Routes } from "react-router-dom"

import { AuthLogin } from "./pages/auth/login"

import { AdminDashboard } from "./pages/admin-view/dashboard"
import { AdminProducts } from "./pages/admin-view/products"
import { AdminOrders } from "./pages/admin-view/orders"
import { AdminFeatures } from "./pages/admin-view/features"
import { AdminLayout } from "./components/admin-view/layout"
import { Shoppinglayout } from "./components/shopping-view/layout"
import { NotFound } from "./pages/not-found"
import { ShoppingHome } from "./pages/shopping-view/home"
import { ShoppingListing } from "./pages/shopping-view/listing"
import { ShoppingChekout } from "./pages/shopping-view/chekout"
import { ShoppingAccount } from "./pages/shopping-view/account"
import { CheckAuth } from "./components/common/check-auth"
import { AuthLayout } from "./components/auth/layout"
import { UnauthPage } from "./pages/unauth-page"
import { AuthRegister } from "./pages/auth/register"
import { useSelector } from "react-redux"


function App() {
  // prueba 
  // const isAuthenticated = false ; 
  // const user = {
  //   name :"Joel",
  //   role:"user",
  // } ;

  const {user, isAuthenticate} = useSelector(state=>state.auth)

  return (
    <div className="flex flex-col overflow-hidden"> 
      <Routes>
        {/* VISTAS DE LOGIN Y REGISTER  */}
        <Route path="/auth" element={ 
          <CheckAuth isAuthenticated ={isAuthenticate} user = {user} >
            <AuthLayout/>
           </CheckAuth>
          
          }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register"element={<AuthRegister/>}/>
        </Route>

        {/* VISTAS DE ADMIN  */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticate} user={user}>
            <AdminLayout/>
          </CheckAuth>
          
          } >
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="products" element={<AdminProducts/>} />
          <Route path="orders" element={<AdminOrders/>} />
          <Route path="features" element={<AdminFeatures/>} />
        </Route>

        {/* VISTAS DE shop  */}
        <Route path={"/shop"} element={ 

          <CheckAuth isAuthenticated={isAuthenticate} user={user}>
              <Shoppinglayout/>
          </CheckAuth>
          }> 

          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="chekout" element={<ShoppingChekout/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
      
        </Route>

        
           {/* VISTAS GENERAL DE TODOS   */}
        <Route path="*" element={<NotFound/>}/>
        <Route path="/unauth-page" element={<UnauthPage/>} />
       
      </Routes>
    </div>
  )
}

export default App
