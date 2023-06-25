"use client"

import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import { usePathname, useRouter } from "next/navigation";
import useCart from "@/hooks/useCart";
import { useMemo } from "react";


const Navbar = () => {

    const { user, logout } = useAuth();
    const { uid, displayName, photoURL } = user || {};
    const { replace } = useRouter();
    const path = usePathname();

    const { cart } = useCart();


    const navItemData = uid ? afterLoginNavData : beforeLoginNavData;

    const handleLogout = async () => {
        await logout();
        const res = await fetch("/api/auth/logout", {
            method: "POST"
        });
        const data = await res.json();
        Swal.fire({
            title: 'Logout Successful',
            text: 'You have Logged Out successfully',
            icon: 'success',
            confirmButtonText: 'Continue'
        })
       replace('/login')
    }

    return (
        <div className="navbar bg-black text-white fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navItemData.map(({ path, title }) => (
                                <li key={path}>
                                    <Link href={path}>{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Yokoso Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navItemData.map(({ path, title }) => (
                            <li key={path}>
                                <Link href={path}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">


                <Link href={'/checkout'}>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cart?.length}</span>
                        </div>
                    </label></Link>

                {/* {
                    uid &&
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={user?.photoURL} alt="" width={50} height={50}  ></Image>
                        </div>
                    </label>
                } */}
                {
                    uid ?
                        <button onClick={handleLogout} className="btn btn-sm btn-warning text-white bg-[#D27D2D] ">Logout</button>
                        :
                        <Link href='/login'><button className="btn btn-sm btn-warning ml-2 text-white bg-[#D27D2D] ">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;