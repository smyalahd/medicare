
import Link from "next/link";

export default function MobileMenu() {
  return (
    <details className="relative md:hidden">
      <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-xl border border-[#dce9e4] bg-white text-2xl text-[#153b3b]">
        ☰
      </summary>

      <nav className="absolute right-0 top-14 z-[100] w-64 rounded-2xl border border-[#e3ece8] bg-white p-6 shadow-xl">
        <div className="flex flex-col gap-6 text-base font-semibold text-[#597371]">
          <Link href="/">Home</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>

          <Link
            href="/doctors"
            className="rounded-full bg-[#087f73] px-5 py-3 text-center text-white"
          >
            Find a Doctor →
          </Link>
        </div>
      </nav>
    </details>
  );
}
