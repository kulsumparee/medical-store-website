import React from 'react'
import { BlogData } from '../../assets/MapData/blogPostData/Data'
import { Link } from 'react-router-dom'

const BlogPostComp = () => {
    return (
        <>
            <div className=" flex justify-between pb-8 px-5">
                <h1 className='text-2xl font-semibold'>Blog Post</h1> 
                <Link to="/blogs">
                    <h1 className='text-lg cursor-pointer'>See All</h1>
                </Link>
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

export default BlogPostComp