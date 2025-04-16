
import React, { useEffect, useState } from 'react'

const useFetchData = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
    const res = await fetch("https://dummyjson.com/users");
    console.log("res ",res)
    const resJson = await res.json()
    console.log("resJson ",resJson)
    setData(resJson.users)
    }
  return  data
}

export default useFetchData