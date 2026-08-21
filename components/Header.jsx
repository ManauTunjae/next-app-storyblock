import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="mx-auto flex w-full justify-between  items-center px-4 py-4 sm:px-6 bg-gray-300 shadow-lg">
      <div className="flex justify-between items-center gap-5">
        <Image src="/logo.svg" alt="my logo" width={50} height={50} />
        <span className="px-3 py-2 rounded-2xl bg-zinc-100/60 text-black font-bold">
          Manau Tunjae
        </span>
      </div>
      <div className="flex jestify-between items-center gap-10 font-semibold text-md text-zinc-900 px-5 py-5">
        <Link className="hover:text-white transition-colors" href="/">
          Home
        </Link>
        <Link className="hover:text-white transition-colors" href="about">
          About
        </Link>
        <Link className="hover:text-white transition-colors" href="contact">
          Contact
        </Link>
        <Link className="hover:text-white transition-colors" href="jobs">
          Jobs
        </Link>
      </div>
    </nav>
  );
}
