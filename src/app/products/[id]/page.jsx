import getSingleProduct from "@/utils/getSingleProduct";
import Image from "next/image";

const ProductDetails = async ({ params: { id } }) => {
    const product = await getSingleProduct(id);
    const { image, name, price, description } = product;
    return (
        <div>
            <div className="bg-black border-white pt-24 text-white ">
                <div>
                    <div className="hero w-full md:w-9/12 mx-auto bg-black  rounded-xl mb-20">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="w-1/2">
                            <Image src={image} width={400} height={400} alt=""></Image>
                            </div>
                            <div className="w-1/2">
                                <h1 className="text-4xl font-bold">{name}</h1>
                                <p className="py-5 font-semibold text-xl">Price: {price}</p>
                                <p className="w-full text-justify">{description}</p>
                                <button className=" mt-6 btn btn-warning bg-[#D27D2D] text-white ">Add To Cart</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;