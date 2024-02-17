import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data, setdata] = useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/Omkar-Deota')
        .then(res=>res.json)
        .then(data=>{
            setdata(data)
        })
    },[])
  return (<>
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'> Github Projects:{data.followers}
    <img className='tex-center' src='data.avatar_url' width={300}/></div></>
  )
}
