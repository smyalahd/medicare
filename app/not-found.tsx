
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6 py-16 text-[#183d36]">
      <div className="w-full max-w-xl text-center">
        {/* Logo */}
        <Link href="/" className="mb-12 inline-flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174e43] text-lg font-bold text-white">
            M
          </span>
          <span className="text-2xl font-bold tracking-tight">
            MediCare<span className="text-[#df805c]">.</span>
          </span>
        </Link>

        {/* 404 */}
        <div className="relative">
          <p className="text-[120px] font-bold leading-none tracking-tighter text-[#e4ebe3] sm:text-[160px]">
            404
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-[#dce8dc] bg-[#faf9f6] px-5 py-2 text-sm font-semibold tracking-[0.2em] text-[#668075]">
              PAGE NOT FOUND
            </span>
          </div>
        </div>

        {/* Message */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Oops! We can&apos;t find that page.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#788279]">
          The page you&apos;re looking for may have been moved, deleted, or
          doesn&apos;t exist. But don&apos;t worry, we&apos;ll help you find
          your way back.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#174e43] px-7 py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#103d34] hover:shadow-md"
        >
          ← Back to homepage
        </Link>

        {/* Helpful links */}
        <div className="mt-12 border-t border-[#e5e8df] pt-7">
          <p className="text-sm text-[#929b92]">Maybe you&apos;re looking for:</p>

          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-[#58736a]">
            <Link href="/doctors" className="transition hover:text-[#174e43]">
              Find a doctor
            </Link>
            <Link href="/#services" className="transition hover:text-[#174e43]">
              Our services
            </Link>
            <Link href="/#contact" className="transition hover:text-[#174e43]">
              Contact us
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-[#a0a69e]">
          © MediCare · Your health, our priority.
        </p>
      </div>
    </main>
  );
}
