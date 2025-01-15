import { useEffect,useState } from "react";
import axios from "axios";
import { Api_url1 } from "./contants";
import { Api_url2 } from "./contants";
const useMenu=(path)=>{
    const [data,setdata]= useState(null)
    useEffect(()=>{
        fetchdata()
    },[path])
    async function fetchdata(){
        try{
        const res = await axios.get( Api_url1+path+Api_url2)
        const menuList = res?.data|| [];

        setdata(menuList);      
        }
        catch(err){
            alert(err)

        }

    }

    return data
}
export default useMenu