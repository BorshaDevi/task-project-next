
// import clientDb from '@/lib/db'
import NextAuth from 'next-auth'
import CredentialsProvider from'next-auth/providers/credentials'
import bcrypt from'bcryptjs'
import clientDb from '@/lib/db'
const handler=NextAuth({
   providers:[
    CredentialsProvider({
            name:'credentials',
            credentials:{
                
            },
            async authorize (credentials){
                const {email,password}=credentials
               try{
                if(!email || !password){
                    return null
                };
                const dbData=await clientDb()
                const  userLoginData=await dbData.collection('userCollection')
                const dataLogin=await userLoginData.findOne({email})
                if(!dataLogin){
                    console.log(dataLogin.email)
                    return null
                };
                const passwordCompare=bcrypt.compareSync(password,dataLogin.password)
                if(!passwordCompare){
                    return null;
                }
                return dataLogin;
               }catch(error){
                console.log('error login ',error)
               }
            },

})
   ],
   session:{
    strategy:'jwt',
    maxAge: 30 * 24 * 60 * 60,
   },
   pages:{
    signIn:'/signin',
   },
   secret:process.env.NEXTAUTH_SECRET,
})
export {handler as GET , handler as POST}