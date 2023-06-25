
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
    const {image, price, name, _id} = product;
    return (
        <div>
            <div className="card rounded-none w-80 mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src={image} alt="" width={300} height={300}></Image>
                </figure>
                <div className="card-body ml-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <Link href={`/products/${_id}`}><button className="btn btn-warning bg-[#D27D2D] text-white ">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;