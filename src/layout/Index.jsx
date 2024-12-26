import Mainlayout from '../mainlayout/Index'
import HeroSecton from '../components/heroSection/Index'
import CategoriesCompo from '../components/categories/Index'
import HealthCare from '../components/healthCare/Index'
import HeadSetComp from '../components/headSet/Index'
import SallarComponent from '../components/bestSellars/Index'
import sallerProducts from '../assets/MapData/bestSellarsData/data'
import MeetOurTeam from '../components/ourTeam/Index'
import ShopCategoriesComp from "../components/shopCategories/Index"
import OurReviews from '../components/reviews/Index'

const Layout = () => {
  return (
    <Mainlayout>
      <HeroSecton />
      <CategoriesCompo />
      <HealthCare />
      <SallarComponent data={sallerProducts} navBar={"first"} />
      <HeadSetComp />
      {/* <SallarComponent data={HomeData} navBar={"second"} /> */}
      <ShopCategoriesComp />
      <MeetOurTeam/>
      {/* <HeadSet2Comp /> */}
      <SallarComponent data={sallerProducts} navBar={"third"} />
      <OurReviews/>
    </Mainlayout>
  )
}

export default Layout
