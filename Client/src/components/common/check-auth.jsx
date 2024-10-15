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
         //Si esta autenticado y no es  admin y quiere ingresar al page admin  retorne al page unauth-page  
         if(isAuthenticated && user?.role !== "admin" && location.pathname.includes('admin'))
            {
                return <Navigate to={'/unauth-page'}/>
            }
         //Si esta autenticado y tiene el rol de admin y quiere ingresar a shop retornara a admin dashboard
            if (isAuthenticated && user?.role ==='admin' && location.pathname.includes('shop') ) {
                return <Navigate to={'/admin/dashboard'}/>
            }

  return <>{children}</>
}

