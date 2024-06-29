import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkmodeSwitch from './DarkmodeSwitch'

const Header = () => {
  return (
    <div className='flex justify-between p-5 bg-gray-200 dark:bg-gray-900'>
        {/* left menu items*/}
        <div className='flex space-x-4'>
            <MenuItem title='Home' address='/' Icon={AiFillHome}/>
            <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>

        {/* right menu items */}
        <div className=' flex gap-4 items-center'>
          <DarkmodeSwitch/>
            <Link className=' space-x-1 cursor-pointer' href={'/'}>
                <span className=' bg-amber-500 px-2 py-1 rounded-md font-bold'>IMDB</span>
                <span className=' hidden sm:inline'>Clone</span>
            </Link>
        </div>
    </div>
  )
}

export default Header