import { Outlet } from "react-router-dom"
import { AdminSidebar } from "./sidebar"
import { Adminheader } from "./header"


export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
        {/*ADMIN Sidebar  / Lado administrador*/}
        <AdminSidebar/>
        <div className="flex flex-1 flex-col">
            {/* admin Header */}
            <Adminheader/>
            <main className="flex-1 bg-muted/40 p-4 md:p-6">
                <Outlet/>
            </main>
        </div>
    </div>
  )
}
