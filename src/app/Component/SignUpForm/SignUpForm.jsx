
'use client'

import { useRouter } from "next/navigation"

// import { redirect } from "next/navigation"


const  SignUpForm=()=>{
  const router=useRouter()
    const handleSignUp= async (e)=>{
      e.preventDefault()
      const signUp={
        name:e.target.name.value,
      email:e.target.email.value,
      password:e.target.password.value,
      }
      console.log(signUp)

      try{
        const res=await fetch('api/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application.json',
            },
            body:JSON.stringify(signUp)
        });
        console.log(res)
       if(res.status === 203){
        e.target.reset()
        router.push('/signin')
       }

      } catch(error){
         console.log('Error coming',error)
      }
    }
      return(
          <>
          <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
     
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp}  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
          </div>
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
           <input className="form-control mt-6 btn bg-orange-600" type='submit' value='Sign Up'></input>
          </div>
          {/* <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div> */}
        </form>
      </div>
    </div>
  </div>
          </>
      )
  }
  export default SignUpForm;