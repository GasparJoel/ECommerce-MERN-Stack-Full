
import { ChartNoAxesCombined, LayoutDashboard, ShoppingBasket, ShoppingCart } from "lucide-react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

export const  adminSidebarMenuItems =[
  {
      id:'dashboard',
      label:'Dashboard',
      path: '/admin/dashboard',
      icon:<LayoutDashboard />
  },
  {
      id:'products',
      label:'Products',
      path: '/admin/products',
      icon: <ShoppingBasket />
  },
  {
      id:'orders',
      label:'Orders',
      path: '/admin/orders',
      icon :<ShoppingCart  /> 
  }
]

  const MenuItems = ()=>{
    const navigate = useNavigate()

    return <nav className="mt-8 flex-col flex gap-2">
      {
        adminSidebarMenuItems.map((menuitem) =>
        <div key={menuitem.id}  onClick={()=>navigate(menuitem.path)} className="flex items-center gap-2 rounded-md px-3 py-2">
            {menuitem.icon}
            <span> {menuitem.label}</span>
        </div>
        )
      }
    </nav>
  }

export const AdminSidebar = () => {
  

  const navigate = useNavigate()
  return (
    
    <Fragment>
      <aside className=" w-64 flex-col border-r bg-white p-6 lg:flex">
        <div onClick={()=>navigate('/admin/dashboard')} className="flex items-center gap-2 cursor-pointer ">
        <ChartNoAxesCombined size={30}/>
          <h1 className="text-xl font-extrabold">Admin Panel</h1>

        </div>
        <MenuItems/>
      </aside>
    </Fragment>
  )
}
