
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
    days: [2, 4], // Tuesday, Thursday
    slots: morningSlots,
  },
  "2": {
    days: [1, 3, 5], // Monday, Wednesday, Friday
    slots: fullDaySlots,
  },
  "3": {
    days: [2, 5], // Tuesday, Friday
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

  if (confirmed) {
    return (
      <div className="rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center">
        <div className="text-4xl">✓</div>

        <h2 className="mt-4 text-2xl font-bold text-[#153b3b]">
          Appointment Confirmed!
        </h2>

        <p className="mt-3 text-gray-600">
          Thank you, {name}. Your demo appointment with {doctorName}
          has been selected.
        </p>

        <div className="mt-5 rounded-xl bg-white p-4 text-sm text-gray-700">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p className="mt-2">
            <strong>Time:</strong> {time}
          </p>
          <p className="mt-2">
            <strong>Doctor:</strong> {doctorName}
          </p>
          <p className="mt-2">
            <strong>Email:</strong> {email}
          </p>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          This is a demonstration only. No real appointment has been booked.
        </p>

        <button
          type="button"
          onClick={() => {
            setConfirmed(false);
            setDate("");
            setTime("");
            setName("");
            setEmail("");
          }}
          className="mt-6 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleBooking}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#153b3b]">
        Book an Appointment
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Select your preferred date and time with {doctorName}.
      </p>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Select Date
        </label>

        <input
          type="date"
          min={today}
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
            setTime("");
          }}
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-700 outline-none focus:border-teal-600"
        />
      </div>

      <div className="mt-6">
        <label className="mb-3 block text-sm font-semibold text-gray-700">
          Available Time Slots
        </label>

        {!date ? (
          <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-400">
            Please select a date first.
          </p>
        ) : !isAvailableDay ? (
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="font-semibold text-amber-800">
              No appointments available on this day.
            </p>
            <p className="mt-1 text-sm text-amber-700">
              {doctorName} is available on:{" "}
              {schedule.days.map((day) => weekdayNames[day]).join(", ")}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {availableSlots.map((slot) => {
              const past = isPastSlot(slot);

              return (
                <button
                  key={slot}
                  type="button"
                  disabled={past}
                  onClick={() => setTime(slot)}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    time === slot
                      ? "border-teal-700 bg-teal-700 text-white"
                      : "border-gray-200 text-gray-700 hover:border-teal-600"
                  } disabled:cursor-not-allowed disabled:opacity-40`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        )}

        {date === today && isAvailableDay && (
          <p className="mt-3 text-xs text-gray-400">
            Past time slots are unavailable.
          </p>
        )}
      </div>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-teal-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-teal-600"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!date || !time || !isAvailableDay}
        className="mt-8 w-full rounded-xl bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Confirm Demo Appointment
      </button>

      <p className="mt-4 text-center text-xs text-gray-400">
        Demo booking only. No real appointment will be created.
      </p>
    </form>
  );
}
