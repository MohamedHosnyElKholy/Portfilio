"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function MyNavbar() {
  return (
    <Navbar fluid rounded className="z-20">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
        <Navbar.Link href="/project">Project</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
