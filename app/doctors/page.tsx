
import type { Metadata } from "next";
import Link from "next/link";
import DoctorDirectory from "./DoctorDirectory";

export const metadata: Metadata = {
  title: "Find a Doctor",
  description:
    "Meet experienced healthcare professionals at MediCare. Explore medical specialties, browse doctor profiles, and find the right healthcare professional for your needs.",
};

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    experience: "12 years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
    rating: "4.9",
    reviews: 124,
  },
  {
    id: "2",
    name: "Dr. James Anderson",
    specialty: "General Medicine",
    experience: "10 years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
    rating: "4.8",
    reviews: 98,
  },
  {
    id: "3",
    name: "Dr. Emily Carter",
    specialty: "Dermatology",
    experience: "8 years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
    rating: "4.9",
    reviews: 86,
  },
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#183d36]">
      {/* Header */}
      <header className="relative z-20 border-b border-[#eae9e2] bg-[#faf9f6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174e43] text-lg font-bold text-white">
              M
            </span>
            <span className="text-2xl font-bold tracking-tight">
              MediCare<span className="text-[#df805c">.</span>
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#dcded5] bg-white px-5 py-2.5 text-sm font-medium text-[#31584d] transition hover:border-[#174e43] hover:bg-[#f0f1e9]"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#e8dfc9]/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#dce9dc]/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5d9] bg-white px-4 py-2 text-xs font-semibold text-[#547166]">
              <span className="h-2 w-2 rounded-full bg-[#df805c]" />
              Your care, our priority
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Find the right doctor
              <br />
              <span className="text-[#d97855]">for you.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#748078] sm:text-lg">
              Meet experienced healthcare professionals who put your
              wellbeing first. Explore our medical team and find the
              support you need to feel your best.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#doctor-list"
                className="rounded-full bg-[#174e43] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#103d34] hover:shadow-md"
              >
                Explore our doctors ↓
              </Link>
              <Link
                href="/#how-it-works"
                className="rounded-full border border-[#dcded5] bg-white px-8 py-4 text-sm font-semibold text-[#31584d] transition hover:border-[#174e43]"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Directory */}
      <section
        id="doctor-list"
        className="px-6 pb-20 lg:px-10 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97855]">
                Our medical team
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Meet our specialists
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#788279]">
              Browse our doctors, explore their specialties and find
              the right healthcare professional for your needs.
            </p>
          </div>

          <DoctorDirectory doctors={doctors} />

          <p className="mt-10 text-center text-xs text-[#9aa198]">
            Demo profiles and ratings are fictional and for demonstration only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e5dc] bg-[#faf9f6] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/" className="text-xl font-bold">
            MediCare<span className="text-[#d97855">.</span>
          </Link>

          <div className="flex flex-wrap gap-6 text-sm text-[#788279]">
            <Link href="/#treatments" className="transition hover:text-[#174e43]">
              Treatments
            </Link>
            <Link
              href="/#how-it-works"
              className="transition hover:text-[#174e43]"
            >
              How it works
            </Link>
            <Link href="/#contact" className="transition hover:text-[#174e43]">
              Contact
            </Link>
          </div>

          <p className="text-xs text-[#9aa198]">
            © 2026 MediCare · Portfolio Demo
          </p>
        </div>
      </footer>
    </main>
  );
}
