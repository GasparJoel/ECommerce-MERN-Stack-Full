import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sección izquierda para pantallas grandes */}
      <div className="hidden lg:flex   items-center justify-center bg-black w-1/2 px-12">
        <div className=" max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Welcome to ECommerce Shopping</h1>
        </div>
      </div>

      {/* Sección derecha donde se mostrará el contenido dinámico */}
      <div className="flex bg-background flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Outlet />
      </div>
    </div>
  );
};
