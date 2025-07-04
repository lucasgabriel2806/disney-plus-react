import React from 'react';

import HeaderItem from './HeaderItem';

import disney_plus_logo from './../assets/Images/disney-plus.png';

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

    <div className='flex items-center justify-between p-5'>

        <div className='flex items-center gap-8'>

            <img src={disney_plus_logo} 
            alt='Disney Plus Logo'
            className='
            w-[80px] 
            md:w-[115px] 
            object-cover' 
            />

            <div className='hidden md:flex gap-8'>

                {menu.map((item) => (
                    
                    <HeaderItem name={item.name} Icon={item.icon} />

                ))}

            </div>

            <div className='flex md:hidden gap-5'>

                {menu.map((item, index) => index<3&& (
                    
                    <HeaderItem name={''} Icon={item.icon} />

                ))}

                <div className="md:hidden">

                    <HeaderItem name={''} Icon={HiDotsVertical} />

                    <div>

                        {menu.map((item, index) => index>3&& (
                    
                            <HeaderItem name={''} Icon={item.icon} />

                        ))}    
                        
                    </div>

                </div>

            </div>

        </div>

        <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' 
        alt='Foto do usuário'
        className='w-[40px] rounded-full' />

    </div>

  )

}

export default Header;