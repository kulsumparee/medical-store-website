import React from 'react'
import Mainlayout from '../mainlayout/Index'
import HeroSecton from '../components/heroSection/Index'
import CategoriesCompo from '../components/categories/Index'
import SavingsCompo from '../components/majorSavings/Index'
import HeadSetComp from '../components/headSet/Index'
import HeadSet2Comp from '../components/headSet/hedset'
import SallarComponent from '../components/bestSellars/Index'
import sallerProducts from '../assets/MapData/bestSellarsData/data'
import HomeData from '../assets/MapData/bestSellarsData/HomeData'
import ShopCategoriesComp from '../components/shopCategories/Index'
import BlogPostComp from '../components/blogPost/Index'

const Layout = () => {
  return (
    <Mainlayout>
      <HeroSecton />
      {/* <CategoriesCompo /> */}
      <SavingsCompo />
      <SallarComponent data={sallerProducts} navBar={"first"} />
      <HeadSetComp />
      <SallarComponent data={HomeData} navBar={"second"} />
      <ShopCategoriesComp />
      <HeadSet2Comp />
      <SallarComponent data={sallerProducts} navBar={"third"} />
      <BlogPostComp />
    </Mainlayout>
  )
}

export default Layout
