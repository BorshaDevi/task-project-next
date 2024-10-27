
'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";

const  LoginForm=()=>{
    const handleSignIn=async(e)=>{
      e.preventDefault()
      const email=e.target.email.value
      const password=e.target.password.value
      // console.log(email,password)

      try{
        const res=await signIn('credentials',{
           email , password ,redirect :false
        })
        console.log(res)
        if(res.status === 200){
         e.target.reset()
        }
        
        
      }catch(error){
       console.log(error)
      }
      
    }
      return(
          <>
          <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
     
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
           <input className="form-control mt-6 btn bg-orange-600" type='submit' value='login'></input>
          </div>
          {/* <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div> */}
        </form>
        <p className="p-3">Do not have any account ?Please <Link href='/signup' className="underline"><span>Sign Up</span></Link></p>
      </div>
    </div>
  </div>
          </>
      )
  }
  export default LoginForm;