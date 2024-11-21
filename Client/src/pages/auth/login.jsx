import { CommonForm } from "@/components/common/form";
import { loginFormControls} from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/Store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export const AuthLogin = () => {

  
const initialState={
  email:'',
  password:''
}

  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()

  const {toast} = useToast()

  const onSubmit =(event)=>{
    event.preventDefault()

    dispatch(loginUser(formData)).then(data=>{
      if(data.payload?.success){
        toast({
          title:data.payload.message,
          type:'success'
        })
      }else{
        toast({
            title:data.payload.message,
            variant:"destructive"
          })
      }
    })
  }
  return (
    <div className="mx-auto w-full  max-w-md space-y-6  ">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-foreground">Sign in to your account</h1>
        <p className="mt-2">Dont have an account
        <Link className="font-medium ml-2 text-primary hover:underline" to={'/auth/register'}>Register</Link>
        </p>     
      </div>

      <CommonForm
        formControls={ loginFormControls }
        buttonText={'Sign in'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

        
    </div>
  )
}
