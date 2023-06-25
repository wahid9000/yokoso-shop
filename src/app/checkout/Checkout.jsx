"use client";


import useCart from "@/hooks/useCart";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const Checkout = () => {
    const { isLoading, mutate, cart } = useCart();
    const [cookies, setCookie] = useState(cart);

    const handleDelete = (id) => {
        const updatedCart = cart.filter((item) => item._id !== id);
        setCookie(updatedCart);
        toast.success("Item deleted successfully");
        mutate(); // Refresh the cart data
      };

    const handleCount = async (id, action) => {
        try {
            const res = await fetch(`/api/cart?id=${id}&action=${action}`, {
                method: "POST",
            });
            const result = await res.json();
            if (result.added) {
                toast.success("Cart Items Altered");
                mutate();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) {
        return <h1 className="text-center text-2xl font-medium">Loading...</h1>;
    }
    if (!isLoading && cart.length === 0) {
        return <h1>No product added to cart</h1>;
    }

    if (cart.length > 0) {
        return (
            <div className="overflow-x-auto w-8/12 mx-auto ">
                <table className="table table-lg">
                    <thead>
                        <tr className="text-center text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cookies.map(({ _id, name, quantity, price }, i) => (
                            <tr key={_id} className="text-center">
                                <th>{i + 1}</th>
                                <td>{name}</td>
                                <td>{price}</td>

                                <td className="flex items-center justify-center">
                                    <button
                                        onClick={() => handleCount(_id, "plus")}
                                        className="btn btn-warning bg-[#D27D2D] text-white mr-3"
                                    >
                                        <AiOutlinePlus />
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        onClick={() => handleCount(_id, "minus")}
                                        className="btn btn-info ml-3"
                                        disabled={quantity <= 1}
                                    >
                                        <AiOutlineMinus />
                                    </button>
                                </td>
                                <td><button onClick={() => handleDelete(_id)} className="btn-warning bg-red-500 btn"><FaTrash className="text-white text-xl"></FaTrash></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-warning text-white bg-[#D27D2D] my-3 ml-auto block mr-16">
                    Pay Now
                </button>
            </div>
        );
    }
};

export default Checkout;