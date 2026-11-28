
import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor profile could not be found.",
    };
  }

  return {
    title: doctor.name,
    description: `${doctor.name} is a specialist in ${doctor.specialty} with ${doctor.experience} of experience. Learn more about the doctor's background, expertise and book an appointment at MediCare.`,
  };
}

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
    <main className="min-h-screen bg-[#faf9f6] text-[#183d36]">
      {/* Header */}
      <header className="border-b border-[#e9ede8] bg-[#faf9f6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#315b49] text-lg font-semibold text-white">
              M
            </div>
            <span className="text-xl font-semibold tracking-tight">
              MediCare<span className="text-[#7fa18a">.</span>
            </span>
          </Link>

          <Link
            href="/doctors"
            className="rounded-full border border-[#dfe8e0] px-4 py-2.5 text-sm font-medium text-[#527566] transition hover:bg-[#edf4ef]"
          >
            ← Back to doctors
          </Link>
        </div>
      </header>

      {/* Profile */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 md:pt-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-[#8a9a90]">
          <Link href="/" className="transition hover:text-[#315b49]">
            Home
          </Link>
          <span>/</span>
          <Link href="/doctors" className="transition hover:text-[#315b49]">
            Doctors
          </Link>
          <span>/</span>
          <span className="text-[#527566]">{doctor.name}</span>
        </div>

        {/* Main profile card */}
        <div className="overflow-hidden rounded-[32px] border border-[#e6ebe7] bg-white shadow-[0_10px_40px_rgba(24,61,54,0.04)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Doctor image */}
            <div className="relative min-h-[380px] overflow-hidden bg-[#edf3ef] sm:min-h-[480px] lg:min-h-full">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#183d36]/45 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-sm font-medium text-[#315b49] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#79a486]" />
                  Verified specialist
                </span>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#edf4ef] px-4 py-2 text-xs font-semibold text-[#527566]">
                  {doctor.specialty}
                </span>

                <div className="flex items-center gap-1.5 text-sm">
                  <span className="text-amber-500">★</span>
                  <span className="font-semibold text-[#183d36]">
                    {doctor.rating}
                  </span>
                  <span className="text-[#8a9a90]">
                    ({doctor.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#86a08c]">
                Meet your doctor
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#183d36] sm:text-4xl lg:text-5xl">
                {doctor.name}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#71847a] sm:text-base sm:leading-8">
                {doctor.description}
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-[#f6f8f5] p-4 sm:p-5">
                  <p className="text-xs text-[#8a9a90]">Experience</p>
                  <p className="mt-2 text-lg font-semibold text-[#315b49]">
                    {doctor.experience}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f6f8f5] p-4 sm:p-5">
                  <p className="text-xs text-[#8a9a90]">Patient rating</p>
                  <p className="mt-2 text-lg font-semibold text-[#315b49]">
                    ★ {doctor.rating} / 5
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf4ef] text-[#668b73]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l4-4m-4 4-4-4m4 4V3m7 18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9a90]">Education</p>
                    <p className="mt-1 text-sm font-medium text-[#315b49]">
                      {doctor.education}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf4ef] text-[#668b73]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9a90]">Languages</p>
                    <p className="mt-1 text-sm font-medium text-[#315b49]">
                      {doctor.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#booking"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#315b49] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#244b38] sm:w-fit"
              >
                Book an appointment
                <span>→</span>
              </a>

              <p className="mt-3 text-xs text-[#9aaba0]">
                Simple, secure and convenient appointment scheduling.
              </p>
            </div>
          </div>
        </div>

        {/* Booking section */}
        <section id="booking" className="mx-auto mt-20 max-w-4xl scroll-mt-10">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86a08c]">
              Your next step
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#183d36] sm:text-4xl">
              Book your appointment
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#71847a]">
              Choose a convenient date and time. We make it easy to take the next
              step toward better health.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#e6ebe7] bg-white p-5 shadow-[0_10px_40px_rgba(24,61,54,0.04)] sm:p-8 md:p-10">
            {/* Booking intro */}
            <div className="mb-8 flex items-center gap-4 rounded-2xl bg-[#f5f8f5] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#315b49] text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.6}
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 3v4M8 3v4M3 11h18"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#315b49]">
                  Appointment with {doctor.name}
                </p>
                <p className="mt-1 text-xs text-[#82958a]">
                  {doctor.specialty}
                </p>
              </div>
            </div>

            <BookingForm doctorName={doctor.name} doctorId={doctor.id} />
          </div>

          {/* Disclaimer */}
          <div className="mt-8 flex gap-3 rounded-2xl border border-[#e8ece8] bg-[#f5f7f4] p-5">
            <span className="mt-0.5 text-[#91a493]">ⓘ</span>
            <p className="text-xs leading-6 text-[#829188]">
              This is a demonstration website. Doctor profiles, qualifications,
              ratings and appointment slots are fictional. No real medical
              appointment is booked.
            </p>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e7ece7] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <Link href="/" className="text-lg font-semibold text-[#183d36]">
            MediCare<span className="text-[#7fa18a">.</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-[#829188]">
            <Link href="/doctors" className="transition hover:text-[#315b49]">
              Our doctors
            </Link>
            <Link href="/#treatments" className="transition hover:text-[#315b49]">
              Treatments
            </Link>
            <Link href="/#contact" className="transition hover:text-[#315b49]">
              Contact
            </Link>
          </div>

          <p className="text-xs text-[#a0aaa2]">
            © 2026 MediCare. Demo project.
          </p>
        </div>
      </footer>
    </main>
  );
}
