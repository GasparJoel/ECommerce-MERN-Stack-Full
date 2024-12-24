
import { ChartNoAxesCombined, LayoutDashboard, ShoppingBasket, ShoppingCart } from "lucide-react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"

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

  const MenuItems = ({setOpen})=>{
    const navigate = useNavigate()

    return <nav className="mt-8 flex-col flex gap-2">
      {
        adminSidebarMenuItems.map((menuitem) =>
        <div key={menuitem.id}  
        onClick={()=>
        {navigate(menuitem.path)
        setOpen? setOpen(false):null
        
        }
        }
         className="flex cursor-pointer items-center gap-2  rounded-md px-3 py-2 bg-white hover:text-primary-foreground hover:bg-primary/90">
            {menuitem.icon}
            <span> {menuitem.label}</span>
        </div>
        )
      }
    </nav>
  }

export const AdminSidebar = ({open,setOpen}) => {
  

  const navigate = useNavigate()
  return (
    
    <Fragment>
      {/* Este es cuando la pantalla es modo movil  */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent  side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className='border-b'>
            
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                  <ChartNoAxesCombined size={30}/>
                  <h1 className="text-2xl font-extrabold">Admin Panel</h1>
                </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen}/>

          </div>

        </SheetContent>

      </Sheet>
 {/* Este es cuando la pantalla es modo escritorio  */}
      <aside className=" hidden w-64 flex-col border-r bg-white p-6 lg:flex">
        <div onClick={()=>navigate('/admin/dashboard')} className="flex items-center gap-2 cursor-pointer ">
        <ChartNoAxesCombined size={30}/>
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>

        </div>
        <MenuItems/>
      </aside>
    </Fragment>
  )
}
