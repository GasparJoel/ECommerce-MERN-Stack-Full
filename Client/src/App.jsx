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


function App() {
  
  const isAuthenticated = false ; 
  const user = {
    name :"Joel",
    role:"user",
  } ;

  return (
    <div className="flex flex-col overflow-hidden"> 
      <Routes>
        <Route path="/auth" element={ 
          <CheckAuth isAuthenticated ={isAuthenticated} user = {user} >
            <AuthLayout/>
           </CheckAuth>
          
          }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register"element={<AuthRegister/>}/>
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
          
          } >
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="products" element={<AdminProducts/>} />
          <Route path="orders" element={<AdminOrders/>} />
          <Route path="features" element={<AdminFeatures/>} />
        </Route>

        <Route path={"/shop"} element={ 

          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Shoppinglayout/>
          </CheckAuth>
          
          
          }> 
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="chekout" element={<ShoppingChekout/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
      
        </Route>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/unauth-page" element={<UnauthPage/>} />
       
      </Routes>
    </div>
  )
}

export default App
