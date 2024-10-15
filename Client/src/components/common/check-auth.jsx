import { Navigate, useLocation } from "react-router-dom";

export const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Si no está autenticado y no está en la página de login o register
  if (
    !isAuthenticated && 
    !(location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    return <Navigate to={"/auth/login"} />;
  }

  // Si está autenticado y está intentando acceder a login o register
  if (
    isAuthenticated && 
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to={"/admin/dashboard"} />;
    }
    return <Navigate to={"/shop/home"} />;
  }

  // Si está autenticado, pero no es admin e intenta acceder a una página de admin
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to={"/unauth-page"} />;
  }

  // Si es admin y está intentando acceder a una página de shop
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shop")) {
    return <Navigate to={"/admin/dashboard"} />;
  }

  // Si ninguna de las condiciones anteriores se cumple, renderiza los children
  return <>{children}</>;
};
