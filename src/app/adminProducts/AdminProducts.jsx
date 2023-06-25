
import getProducts from "@/utils/getProducts";
import Image from "next/image";

const AdminProducts = async () => {
    const products = await getProducts();
    return (
        <div className="mt-3">
   
           <h2 className="text-3xl font-semibold mb-5 text-black">Manage Products: {products?.length}</h2>
         

            <div className="divider"></div>

            <div>
                <div className="mt-10">
                    <div className="overflow-x-auto w-11/12 mx-auto">
                        <table className="table">
                            <thead className="text-lg text-white">
                                <tr>
                                    <th className="bg-black">#</th>
                                    <th className="bg-black">Product Image</th>
                                    <th className="bg-black">Product Name</th>
                                    <th className="bg-black">Product Price</th>
                                    <th className="bg-black">Product Description</th>
                                    
                                </tr>
                            </thead>
                            <tbody className=" font-secondary text-black">
                                {
                                    products.map((product, index) =>
                                        <tr key={product._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <Image src={product.image} alt="" width={100} height={100}></Image>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            
                                        </tr>)
                                }
                            </tbody>


                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminProducts;