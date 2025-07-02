import React from 'react';

import HeaderItem from './HeaderItem';

import logo from './../assets/Images/logo.png';

import { 
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv 
} from 'react-icons/hi2';

import { HiPlus, HiDotsVertical } from 'react-icons/hi';

function Header() {

  const menu = [
    {
        name: 'HOME',
        icon: HiHome
    },
    {
        name:'SEARCH',
        icon: HiMagnifyingGlass
    },
    {
        name: 'WATCH LIST',
        icon: HiPlus
    },
    {
        name: 'ORIGINALS',
        icon: HiStar
    },
    {
        name: 'MOVIES',
        icon: HiPlayCircle
    },
    {
        name: 'SERIES',
        icon: HiTv
    }

  ]

  return (

    <div className='flex items-center gap-8 justify-between'>

        <div className='flex'>

            <img src={logo} 
            alt='Disney Plus Logo'
            className='
            w-[80px] 
            md:w-[115px] 
            object-cover' 
            />

            {menu.map((item) => (
                
                <HeaderItem name={item.name} Icon={item.icon} />

            ))}

        </div>

        <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' 
        alt='Foto do usuário'
        className='w-[40px] rounded-full' />

        {/* 

        https://www.youtube.com/watch?v=3NHYl0Lo74A&t=591s

        21:34 

        */}

    </div>

  )

}

export default Header;