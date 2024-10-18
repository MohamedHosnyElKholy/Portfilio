'use client';
import React from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function Page() {
  return (
    <div className="container mx-auto px-4 z-20">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Frontend Developer
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/Home" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="/about">
            About
          </Navbar.Link>
          <Navbar.Link href="/project">Projects</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
