import getSingleProduct from "@/utils/getSingleProduct";
import Image from "next/image";
import AddToCartBtn from "./AddToCart";

const ProductDetails = async ({ params: { id } }) => {
    const product = await getSingleProduct(id);
    const { image, name, price, description, _id } = product;
    return (
        <div>
            <div className="bg-black border-white pt-24 text-white ">
                <div>
                    <div className="hero w-full md:w-9/12 mx-auto bg-black  rounded-xl mb-20">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="w-1/2">
                            <Image src={image} alt="" width={400} height={400}></Image>
                            </div>
                            <div className="w-1/2">
                                <h1 className="text-4xl font-bold">{name}</h1>
                                <p className="py-5 font-semibold text-xl">Price: {price}</p>
                                <p className="w-full text-justify">{description}</p>
                                <AddToCartBtn id={_id}></AddToCartBtn>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;