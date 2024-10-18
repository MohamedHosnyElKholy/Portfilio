"use client";
import React from "react";
import Link from "next/link";
import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="bg-stone-950 text-white z-20 rounded-none">
      <div className="w-full text-center z-20 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-xl font-semibold mb-2 sm:mb-0 text-white">Frontend Developer</span>
          <Footer.LinkGroup>
            <Footer.Link as={Link} href="/Home" active className="hover:underline text-white">
              Home
            </Footer.Link>
            <Footer.Link as={Link} href="/about" className="hover:underline text-white">
              About
            </Footer.Link>
            <Footer.Link as={Link} href="/project" className="hover:underline text-white">
              Projects
            </Footer.Link>
            <Footer.Link as={Link} href="/contact" className="hover:underline text-white">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="my-4" />
        <Footer.Copyright className="text-white" href="#" by="Portfolio Project" year={2024} />
      </div>
    </Footer>
  );
}
