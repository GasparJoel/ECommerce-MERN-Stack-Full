import { Link } from "react-router-dom"


export const AuthRegister = () => {
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create New Account</h1>
        <p className="mt-2">Alredy have  an accountt</p>
        <Link className="font-medium ml-2 text-primary hover:underline" to={'/auth/login'}>Login</Link>
      </div>
    </div>
  )
}
