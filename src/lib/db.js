
import { MongoClient, ServerApiVersion } from "mongodb";

const uri=process.env.MONGODB_URI;

let db;
const client=new MongoClient(uri,{
    
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
});
const clientDb=async()=>{
    if(db) return('db found');
   try{
       db=client.db('nextjsDB')
       return db;
   }
   catch(error){
    console.log(error)
      
   }
}
export default clientDb;