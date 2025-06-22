// @ts-nocheck

"use client";
import { useTheme } from "@/context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Clinic Scheduler</h1>
      <Button
        onClick={toggleTheme}
        variant="ghost"
        className="text-white hover:bg-indigo-500 rounded-full p-2"
      >
        {theme === "light" ? <FaMoon /> : <CiSun />}
      </Button>
    </header>
  );
}
