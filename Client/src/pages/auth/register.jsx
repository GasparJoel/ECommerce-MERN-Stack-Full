import { CommonForm } from "@/components/common/form"
import { registerFormControls } from "@/config"
import { useState } from "react"
import { Link } from "react-router-dom"


export const AuthRegister = () => {

  const initialState={
    userName:'',
    email:'',
    password:''
  }

  const [formData, setFormData] = useState(initialState)

  const onSubmit=()=>{

  }

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
