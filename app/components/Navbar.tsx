import Link from "next/link";
import React, { FC } from "react";

export default function Navbar() {
  return (
    <div className="w-full h-10 bg-gray-800">
      <div className="md:w-[95vw] m-auto flex items-center justify-between text-justify mt-2">
        <div className="flex items-center justify-center">
          <Link href="/">
            <h1 className="text-yellow-200 text-sm">Logo</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-5 text-yellow-200">
            <li>LINK</li>
            <li>LINK</li>
            <li>Carrito</li>
            <li>User</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
