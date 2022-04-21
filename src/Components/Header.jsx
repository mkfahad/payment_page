import React from 'react'
import { SearchIcon, HeartIcon ,MenuIcon} from '@heroicons/react/outline'
import UserIcon from '../assets/user.svg'
import QuickOrderIcon from '../assets/shipping-fast.svg'
import ShopCartIcon from '../assets/shopping_cart_empty.svg'
function Header() {
    return (
        <header >
            {/* top nav */}
            <div className='flex items-center justify-center bg-white p-1 flex-grow py-3 '>
                <div className='md:hidden ml-3'>
                    <MenuIcon className='h-5'/>
                </div>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <h3 className='text-black w-[185px] font-normal text-xl cursor-pointer'>LOGO</h3>
                </div>
                {/* search */}
                <div className='hidden sm:flex border-2 border-gray-200 items-center h-10 w-[450px] cursor-pointer bg-emerald-800 hover:bg-emerald-900'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink focus:outline-none' type='text' placeholder='Search by product,category or brand' />
                    <SearchIcon className='h-12 p-4 text-white' />
                </div>
                {/* right hand side */}
                <div className='flex items-center text-xs space-x-6 mx-6'>
                    <div className='hidden md:inline flex-col items-center'>
                        <img src={UserIcon} alt="usericons" className='h-4 w-full' />
                        <p className='text-gray-700'>Hello Jonathan</p>
                    </div>
                    <div className='hidden md:inline'>
                        <img src={QuickOrderIcon} alt="usericons" className='h-4 w-full' />
                        <p className='text-gray-700'>Quick Order</p>
                    </div>
                    <div className='hidden md:inline'>
                        <HeartIcon className='h-4 text-gray-700 w-full' />
                        <p className='text-gray-700'>Favorites</p>
                    </div>
                    <div className='md:hidden '>
                        <SearchIcon className='text-black h-5' />
                    </div>
                    <div>
                        <img src={ShopCartIcon} alt="usericons" className='h-4 w-full' />
                        <p className='text-gray-700'>Cart</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex border-gray-200 border-2 items-center justify-center space-x-14 p-2 pl-3 bg-white text-black text-sm '>
                <p className='hidden sm:inline'>Beverages</p>
                <p className='hidden sm:inline'>Bulk</p>
                <p className='hidden sm:inline'>Groceries</p>
                <p className='hidden sm:inline'>Health & Beauty</p>
                <p className='hidden sm:inline'>Household</p>
                <p className='hidden sm:inline'>Vitamins & Supplements</p>
                <p className='hidden sm:inline'>Brands</p>
            </div>
        </header >
    )
}

export default Header