import React from 'react'
import { BlogData } from './Data'

const BlogPostScreen = () => {
    return (
        <>
            <h1 className=' px-10 text-md sm:text-lg  pt-10'>Home  /  Electronics  /  Computers  /  Desktop Computers</h1>
            <div className=" flex justify-center py-8 px-5">

                <h1 className='text-2xl font-semibold'>Blogs</h1>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-y-10 px-10'>
                {
                    BlogData.map(data =>
                        <div className=" px-3">
                            <img src={data.img} alt={data.title} width={448} height={300} />
                            <p className="text-[#626974] text-lg">{data.title} </p>
                            <p className="text-lg font-medium">{data.para} </p>
                            <p className="text-[#626974] text-lg">{data.date} </p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default BlogPostScreen