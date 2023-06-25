"use client";

import { FaPhoneAlt, FaMailchimp, FaAddressCard } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-32'>
            <footer className="footer text-white p-10 bg-black opacity-85  h-full md:h-64 items-center">
                <div>
                    
                        <h2 className="text-3xl font-bold">Yokoso Shop</h2>
                   
                </div>

                <div>
                    <span className="footer-title">Contact Information</span>
                    <div className='flex gap-1 items-center'>
                        <FaPhoneAlt></FaPhoneAlt>
                        Phone: +880-1769-564565
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaMailchimp></FaMailchimp>
                        Email: yokoso_shop_@email.ca
                    </div>
                </div>

                <div>
                    <span className="footer-title">Address</span>
                    <div className='flex gap-1 items-center'>
                        <FaAddressCard></FaAddressCard>
                        Address: 21/A, Dhanmondi, Dhaka, Bangladesh
                    </div>
                    Available ( 10.00PM to 5.00 PM)

                </div>
            </footer>
            <div className='text-center text-white bg-black opacity-85  pb-5'>
                <h2>Copyright © 2023 Yokoso Shop</h2>
            </div>
        </div>
    );
};

export default Footer;