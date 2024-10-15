import { Navigate, useLocation } from "react-router-dom"



export const CheckAuth = ({isAuthenticated ,user,children}) => {

    const location = useLocation()

    // si en caso no esta autenticado y quiere acceder a login o register
    if(!isAuthenticated &&  !(location.pathname.includes("/login")) || !(location.pathname.includes("/register")))
        {
            return <Navigate to={'/auth/login'} />
        }
    //Si en caso este autenticado 
     if (
        isAuthenticated && 
        (location.pathname.includes("/login")) ||
         (location.pathname.includes("/register")) 
        ) {
         
            if(user?.role === "admin") return <Navigate to={'/admin/dashboard'} />
            return <Navigate to={'/shop/home'} />
         }   

         if(isAuthenticated && user?.role !== "admin" && location.pathname.includes('admin'))
            {
                return <Navigate to={'/unauth-page'}/>
            }

            if (isAuthenticated && user?.role ==='admin' && location.pathname.includes('shop') ) {
                return <Navigate to={'/admin/dashboard'}/>
            }

  return (
    <div>checkauth</div>
  )
}

