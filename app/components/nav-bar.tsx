"use client";

import Link from "next/link";
import React, {useState} from "react";
import MenuIcon from "@/app/icons/menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = [
    { name: "Home", path: "/" },
    { name: "Educations", path: "educations" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Research", path: "research" },
  ];

  const scrollToHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 md:mx-40 p-4">
        <Link href="/">
          <span className="text-2xl font-semibold whitespace-nowrap">Evan Luo</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center text-sm md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon/>
        </button>
        <div className="md:flex flex-wrap space-x-8 hidden">
          {pages.map(page => (
            <button key={page.path} onClick={() => scrollToHash(page.path)}>
              <span className="text-lg font-medium hover:text-blue-500">{page.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={`md:hidden ${menuOpen ? "" : "hidden"} flex flex-col items-start max-w-screen-xl mx-5 px-4 space-y-2`}>
        {pages.map(page => (
          <button key={page.path} onClick={() => scrollToHash(page.path)}>
            <span className="text-lg font-medium hover:text-blue-500">{page.name}</span>
          </button>
        ))}
      </div>
      <div className={`mt-2 md:hidden ${menuOpen ? "" : "hidden"} border border-white`}/>
    </nav>
  );
}

export default NavBar;