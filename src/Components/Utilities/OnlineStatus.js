import { useEffect, useState } from "react"
const OnlineStatus=()=>{
    const [status,setstatus]= useState(true)
    useEffect(()=>{
        window.addEventListener('online',function(){
            setstatus(true)
        })
        window.addEventListener('offline',function(){
            setstatus(false)
        })

    },[])

    return status
}
export default OnlineStatus