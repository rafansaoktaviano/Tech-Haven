import React from 'react'
import Logo from '../Logo/Logo'
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='w-full bg-[#191C1F]'>
      <div className='lg:py-[72px] lg:px-[80px] py-[50px] px-[50px] flex flex-wrap lg:flex gap-10 justify-start md:justify-center align-middle '>
        <div className='grid gap-2'>
            <Logo logoCSS={""}/>
            <div className='grid mt-2'>
            <span className='text-gray-500'>Customer Support :</span>
            <span className='text-gray-50'>(629) 555-0129</span>                
            </div>
            <div className='grid text-gray-400'>
                <span>4517 Washington Ave.</span>
                <span>Manchester, Kentucky 39495</span>
            </div>
            <span className='text-gray-50'>info@techheaven.com</span>
        </div>
        <div className='grid gap-6'>
            <span className='text-[#FFFFFF] font-semibold'>TOP CATEGORY</span>
            <div className='grid gap-3 text-gray-400'>
            <span>Computer & Laptop</span>
            <span>SmartPhone</span>
            <span>HeadPhone</span>
            <span>Camera & Photo</span>
            <span>TV & Homes</span>
            <span className='text-warning'>Browser All Products <AiOutlineArrowRight className='inline' /> </span>
            </div>
        </div>
        <div className='grid gap-6'>
            <span className='text-[#FFFFFF] font-semibold'>QUICK LINKS</span>
            <div className='grid gap-3 text-gray-400'>
            <span>Shop Product</span>
            <span>Wishlist</span>
            <span>Compare</span>
            <span>Track Order</span>
            <span>Customer Help</span>
            <span>About Us</span>
            </div>
        </div>
        <div className='grid'>
            <span className='text-[#FFFFFF] font-semibold'>DOWNLOAD APP</span>
            <div className='grid gap-3 text-gray-400'>
            <div>
              <div className='p-4 bg-gray-800 flex gap-4 max-w-[176px]'>
                <FaGooglePlay className='text-white w-[32px] h-[32px]' />
                <div className='text-white grid'>
                  <span className='text-xs'>Get it now</span>
                  <span className='font-semibold'>Google Play</span>
                </div>
              </div>
            </div>
            <div>
              <div className='p-4 bg-gray-800 flex gap-4 max-w-[176px]'>
                <BsApple className='text-white w-[32px] h-[32px]' />
                <div className='text-white grid'>
                  <span className='text-xs'>Get it now</span>
                  <span className='font-semibold'>App Store</span>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-6 w-[312px] '>
            <span className='text-[#FFFFFF] font-semibold'>POPULAR TAG</span>
            <div className='flex gap-3 text-white flex-wrap'>
            <span className='border py-[6px] px-[12px] rounded-sm'>Game</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Iphone</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>TV</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Laptops</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Macbook</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>SSD</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Graphics Card</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Power Bank</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Smart TV</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Speaker</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Tablet</span>
            <span className='border py-[6px] px-[12px] rounded-sm'>Samsung</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
