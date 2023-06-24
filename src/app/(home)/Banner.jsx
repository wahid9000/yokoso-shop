import Image from 'next/image';
import image from '@/assets/banner-image.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-bg h-[700px] text-white">
            <div className='flex justify-evenly items-center w-11/12 mx-auto pt-20 gap-20'>
                <div>
                    <h2 className='text-7xl font-semibold'>Buy Your Desired Watch</h2>
                    <p className='mt-5'>Yokoso is a marketplace where you can buy any kind of watches easily. Explore Now to get the best experience.</p>
                    <button className='btn btn-warning mt-5 text-white bg-[#D27D2D]'>Explore Now</button>
                </div>
                <div>
                    <Image src={image} width={950} height={950} alt='watch'></Image>
                </div>
            </div>

        </div>

    );
};

export default Banner;