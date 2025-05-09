"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  
  return (
    <button
      className={`px-4 py-2 rounded-full ${resolvedTheme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} transition-colors duration-300`}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (<MoonIcon className="w-5 h-5" />) : (<SunIcon className="w-5 h-5" />)}
    </button>
  );
}