
import { useRef } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";


export const ProductImageUpload = ({imageFile , setImageFile, uploadedImageUrl, setuploadedImageUrl}) => {

    const inputRef =useRef(null);

    const handleImageFileChange =(e)=>{
        console.log(e.target.files)
        const selectedFile = e.target.files?.[0]
        if (selectedFile) setImageFile(selectedFile)
    }

    //Arrastre sobre 
    const handleDragOver =(event)=>{
      event.preventDefault()
    }

    const handleDrop =(event)=>{
      event.preventDefault()
      const droppedFile = event.dataTransfer.files?.[0]
      if (droppedFile) setImageFile(droppedFile)
    }
  const handleRemoveImage=()=>{
    setImageFile(null)
    if (inputRef.current) {
      inputRef.current.value= ""
    }
  }

  console.log(imageFile)
  return (




    <div className="w-full max-w-md mx-auto mt-4">
        <Label className="text-lg font-semibold mb-2 block">Upload Image</Label> 

        <div onDragOver={handleDragOver} onDrop={handleDrop} className=" border-2 border-dashed rounded-lg p-4"   >
            <Input  
            id="image-upload" 
            type="file"
              className="hidden" 
             ref={inputRef} 
             onChange={handleImageFileChange} />

             {
              !imageFile?
              <Label htmlFor="image-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
                  <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2"/>
                  <span>Drag & drop  or click to upload image </span>
              </Label>: 
              
              <div className="flex items-center justify-between">
                <div className=" flex items-center">
                  <FileIcon className="w-8 h-8 text-primary mr-2"/>
                </div>
                <p className="text-sm font-medium">
                  {imageFile.name}
                </p>
                <Button vaiant= "ghost" size="icon" className="text-muted-foreground hover:text-foreground " onClick={handleRemoveImage}>
                  <XIcon className="w-4 h-4 "/>
                  <span className="sr-only" >Remove FIle</span>
                </Button>
              </div>
             }
        </div>
    </div>
  )
}
