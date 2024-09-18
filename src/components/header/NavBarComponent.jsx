import React from 'react'
import HeaderComponent from '../header/head/Index'
import DrawerComp from './Drawer'

const NavBarComp = () => {
  return (
    
    <>
      <div className=''><HeaderComponent /></div>
      <div className="">
        <DrawerComp />
      </div>
    </>
  )
}

export default NavBarComp