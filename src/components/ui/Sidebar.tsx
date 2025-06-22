// @ts-nocheck

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar({
  onFilter,
}: {
  onFilter: (filters: {
    treatment?: string;
    doctor?: string;
    patient?: string;
  }) => void;
}) {
  const [filters, setFilters] = useState({
    treatment: "",
    doctor: "",
    patient: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    setFilters(updated);
    onFilter(updated);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-100 dark:bg-gray-800 p-4 w-full md:w-64 shadow-md rounded-md md:rounded-none transition-colors"
    >
      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
          Filter by Treatment
        </label>
        <input
          name="treatment"
          placeholder="e.g. Dental"
          value={filters.treatment}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
          Filter by Doctor
        </label>
        <input
          name="doctor"
          placeholder="e.g. Dr. Ahmed"
          value={filters.doctor}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
          Filter by Patient
        </label>
        <input
          name="patient"
          placeholder="e.g. Ali Raza"
          value={filters.patient}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded shadow-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
      </div>
    </motion.aside>
  );
}
