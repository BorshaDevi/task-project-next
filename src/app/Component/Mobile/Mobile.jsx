'use client'
const Mobile=async()=>{
    try{
        const res=await fetch('api/mobile',{
            method:'POST',
            headers:{
                'Content-Type':'application.json',
            },
            body:JSON.stringify()
        })
    }catch(error){

        }
    return(
        <>
        <p>mobile</p>
        </>
    )
}
export default Mobile;