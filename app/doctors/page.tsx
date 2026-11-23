
import Link from "next/link";
import DoctorDirectory from "./DoctorDirectory";

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
    <main className="min-h-screen bg-[#f8fbfa]">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-[#153b3b]">
            MediCare
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-teal-700"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Our Medical Team
          </span>

          <h1 className="mt-4 text-4xl font-bold text-[#153b3b] md:text-5xl">
            Find Your Doctor
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Connect with experienced healthcare professionals and find
            the right specialist for your needs.
          </p>
        </div>

        <DoctorDirectory doctors={doctors} />

        <p className="mt-10 text-center text-xs text-gray-400">
          Demo profiles and ratings are fictional and for demonstration only.
        </p>
      </section>

      <footer className="border-t border-gray-100 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 MediCare. All rights reserved.
      </footer>
    </main>
  );
}
