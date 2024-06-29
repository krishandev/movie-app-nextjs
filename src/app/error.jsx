"use client"
import React, { useEffect } from 'react'

const error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error)
    }, [error])
  return (
    <div className='flex items-center justify-center p-10 font-semibold'>
        <h1 className=' text-red-400'>Something Went Wrong! Try Again Later. </h1>
        <button className=' hover:text-amber-600' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error