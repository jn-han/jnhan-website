"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Taskbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const navLink = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible fixed w-full top-5 z-10 scroll-smooth">
      <div className="flex w-full justify-center">
        <div className="flex flex-row text-center justify-evenly fixed bg-accent w-auto py-2 rounded-full text-white border-2 border-lightSlate">
          {navLink.map((item) => {
            const isActive = pathname.startsWith(item.link);
            return (
              <a
                className={` ${
                  isActive ? "bg-white" : "bg-red"
                } px-4 mx-3 py-1 rounded-full hover:text-green
                text-bold transition duration-500 ease-in-out`}
                key={item.name}
                href={item.link}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
