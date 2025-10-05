"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-neutral-2 py-4 px-6 flex justify-between items-center">
      {theme === "dark" ? (
        <Image
          src="/images/logo-full-light.png"
          alt="Logo"
          width={145}
          height={39}
        />
      ) : (
        <Image src="/images/logo-full.png" alt="Logo" width={145} height={39} />
      )}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-neutral-3 dark:bg-neutral-5 hover:bg-binge-peach dark:hover:bg-light-brown transition-colors"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <Moon className="w-6 h-6 text-warm-black dark:text-neutral-2" />
        ) : (
          <Sun className="w-6 h-6 text-neutral-2" />
        )}
      </button>
    </header>
  );
};

export default Header;
