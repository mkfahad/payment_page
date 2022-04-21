import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PaymentCard from './PaymentCardVisa';
import PaymentCardMaster from './PaymentCardMaster';
function PaymentDetails() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='mt-1 flex-col w-[800px] space-y-4 ml-[20px]'>
            <div className='flex justify-start'>
                <h1 className='text-gray-700 font-semibold text-2xl'>Payment Information</h1>
            </div>
            <div className='flex w-full justify-between pt-10'>
                <div className='text-gray-600'>
                    <h3>Default Payment Method</h3>
                </div>
                <div>
                    <button className='rounded-md h-[30px] w-[140px] bg-cyan-900 text-white' onClick={handleClickOpen}>Add New Card</button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle className='text-lg text-gray-500 font-normal'>Add New Card</DialogTitle>
                        <div className='h-[1px] w-full bg-gray-200' />
                        <DialogContent >
                            <DialogContentText>
                                {/* To subscribe to this website, please enter your email address here. We
                                will send updates occasionally. */}
                            </DialogContentText>
                            <form class="w-full max-w-lg">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Card Number
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-2">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                            Expiry Date
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="MM" />
                                    </div>
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <div class="relative">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                                Expiry Date
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="YY" />
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                            CVV *
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            First Name
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Last Name
                                        </label>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                    </div>
                                </div>
                            </form>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Save Card</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className='h-[1px] w-full bg-gray-200' />
            <div>
                <PaymentCard/>
            </div>
            <div className='text-gray-600 flex'>
                <h3>Other Payment Method</h3>
            </div>
            <div className='h-[1px] w-full bg-gray-200' />
            <div className='md:flex space-x-2 grid-col-1 pb-3 space-y-3'>
                <PaymentCardMaster />
                <PaymentCard />
            </div>
        </div>
    )
}

export default PaymentDetails
