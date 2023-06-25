"use client";

import Image from 'next/image';
import image from '@/assets/banner-image.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-bg h-[700px] text-white">
            <div className='md:flex justify-evenly items-center w-11/12 mx-auto pt-20 gap-20'>
                <div>
                    <h2 className='text-7xl font-semibold text-center md:text-left'>Buy Your Desired Watch</h2>
                    <p className='mt-5 text-center md:text-left'>Yokoso is a marketplace where you can buy any kind of watches easily. Explore Now to get the best experience...</p>
                    <div className='text-center md:text-left'>
                        <button className='btn btn-warning mt-5 text-white bg-[#D27D2D]'>Explore Now</button>
                    </div>
                </div>
                <div>
                    <Image src={image} alt="" width={950} height={950} ></Image>
                </div>
            </div>

        </div>

    );
};

export default Banner;