import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className=' flex gap-4 dark:bg-gray-200 text-gray-900 bg-amber-100 p-4 lg:text-lg justify-center'>
        <NavbarItem title='Trending' param='fetchTrending'/>
        <NavbarItem title='Top Rated' param='fetchTopRated'/>

    </div>
  )
}

export default Navbar