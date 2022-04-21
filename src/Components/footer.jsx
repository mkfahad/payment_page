function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-stone-700 text-white">
            <div className="space-y-4 text-xs text-white">
                <h5 className="font-bold">ABOUT</h5>
                <p>About Company</p>
                <p>Become a Supplier</p>
                <p>Careers</p>
                <p>Sitemap</p>
            </div>
            <div className="space-y-4 text-xs text-white">
                <h5 className="font-bold">SHOP</h5>
                <p>Bulk</p>
                <p>Groceries</p>
                <p>Health and Beauty</p>
                <p>Household</p>
                <p>Vitamins and Supplements</p>
            </div>
            <div className="space-y-4 text-xs text-white">
                <h5 className="font-bold">CUSTOMER CARE</h5>
                <p>FAQs</p>
                <p>Shipping and Delivery</p>
                <p>Claims and Returns</p>
                <p>Contact Us</p>
                <p>Create New Account</p>
            </div>
            <div className=" items-center space-y-4 text-xs">
                <h5 className="font-bold text-white">SIGN UP FOR EMAIL</h5>
                <p className="text-white">Be the first to hear about promotions,new products,trends and more</p>
            <div className='flex border-2 border-gray-200 items-center h-10 cursor-pointer bg-yellow-300 hover:bg-yellow-300'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink focus:outline-none text-black' type='text' placeholder='Email Address' />
                    <p className="text-black">Subscribe</p>
            </div>
            </div>

        </div>
    )
}

export default Footer;