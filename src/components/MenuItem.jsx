import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, address, Icon}) => {
  return (
    <div>
        <Link href={address} className='flex'>
        <Icon className=" sm:hidden text-2xl"/>
        <p className=' hidden sm:inline uppercase hover:text-amber-500'>{title}</p>
        
        </Link>
    </div>
  )
}

export default MenuItem