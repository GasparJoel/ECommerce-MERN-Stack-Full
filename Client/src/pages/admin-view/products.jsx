import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

import { Fragment, useState } from "react"

export const AdminProducts = () => {

    const [openCreateProductsDialog, setopenCreateProductsDialog] = useState(false)

    return <Fragment>
      <div className="mb-5 w-full  flex justify-end">
        <Button onClick={()=>setopenCreateProductsDialog(true)} > Add New Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet open={openCreateProductsDialog} 
        onOpenChange={()=>{
          setopenCreateProductsDialog(false)
        }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add new Product</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  }