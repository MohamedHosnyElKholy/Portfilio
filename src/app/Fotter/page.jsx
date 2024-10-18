"use client";
import React from "react";
import Link from "next/link";
import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full text-center z-20 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-xl font-semibold mb-2 sm:mb-0 text-black">Frontend Developer</span>
          <Footer.LinkGroup>
            <Footer.Link as={Link} href="/Home" active className="hover:underline">
              Home
            </Footer.Link>
            <Footer.Link as={Link} href="/about" className="hover:underline">
              About
            </Footer.Link>
            <Footer.Link as={Link} href="/project" className="hover:underline">
              Projects
            </Footer.Link>
            <Footer.Link as={Link} href="/contact" className="hover:underline">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="my-4" />
        <Footer.Copyright href="#" by="Portfolio Project" year={2024} />
      </div>
    </Footer>
  );
}
