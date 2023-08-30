import { useState,useEffect } from "react"
import axios from "axios"

const useFetch = (url) => { 
    const [productLists,setProductLists] = useState([])

     const fetchData = async() =>{
        try {
           const res = await axios.get(url)
         //   console.log(res.data) 
           setProductLists(res.data) 
        } catch (error) {
            console.log(error)
        }
     }

     useEffect(() =>{
       fetchData()
     },[])

  return productLists
}

export default useFetch
