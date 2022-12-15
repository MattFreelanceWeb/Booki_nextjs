import React from 'react'
import Category from '../Utils/Category'
import Logo from '../Utils/Logo'

type Props = {}

function Header({}: Props) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Logo/>
        <div className='flex w-full'>
          <Category content={'Hébergements'} href={'#accommodation'}/>
          <Category content={'Activités'} href={'#activity'}/>  
        </div>
    </div>
  )
}

export default Header