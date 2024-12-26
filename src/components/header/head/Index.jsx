import { FaFacebookF, FaLinkedinIn,  FaRegHeart, FaSearch, } from "react-icons/fa"
import DropdownComp from "../dropdown/Index"
import { FaInstagram, FaTwitter } from "react-icons/fa6"
import Navlogo from "../../../assets/images/pakdeals.svg"
import { Divider } from "antd"
import Line from "../../../assets/images/line.svg"
import { Link } from "react-router-dom"
import imds from "../../../assets/images/account.svg"
import cart from "../../../assets/images/cart.svg"



const HeaderComponent = () => {


    return (
        <div className="  flex flex-col">
            <div className=" relative top-48 md:top-0 md:flex justify-between md:px-2 gap-x-1 lg:px-10 text-md items-center pt-3">
                <div className=" pb-3 md:pb-0 text-lg md:text-sm font-semibold md:font-normal">
                    <p className="  ">Free Express Shipping on orders $200!</p>
                </div>
                <div className="  flex flex-wrap md:gap-4 lg:gap-7 md:text-sm  gap-x-6 gap-y-2  cursor-pointer">
                    <DropdownComp title="English / USD" />
                    <DropdownComp title="Help Center" />
                    <p>Find a Store</p>
                    <p>Follow Us</p>
                    <div className="flex md:text-sm gap-2 cursor-pointer">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-12 md:px-2 lg:px-10 space-x-2 text-md  relative bottom-28 md:bottom-0 md:top-2 ">
                <div className="  col-span-12 md:col-span-2 flex  justify-center ">
                    <img src={Navlogo} alt="logo1" width={157} height={57} />
                </div>

                <div className=" col-span-12  md:col-span-6  ">
                    <div className=" py-4 md:pb-0 flex items-center relative ">
                        <input
                            className="border-2 py-2 rounded-full w-full pl-3 focus:outline-none"
                            type="text"
                            name="" id="products"
                            placeholder="" />
                        <div className=" flex left-[45%] md:left-[54%] lg:left-[68%] cursor-pointer gap-3 items-end min-w-max absolute">
                            <Divider type="vertical" />
                            <DropdownComp title="All Categories" />
                            <FaSearch className="  text-gray-500" />
                        </div>
                    </div>

                </div>

                <div className=" col-span-12 md:col-span-4 flex mt-3 space-x-2 justify-around">
                    <div className="flex items-center gap-1 cursor-pointer lg:text-md lg:font-semibold">
                        <FaRegHeart />
                        <h1>Wishlist</h1>
                    </div>



                    <Link to="/sign-in" className="flex items-center gap-1 cursor-pointer lg:text-md lg:font-semibold">
                        <img src={imds} alt="account" />
                        <h1>SignIn</h1>
                    </Link>


                    <div className="flex items-center gap-1 cursor-pointer lg:text-md lg:font-semibold">
                        <img src={cart} alt="account" />
                        <h1>Cart</h1>
                    </div>




                </div>

            </div>

            <div className=" pt-10">
                <img src={Line} alt="line" height={140} />
            </div>


        </div>
    )
}

export default HeaderComponent

