
const Mobile=async()=>{
    try{
        const res=await fetch('api/mobile')
        const data=await res.json()
        console.log(data)
    }catch(error){

        }
    return(
        <>
        <p>mobile</p>
        </>
    )
}
export default Mobile;