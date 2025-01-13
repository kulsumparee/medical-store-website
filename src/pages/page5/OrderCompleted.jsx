import icon from "../../assets/images/icons.svg"

const OrderCompleted = () => {
  return (
      <div className=' px-5 md:px-10'>
          <h1 className=' text-lg py-10'>Home  /  Electronics  /  Computers  /  Desktop Computers</h1>

          <div className=' flex flex-col items-center'>
              <img className=' flex justify-center text-center  cursor-pointer' src={icon} alt="profile4735" />
        <h1 className=' text-xl md:text-3xl font-semibold my-4 text-cyan-500'>Your Order is Completed!</h1>
              <p className=' text-lg'>Thank you. Your order has been received.</p>
          </div>
          

   
      {/* Order Info */}
          <div className=" p-2 md:p-4 min-w-max  my-10 mx-auto max-w-4xl border rounded-md border-dashed border-gray-600">
        <div className="sm:flex justify-between">
          <div  className='flex sm:flex-col justify-between pb-2'>
            <p className="text-gray-600">Order Number:</p>
            <p className="font-semibold">039422</p>
          </div>
                  <div className='flex sm:flex-col justify-between pb-2'>
            <p className="text-gray-600">Date:</p>
            <p className="font-semibold">27/04/2022</p>
          </div>
                  <div className='flex sm:flex-col justify-between  pb-2'>
            <p className="text-gray-600">Total:</p>
            <p className="font-semibold">$2984.10</p>
          </div>
                  <div className='flex sm:flex-col justify-between  pb-2 '>
            <p className="text-gray-600">Payment Method:</p>
            <p className="font-semibold">Direct Bank Transfer</p>
          </div>
        </div>
      </div>

          <div className="max-w-4xl mx-auto bg-white  border rounded-lg overflow-hidden">
      {/* Order Details */}
      <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-cyan-500">Order Details</h2>
        <div className="flex justify-between font-semibold">
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Apple MacBook Pro with Apple M1 Chip x 2</p>
          <p>$229.99</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Apple MacBook Pro with Apple M1 Chip x 2</p>
          <p>$229.99</p>
        </div>
        <hr className="my-4" />

        <div className="flex justify-between mb-2">
          <p className="font-semibold">Sub Total</p>
          <p>$89.90</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-semibold">Shipping</p>
          <p>Free shipping</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-semibold">VAT</p>
          <p>$19</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="font-semibold">Payment Method</p>
          <p>Direct bank transfer</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold text-cyan-600">Total</p>
          <p className="text-lg font-bold text-cyan-600">$1319</p>
        </div>
      </div>
    </div>
 

    </div>
  )
}

export default OrderCompleted
