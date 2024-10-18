"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function MyNavbar() {
  const pathname = usePathname();

  return (
    <Navbar fluid className="z-20 bg-black">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" className={`text-white ${pathname === "/" ? "active" : ""}`}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" className={`text-white ${pathname === "/about" ? "active" : ""}`}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact" className={`text-white ${pathname === "/contact" ? "active" : ""}`}>
          Contact
        </Navbar.Link>
        <Navbar.Link as={Link} href="/project" className={`text-white ${pathname === "/project" ? "active" : ""}`}>
          Project
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
