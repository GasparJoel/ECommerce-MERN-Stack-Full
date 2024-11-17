import { CommonForm } from "@/components/common/form"
import { registerFormControls } from "@/config"
import { useToast } from "@/hooks/use-toast"
import { registerUser } from "@/Store/auth-slice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


const initialState={
  userName:'',
  email:'',
  password:''
}

export const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState)

  //Despachamos desde el Slice  auth
  const dispatch = useDispatch()
  //Para navegar
  const navigate=useNavigate()

  //Para usar un toast
  const { toast} = useToast()

  //Evento para registrar 
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data.payload?.success) {
        toast({
          
          title: data.payload.message,
          type: 'success',
       
        });
        navigate('/auth/login');
      } else {
        toast({
          variant: "destructive",
          title: data.payload?.message || "Registration failed",
          
        });
      }
      console.log(data);
    });
  };

  // console.log(formData)

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create New Account</h1>
        <p className="mt-2">Alredy have  an accountt
          <Link className="font-medium ml-2 text-primary hover:underline" to={'/auth/login'}>Login</Link>
        </p>
        
      </div>
      <CommonForm
      formControls={registerFormControls}
      buttonText={'Sign up '}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
    </div>
  )
}
