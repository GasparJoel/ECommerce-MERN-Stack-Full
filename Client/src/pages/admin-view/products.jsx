import { ProductImageUpload } from "@/components/admin-view/image-upload"
import { CommonForm } from "@/components/common/form"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { addProductFormElements } from "@/config"

import { Fragment, useState } from "react"

//Initial state de form 
 const initialFormData={
  image:null,
  title:'',
  description:'',
  category:'',
  brand:'',
  price:'',
  salePrice:'',
  totalstock:''
 }

export const AdminProducts = () => {

    const [openCreateProductsDialog, setopenCreateProductsDialog] = useState(false)

    //Tomar los valores del formulario
    const [formData, setFormData] = useState(initialFormData)

   const [imageFile, setImageFile] = useState(null)
   const [uploadedImageUrl, setuploadedImageUrl] = useState('')

    //Funcion de envio
     const OnSubmit = ()=>{

     }

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

            {/* Para la imagen  */}
            <ProductImageUpload file={imageFile} setFile={setImageFile} uploadedImageUrl={uploadedImageUrl}  setuploadedImageUrl={setuploadedImageUrl}/>
            <div className="py-6">
              {/* Estructura del formulario  */}
              <CommonForm onSubmit={OnSubmit} formData={formData} setFormData={setFormData}
              buttonText={'add'}
              formControls={addProductFormElements}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  }