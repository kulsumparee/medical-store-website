import { Box, Slider } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import CardData from './Data';
import Counter from '../page3/counter';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const AddToCartPage = () => {

        return (
            <div className='px-5'>
                <h1 className=' py-10 text-md sm:text-lg pt-10'>
                 Home / Healthcare / Medical Supplies / Health Products </h1>

                <div className=' flex flex-col items-center text-center pb-10'>
                    <h1 className=' text-2xl font-bold'>Shopping Cart</h1>
                    <div className=' flex flex-col '>
                        <p className=' my-4'>Exclusive Offer about Magic Club</p>
                        <div>
                            <Box className=" w-[250px] md:w-[300px]">
                                <Slider color='warning' defaultValue={60} aria-label="Default" valueLabelDisplay="auto" />
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5 ">



                    <div className='   col-span-12 lg:col-span-9  '>
                        <div className=" overflow-auto">
                            <table className="border min-w-max w-full ">
                                <thead className="capitalize bg-gray-300">
                                    <tr className="border-b">
                                        <th className="px-4 py-4 text-left">Product</th>
                                        <th className="px-4 py-4 text-left">Price</th>
                                        <th className="px-4 py-4 text-left">Quantity</th>
                                        <th className="px-4 py-4 text-left">Total</th>
                                        <th className="px-4 py-4 text-left">Remove</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    {CardData.map((data, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-2">
                                                <div className="flex items-center gap-3">
                                                    <img src={data.image} alt={data.title} className="w-20 h-20 md:w-32 md:h-32 object-cover" />
                                                    <div>
                                                        <h1 className="font-medium w-40 md:w-52">{data.title}</h1>
                                                        <p className="text-sm md:text-md text-gray-500">{data.capacity}</p>
                                                        <p className="text-sm md:text-md text-gray-500">{data.color}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-2 font-medium">{data.price}</td>
                                            <td className="px-4 py-2"><Counter className="" /></td>
                                            <td className="px-4 py-2 font-medium">{data.price}</td>
                                            <td className="px-4 py-2 text-center">
                                                <button className="text-red-500 hover:text-red-700"><ClearIcon /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        

                        <div className=" sm:flex justify-between py-10">

                            <div className=' border-2 border-dashed md:text-lg flex p-3  justify-between gap-1 rounded-md mb-5 w-full max-w-[300px]'>
                                <p>Coupon code</p>
                                <p>Apply Coupon</p>
                            </div>

                            <div className=" md:flex gap-5 items-center text-center grid gap-4">
                                <Button title="Continue Shopping" className="bg-transparent border-2 py-1 border-cyan-500 " />
                                <Button title="Update Cart" className=""/>

                            </div>

                        </div>

                    </div>


                    <div className=" col-span-12 lg:col-span-3">
                        <div className="max-w-sm mx-auto bg-white border rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Total</h2>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Product Subtotal</span>
                                <span className="font-medium">$229.99</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Order Discounts</span>
                                <span className="font-medium ">-$30.01</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Estimated Shipping</span>
                                <span className="font-medium text-red-500">Free</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="text-gray-600">Estimated Taxes</span>
                                <span className="font-medium">$26.00</span>
                            </div>
                            <hr className="mb-4" />
                            <div className="flex justify-between mb-6">
                                <span className="text-lg font-semibold">Total</span>
                                <span className="text-lg font-semibold">$225.98</span>
                            </div>
                            <Link to="/checkout">
                                <Button title=" Proceed to checkout" className="w-full py-3 rounded-lg font-medium " />
                            </Link>


                        </div>
                    </div>
                </div>

            </div>



        )
    }

export default AddToCartPage

