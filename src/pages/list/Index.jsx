import { Divider, Image, Rate } from 'antd'
import { useState } from 'react'
import { ListData } from '../../assets/MapData/pages/listData/Data'
import PaginationComp from './Pagination'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const CardList = () => {
  const [value, setValue] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state?.item || null; 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ListData.slice(indexOfFirstItem, indexOfLastItem);
  const [mainImage, setMainImage] = useState(item?.image);
  const [selectedProduct, setSelectedProduct] = useState('image');

  const handleThumbnailClick = (productKey, imageUrl) => {
    setMainImage(imageUrl);
    setSelectedProduct(productKey);
  };



  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartItems.find((cartItem) => cartItem.id === item?.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: item?.id,
        mainImage,
        brand: item?.brand,
        title: item?.title,
        price: item?.price,

        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    navigate('/AddCart');
  };

  return (
    <>

      <div className='w-full'>

        <div className=' w-full my-10 grid sm:grid-cols-2 md:grid-cols-1 gap-x-10 '>
          {currentItems && currentItems.map(item => <div key={item.id}>
            <div className=' grid grid-cols-12   mt-10 lg:mt-0 border p-5'>
              <div className=" hidden  ">

                <div className=' w-32 h-28'> <img src={item?.product1} onClick={() => handleThumbnailClick('product1', item?.product1)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product1' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                <div className=' w-32 h-28'> <img src={item?.product2} onClick={() => handleThumbnailClick('product2', item?.product2)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product2' ? 'border-blue-500' : 'border-gray-200'}`} /></div>
                <div className=' w-32 h-28'> <img src={item?.product3} onClick={() => handleThumbnailClick('product3', item?.product3)} className={`border-2 cursor-pointer w-full h-full ${selectedProduct === 'product3' ? 'border-blue-500' : 'border-gray-200'}`} /></div>

              </div>
              <div className=' col-span-12 md:col-span-3 lg:col-span-3  '>
                <Image src={item.image} width={240} height={240} />
              </div>


              <div className=' col-span-12 md:col-span-9 lg:col-span-5  md:ml-20 lg:ml-10 '>
                <h1 className=' text-gray-500'>{item.brand} </h1>
                <div className='hover:text-blue-500 hover:underline cursor-pointer'>
                  <h1 className=' font-bold w-full'>{item.title} </h1>
                  <h1 className=' font-bold'>{item.title2} </h1>
                </div>
                <div className=' flex  my-2 gap-5'>
                  <Rate className=' text-sm' onChange={setValue} value={value} />
                  <p>{item.reviews} </p>

                </div>
                <div>
                  <ul className=' w-full'>
                    <li className='mt-1'>{item.list1} </li>
                    <li className='mt-1'>{item.list2} </li>
                    <li className='mt-1'>{item.list3} </li>
                    <li className='mt-1'>{item.list4} </li>
                  </ul>
                </div>

              </div>

              <Divider type='vertical' />
              <div className=' col-span-12 md:col-span-5 lg:col-span-3 flex flex-col md:items-center md:justify-center mt-10 lg:mt-0 '>
                <div className=' flex gap-3 justify-center items-center'>
                  <h1 className=' text-xl font-semibold '>{item.price} </h1>
                  <h1 className=' text-gray-500 line-through'>{item.originalPrice}</h1>
                </div>


                <button onClick={handleAddToCart} className=' my-2 font-semibold  px-10  md:px-20 md:text-sm lg:text-sm  lg:px-16 py-3 bg-[#f5c34b] rounded-sm'>{item.button}</button>

                <div className=' flex hover:cursor-pointer'>
                  <h1 className=' '>{item.text}</h1>
                  <Divider className='' type='vertical' />
                  <div className=' flex gap-2'>
                    <img src={item.logo} />
                    <h1>{item.text1}</h1>
                  </div>
                </div>

              </div>
            </div>

          </div>)}
        </div>

        <div className=''>
          <PaginationComp currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={ListData.length} paginate={paginate} />
          <div>
            <h1 className=' flex justify-center text-center'>1 – 20 of 300+ properties found</h1>
          </div>
        </div>

      </div>

    </>
  )
}

export default CardList
