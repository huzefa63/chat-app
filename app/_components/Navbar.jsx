import Link from "next/link"
import SignoutBtn from "@/app/_components/SignoutBtn";

function Navbar() {
    return (
      <nav className="h-20 flex items-center justify-between lg:justify-center relative">
        <h1 className="lg:text-xl font-semibold lg:tracking-widest">
          Test My Small Chat Application by{" "}
          <Link className="text-blue-500" href="/api/auth/signin">signing in</Link>
        </h1>
        <SignoutBtn />
      </nav>
    );
}

export default Navbar
