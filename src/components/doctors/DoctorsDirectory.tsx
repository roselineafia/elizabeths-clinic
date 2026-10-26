"use client";

import { useMemo, useState } from "react";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { doctorFilters, type Doctor } from "@/data/doctors";

export function DoctorsDirectory({ doctors }: { doctors: Doctor[] }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return doctors.filter((doctor) => {
      const matchesFilter = filter === "all" || doctor.filter === filter;
      const haystack = `${doctor.name} ${doctor.specialty} ${doctor.summary}`.toLowerCase();
      const matchesQuery = needle.length === 0 || haystack.includes(needle);
      return matchesFilter && matchesQuery;
    });
  }, [doctors, filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter doctors by specialty">
          {doctorFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                filter === item.id ? "bg-brand text-white" : "bg-white text-ink ring-1 ring-line"
              }`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <label className="block text-sm font-semibold text-ink">
          Filter by words
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-line px-3 py-2.5 text-sm font-normal lg:w-72"
            placeholder="Name or specialty"
          />
        </label>
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 rounded-3xl border border-dashed border-line bg-white px-5 py-8 text-sm text-muted">
          No doctors match that search. Clear the words or choose another specialty.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}
