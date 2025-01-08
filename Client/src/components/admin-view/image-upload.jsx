
import { useRef } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


export const ProductImageUpload = ({file , setImageFile, uploadedImageUrl, setuploadedImageUrl}) => {

    const inputRef =useRef(null);

    const handleImageFileChange =(e)=>{
        console.log(e.target.files)
    }
  return (




    <div className="w-full max-w-md mx-auto">
        <Label className="text-lg font-semibold mb-2 block">Upload Image</Label> 

        <div>
            <Input  
            id="image-upload" 
            type="file"
            //  className="hidden" 
             ref={inputRef} 
             onChange={handleImageFileChange} />
        </div>
    </div>
  )
}
