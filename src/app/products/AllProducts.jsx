import getProducts from "@/utils/getProducts";
import SingleProduct from "./SingleProduct";



const AllProducts = async() => {
   const allProducts = await getProducts();
    return (
        <div className="mt-12">
            <div className="text-white text-center mb-16 text-4xl font-semibold">
                All Products
            </div>
            <div className=" grid grid-cols-3 gap-8">
                {
                    allProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
            
        </div>
    );
};

export default AllProducts;