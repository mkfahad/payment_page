import React from 'react'
import PaymentDetails from '../Components/PaymentDetails'
import SideBar from '../Components/SideBar'
function PaymentInfo() {
    return (
        <div className='flex'>
            <SideBar />
            <PaymentDetails />
        </div>
    )
}

export default PaymentInfo;