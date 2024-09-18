import React from 'react'
import Mainlayout from '../mainlayout/Index'
import DrawerComp from '../../components/header/Drawer'
import HeroSecton from '../../components/heroSection/Index'
import CategoriesCompo from '../../components/categories/Index'
import SavingsCompo from '../../components/majorSavings/Index'
import HeadSetComp from '../../components/headSet/Index'
import HeadSet2Comp from '../../components/headSet/hedset'
import SallarComponent from '../../components/bestSellars/Index'
import sallerProducts from '../../components/bestSellars/data'
import HomeData from '../../components/bestSellars/HomeData'
import ShopCategoriesComp from '../../components/shopCategories/Index'

const Layout = () => {
  return (
      <Mainlayout>
      <DrawerComp />
      <HeroSecton />
      <CategoriesCompo />
      <SavingsCompo />
      <SallarComponent data={sallerProducts} navBar={"first"} />
      <HeadSetComp />
      <SallarComponent data={HomeData} navBar={"second"} />
      <ShopCategoriesComp/>
      <HeadSet2Comp/>
    </Mainlayout>
  )
}

export default Layout
