
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "../BookingForm";

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
    education: "Harvard Medical School",
    languages: ["English", "German"],
    description:
      "Dr. Sarah Mitchell is a cardiologist focused on preventive heart care, cardiovascular health, and personalized treatment plans. She believes in building strong relationships with patients through clear communication and compassionate care.",
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
    education: "University of Oxford",
    languages: ["English", "German"],
    description:
      "Dr. James Anderson provides comprehensive primary healthcare for patients of all ages. His approach combines preventive medicine, accurate diagnosis, and personalized treatment.",
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
    education: "Stanford University School of Medicine",
    languages: ["English", "French"],
    description:
      "Dr. Emily Carter specializes in skin health, dermatological conditions, and personalized skincare. She is passionate about helping patients feel confident and comfortable in their skin.",
  },
];

export default async function DoctorProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8fbfa]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-[#153b3b]"
          >
            MediCare
          </Link>

          <Link
            href="/doctors"
            className="text-sm font-medium text-gray-600 transition hover:text-teal-700"
          >
            Back to Doctors
          </Link>
        </div>
      </header>

      {/* Doctor Profile */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          {/* Doctor Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-[420px] w-full object-cover"
            />
          </div>

          {/* Doctor Information */}
          <div>
            <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
              {doctor.specialty}
            </span>

            <h1 className="mt-6 text-3xl font-bold text-[#153b3b] md:text-4xl">
              {doctor.name}
            </h1>

            <p className="mt-4 text-gray-600">
              {doctor.description}
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-400">
                  Experience
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {doctor.experience}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Education
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {doctor.education}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Languages
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {doctor.languages.join(", ")}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Patient Rating
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  ★ {doctor.rating} ({doctor.reviews} reviews)
                </p>
              </div>
            </div>

            <a
              href="#booking"
              className="mt-8 inline-block rounded-xl bg-teal-700 px-7 py-3 font-semibold text-white transition hover:bg-teal-800"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Booking Section */}
        <section id="booking" className="mx-auto mt-16 max-w-3xl">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              Schedule Your Visit
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#153b3b]">
              Book Your Appointment
            </h2>

            <p className="mt-3 text-gray-600">
              Choose a convenient date and time to schedule your visit.
            </p>
          </div>

          <BookingForm
  doctorName={doctor.name}
  doctorId={doctor.id}/>
        </section>

        <p className="mt-10 text-center text-xs text-gray-400">
          Demo profiles, qualifications, ratings and appointment slots
          are fictional and for demonstration only. No real medical
          appointment is booked.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 MediCare. All rights reserved.
      </footer>
    </main>
  );
}
