
"use client";

import { useState } from "react";

const morningSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
];

const afternoonSlots = [
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

const fullDaySlots = [...morningSlots, ...afternoonSlots];

const doctorSchedules: Record<
  string,
  {
    days: number[];
    slots: string[];
  }
> = {
  "1": {
    days: [2, 4],
    slots: morningSlots,
  },
  "2": {
    days: [1, 3, 5],
    slots: fullDaySlots,
  },
  "3": {
    days: [2, 5],
    slots: afternoonSlots,
  },
};

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function convertToMinutes(slot: string) {
  const [time, period] = slot.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  let convertedHours = hours;

  if (period === "PM" && hours !== 12) {
    convertedHours += 12;
  }

  if (period === "AM" && hours === 12) {
    convertedHours = 0;
  }

  return convertedHours * 60 + minutes;
}

function formatDate(date: string) {
  if (!date) return "";

  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BookingForm({
  doctorName,
  doctorId,
}: {
  doctorName: string;
  doctorId: string;
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const today = getToday();
  const schedule = doctorSchedules[doctorId];

  const selectedWeekday = date
    ? new Date(`${date}T12:00:00`).getDay()
    : null;

  const isAvailableDay =
    selectedWeekday !== null &&
    schedule?.days.includes(selectedWeekday);

  const availableSlots = isAvailableDay ? schedule.slots : [];

  function isPastSlot(slot: string) {
    if (date !== today) return false;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    return convertToMinutes(slot) <= currentMinutes;
  }

  function handleBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!date || !time || !isAvailableDay) return;

    if (isPastSlot(time)) {
      setTime("");
      return;
    }

    setConfirmed(true);
  }

  function resetBooking() {
    setConfirmed(false);
    setDate("");
    setTime("");
    setName("");
    setEmail("");
  }

  /* Confirmation screen */
  if (confirmed) {
    return (
      <div className="overflow-hidden rounded-[28px] border border-[#dce9df] bg-white shadow-sm">
        <div className="bg-[#edf5ef] px-6 py-10 text-center sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#315b49] text-3xl text-white shadow-sm">
            ✓
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#789681]">
            Booking complete
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#183d36]">
            Appointment confirmed!
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#70847a]">
            Thank you, {name}. Your demo appointment has been successfully
            selected.
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <div className="rounded-2xl border border-[#e6ebe7] bg-[#fafbf9] p-5 sm:p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#82978a]">
              Appointment details
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf4ef] text-[#668b73]">
                  <svg
                    className="h-5 w-5"
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
                  <p className="text-xs text-[#8a9a90]">Date</p>
                  <p className="mt-1 text-sm font-semibold text-[#315b49]">
                    {formatDate(date)}
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
                  <p className="text-xs text-[#8a9a90]">Time</p>
                  <p className="mt-1 text-sm font-semibold text-[#315b49]">
                    {time}
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
                    <circle cx="12" cy="8" r="4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 21v-2a7 7 0 0 1 14 0v2"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-[#8a9a90]">Doctor</p>
                  <p className="mt-1 text-sm font-semibold text-[#315b49]">
                    {doctorName}
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
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3 7 9 6 9-6"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[#8a9a90]">Email</p>
                  <p className="mt-1 break-all text-sm font-semibold text-[#315b49]">
                    {email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-xs leading-6 text-amber-800">
              This is a demo confirmation only. No real appointment has been
              booked, and no confirmation email has been sent.
            </p>
          </div>

          <button
            type="button"
            onClick={resetBooking}
            className="mt-6 w-full rounded-2xl bg-[#315b49] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#244b38]"
          >
            Book another appointment
          </button>
        </div>
      </div>
    );
  }

  /* Booking form */
  return (
    <form
      onSubmit={handleBooking}
      className="rounded-[28px] border border-[#e6ebe7] bg-white p-5 shadow-[0_8px_30px_rgba(24,61,54,0.035)] sm:p-8"
    >
      {/* Form header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86a08c]">
          Appointment details
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#183d36]">
          Your information
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#829188]">
          Complete the details below to select your preferred appointment.
        </p>
      </div>

      {/* Selected doctor */}
      <div className="mb-8 flex items-center gap-4 rounded-2xl bg-[#f5f8f5] p-4 sm:p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#315b49] text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
          >
            <circle cx="12" cy="8" r="4" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 21v-2a7 7 0 0 1 14 0v2"
            />
          </svg>
        </div>

        <div className="min-w-0">
          <p className="text-xs text-[#82958a]">Appointment with</p>
          <p className="mt-1 font-semibold text-[#315b49]">{doctorName}</p>
        </div>

        <div className="ml-auto hidden rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#789681] sm:block">
          Demo visit
        </div>
      </div>

      {/* Date selection */}
      <div>
        <label
          htmlFor="appointment-date"
          className="mb-2 block text-sm font-semibold text-[#315b49]"
        >
          Select a date
        </label>

        <input
          id="appointment-date"
          type="date"
          min={today}
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
            setTime("");
          }}
          required
          className="w-full rounded-2xl border border-[#e3eae4] bg-[#fafbf9] px-4 py-4 text-sm text-[#315b49] transition focus:border-[#6e9b86] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#edf4ef]"
        />

        <p className="mt-2 text-xs leading-5 text-[#94a198]">
          Choose a date to see the doctor's available appointment times.
        </p>
      </div>

      {/* Time slots */}
      <div className="mt-8">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <label className="block text-sm font-semibold text-[#315b49]">
            Available time slots
          </label>

          {time && (
            <span className="rounded-full bg-[#edf4ef] px-3 py-1 text-xs font-medium text-[#527566]">
              Selected: {time}
            </span>
          )}
        </div>

        {!date ? (
          <div className="flex gap-3 rounded-2xl border border-dashed border-[#dfe8e1] bg-[#fafbf9] p-5">
            <span className="text-[#86a08c]">◷</span>
            <p className="text-sm leading-6 text-[#8a9a90]">
              Please select a date first to view available time slots.
            </p>
          </div>
        ) : !isAvailableDay ? (
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              No appointments available on this day.
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-700">
              This doctor is available on{" "}
              {schedule.days.map((day) => weekdayNames[day]).join(", ")}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {availableSlots.map((slot) => {
              const past = isPastSlot(slot);
              const selected = time === slot;

              return (
                <button
                  key={slot}
                  type="button"
                  disabled={past}
                  onClick={() => setTime(slot)}
                  className={`relative rounded-2xl border px-3 py-4 text-sm font-medium transition-all duration-200 ${
                    selected
                      ? "border-[#315b49] bg-[#315b49] text-white shadow-md shadow-[#315b49]/15"
                      : "border-[#e3eae4] bg-[#fafbf9] text-[#527566] hover:border-[#8eb49a] hover:bg-[#edf4ef]"
                  } ${
                    past
                      ? "cursor-not-allowed opacity-30"
                      : "cursor-pointer"
                  }`}
                >
                  {slot}

                  {selected && (
                    <span className="absolute right-2 top-2 text-xs text-white/80">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {date === today && isAvailableDay && (
          <p className="mt-3 text-xs text-[#94a198]">
            Earlier time slots today are disabled.
          </p>
        )}
      </div>

      {/* Personal details */}
      <div className="mt-8 border-t border-[#edf0ed] pt-8">
        <p className="mb-5 text-sm font-semibold text-[#315b49]">
          Your contact information
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="patient-name"
              className="mb-2 block text-sm font-medium text-[#527566]"
            >
              Full name
            </label>

            <input
              id="patient-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              autoComplete="name"
              placeholder="Your full name"
              className="w-full rounded-2xl border border-[#e3eae4] bg-[#fafbf9] px-4 py-3.5 text-sm text-[#315b49] placeholder:text-[#a0afa5] transition focus:border-[#6e9b86] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#edf4ef]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="patient-email"
              className="mb-2 block text-sm font-medium text-[#527566]"
            >
              Email address
            </label>

            <input
              id="patient-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-[#e3eae4] bg-[#fafbf9] px-4 py-3.5 text-sm text-[#315b49] placeholder:text-[#a0afa5] transition focus:border-[#6e9b86] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#edf4ef]"
            />
          </div>
        </div>
      </div>

      {/* Booking button */}
      <button
        type="submit"
        disabled={!date || !time || !isAvailableDay}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#315b49] px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#244b38] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Confirm demo appointment
        <span>→</span>
      </button>

      <div className="mt-4 flex items-start justify-center gap-2">
        <span className="mt-0.5 text-[#94a198]">ⓘ</span>
        <p className="max-w-sm text-center text-xs leading-5 text-[#94a198]">
          Demo booking only. No real appointment will be created or confirmed.
        </p>
      </div>
    </form>
  );
}
