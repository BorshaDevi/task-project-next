
import clientDb from "@/lib/db"
import { NextResponse } from "next/server"
import bcrypt from'bcryptjs'

export async function POST(req){
    try{
     const {name,email,password}=await req.json()
     console.log(email,password)
     const hashPassword=await bcrypt.hash(password,10)
     const res={name ,email, password:hashPassword}
        const db=await clientDb()
        const userCollection= await db.collection('userCollection')
       const result=await userCollection.insertOne(res)

     return NextResponse.json({message:'Create new user'}, {status :203} ,result)
    }catch(error){
        return NextResponse.json ({message:'No body here post'},{status :403},error)
    }
}