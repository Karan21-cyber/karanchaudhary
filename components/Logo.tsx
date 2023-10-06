// "use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";

function Logo() {
  const router = useRouter();
  return (
    <div
      className="logo-wrapper flex gap-2 items-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src={"/logo.png"}
        alt="logo"
        width={50}
        height={50}
        className="bg-gray-300 rounded-full"
      />
      <div className="logo-text hidden lg:block font-bold text-xl leading-5">
        <h1 className="text-gray-300">Karan</h1>
        <h1 className="text-blue-500">Chaudhary</h1>
      </div>
    </div>
  );
}

export default Logo;
