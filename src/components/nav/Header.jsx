import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CustomConnectButton } from './CustomConnectButton';

const Header = () => {
  // top navbar using shadcn
  return (
    <header className='sticky top-0 z-50 w-full border-border/40 backdrop-blur'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='w-full flex justify-between'>
          <div className='flex justify-center'>
            <MainNav />
          </div>
          <CustomConnectButton />
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"/>
    </header>
  )
}

export default Header
