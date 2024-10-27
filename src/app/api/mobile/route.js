
import clientDb from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req){
    try{
     const res=await req.json()
        const db=await clientDb()
        const userCollection= await db.collection('recipes')
       const result=await userCollection.find(res).toArray()
       console.log(result)

     return NextResponse.json({message:'Create new user'}, {status :203} ,result)
    }catch(error){
        return NextResponse.json ({message:'No body here post'},{status :403},error)
    }
}