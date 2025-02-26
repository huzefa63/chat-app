"use client"
import Link from "next/link"
import SignoutBtn from "@/app/_components/SignoutBtn";
import { signIn } from "@/lib/googleAuth";
import SignInBtn from "./SignInBtn";

function Navbar() {
    return (
      <nav className="h-20 flex items-center justify-between lg:justify-center relative">
        <h1 className="lg:text-xl flex gap-2 font-semibold lg:tracking-widest">
          Test My Small Chat Application by{" "}
          <SignInBtn />
        </h1>
        <SignoutBtn />
      </nav>
    );
}

export default Navbar
