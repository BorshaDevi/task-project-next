'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar=()=>{
    return(
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Next js Task</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <Link href='/mobile' className="font-bold text-cyan-500">Mobile Data</Link>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li> <button onClick={() => signOut()}>Sign out</button></li>
      </ul>
    </div>
  </div>
</div>
        </>
    )
}
export default Navbar;