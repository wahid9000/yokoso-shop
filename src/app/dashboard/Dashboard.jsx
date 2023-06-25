"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { HiOutlineClipboardList, HiOutlineViewList } from "react-icons/hi";
const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-gray-800 text-white w-96 mt-12 min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 mt-5">
          <li className="flex items-center p-4 hover:bg-gray-700">
            <Link href="/adminProducts">

              <div className="flex items-center font-semibold text-xl"><HiOutlineViewList className="mr-2" />
                Add Products</div>

            </Link>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <Link href="/adminProducts">

              <div className="flex items-center font-semibold text-xl"><HiOutlineViewList className="mr-2" />
                Products List</div>

            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <main className="flex-grow p-4 bg-white mt-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;