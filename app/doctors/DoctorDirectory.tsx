
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

  return (
    <>
      <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by doctor name or specialty..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-teal-600"
          />

          <select
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-teal-600"
          >
            {specialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {filteredDoctors.length} doctors found
        </p>

        <button
          onClick={() => {
            setSearch("");
            setSpecialty("All Specialties");
          }}
          className="text-sm font-semibold text-teal-700 hover:text-teal-900"
        >
          Clear filters
        </button>
      </div>

      {filteredDoctors.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <article
              key={doctor.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  {doctor.specialty}
                </span>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  {doctor.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {doctor.experience} experience
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  ★ {doctor.rating} ({doctor.reviews} reviews)
                </p>

                <Link
                  href={`/doctors/${doctor.id}`}
                  className="mt-5 inline-block rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  View Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-gray-50 py-16 text-center">
          <h2 className="text-xl font-bold text-gray-800">
            No doctors found
          </h2>
          <p className="mt-2 text-gray-500">
            Try another name or specialty.
          </p>
        </div>
      )}
    </>
  );
}
