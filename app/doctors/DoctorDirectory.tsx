
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: string;
  reviews: number;
};

export default function DoctorDirectory({
  doctors,
}: {
  doctors: Doctor[];
}) {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");

  const specialties = [
    "All Specialties",
    ...Array.from(new Set(doctors.map((doctor) => doctor.specialty))),
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase());

      const matchesSpecialty =
        specialty === "All Specialties" ||
        doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [doctors, search, specialty]);

  const clearFilters = () => {
    setSearch("");
    setSpecialty("All Specialties");
  };

  return (
    <>
      {/* Search & Filters */}
      <section className="mb-10">
        <div className="rounded-3xl border border-[#e6ebe7] bg-white p-5 shadow-[0_8px_30px_rgba(24,61,54,0.04)] sm:p-7">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a9384]">
              Find your specialist
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#183d36]">
              Search our medical team
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Search input */}
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8aa297]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m16 16 4 4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Doctor name or specialty..."
                className="w-full rounded-2xl border border-[#e5ebe6] bg-[#fafbf9] py-4 pl-12 pr-4 text-sm text-[#183d36] transition placeholder:text-[#9aaba0] focus:border-[#6e9b86] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#edf4ef]"
              />
            </div>

            {/* Specialty filter */}
            <div className="relative">
              <select
                value={specialty}
                onChange={(event) => setSpecialty(event.target.value)}
                className="w-full appearance-none rounded-2xl border border-[#e5ebe6] bg-[#fafbf9] px-4 py-4 text-sm text-[#183d36] transition focus:border-[#6e9b86] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#edf4ef]"
              >
                {specialties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8aa297]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Results header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#183d36]">
            {filteredDoctors.length}{" "}
            {filteredDoctors.length === 1 ? "doctor" : "doctors"} found
          </p>
          <p className="mt-1 text-xs text-[#82958a]">
            Browse our specialists and find the right care for you.
          </p>
        </div>

        {(search || specialty !== "All Specialties") && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 rounded-full border border-[#dfe9e2] px-4 py-2 text-sm font-medium text-[#527566] transition hover:border-[#b9d0c0] hover:bg-[#f0f6f1] hover:text-[#183d36]"
          >
            <span>×</span>
            Clear filters
          </button>
        )}
      </div>

      {/* Doctor cards */}
      {filteredDoctors.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <article
              key={doctor.id}
              className="group overflow-hidden rounded-[28px] border border-[#e6ebe7] bg-white shadow-[0_5px_25px_rgba(24,61,54,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(24,61,54,0.09)]"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-[#edf3ef]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

                {/* Specialty badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#315b49] shadow-sm backdrop-blur-md">
                    {doctor.specialty}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <span className="text-sm text-amber-500">★</span>
                  <span className="text-xs font-semibold text-[#183d36]">
                    {doctor.rating}
                  </span>
                  <span className="text-xs text-[#84958a]">
                    ({doctor.reviews})
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#183d36] transition group-hover:text-[#527c65]">
                  {doctor.name}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#81948a]">
                  <svg
                    className="h-4 w-4 shrink-0 text-[#82a18c]"
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
                  <span>{doctor.experience} of experience</span>
                </div>

                <div className="my-5 border-t border-[#edf0ed]" />

                <Link
                  href={`/doctors/${doctor.id}`}
                  className="flex w-full items-center justify-between rounded-xl bg-[#edf4ef] px-5 py-3.5 text-sm font-semibold text-[#315b49] transition-all duration-200 hover:bg-[#315b49] hover:text-white"
                >
                  View profile
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="rounded-[28px] border border-[#e6ebe7] bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf4ef]">
            <svg
              className="h-7 w-7 text-[#6e927d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m16 16 4 4" />
            </svg>
          </div>

          <h3 className="mt-5 text-xl font-semibold text-[#183d36]">
            No doctors found
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#82958a]">
            We couldn't find a specialist matching your search. Try another name or
            choose a different specialty.
          </p>

          <button
            onClick={clearFilters}
            className="mt-6 rounded-xl bg-[#315b49] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244b38]"
          >
            Reset search
          </button>
        </div>
      )}
    </>
  );
}
