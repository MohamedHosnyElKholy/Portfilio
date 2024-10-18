'use client';
import React from 'react';
import Image from 'next/image';
import { Card } from "flowbite-react";

import img1 from '../../assests/1.PNG';
import img2 from '../../assests/2.PNG';
import img3 from '../../assests/3.PNG';
import img4 from '../../assests/4.PNG';
import img5 from '../../assests/5.PNG';
import img6 from '../../assests/6.PNG';
import img7 from '../../assests/7.PNG';
import img8 from '../../assests/8.PNG';
import img9 from '../../assests/9.PNG';
import img10 from '../../assests/10.PNG';
import img11 from '../../assests/11.PNG';

const projectsData = [
  {
    id: 1,
    description: "A meal planning application that helps you organize your meals.",
    image: img1,
    link: "https://mealify-indol.vercel.app/"
  },
  {
    id: 2,
    description: "A personal portfolio website showcasing skills and projects.",
    image: img2,
    link: "https://amin-five.vercel.app/"
  },
  {
    id: 3,
    description: "A developer portfolio site with projects and contact information.",
    image: img3,
    link: "https://dev-folio-ecru.vercel.app/"
  },
  {
    id: 4,
    description: "A technology blog with the latest news and articles.",
    image: img4,
    link: "https://tecnology-wine.vercel.app/"
  },
  {
    id: 5,
    description: "A bookmark manager to save and categorize your favorite sites.",
    image: img5,
    link: "https://bookmarker-eta.vercel.app/"
  },
  {
    id: 6,
    description: "A weather application providing real-time weather updates.",
    image: img6,
    link: "https://weather-app-apliction.vercel.app/"
  },
  {
    id: 7,
    description: "An interactive game platform with multiple fun games.",
    image: img7,
    link: "https://game-one-beige.vercel.app/"
  },
  {
    id: 8,
    description: "A recipe sharing application to discover and share recipes.",
    image: img8,
    link: "https://yummy-gamma-jade.vercel.app/"
  },
  {
    id: 9,
    description: "A dashboard application to visualize data and analytics.",
    image: img9,
    link: "https://dash-bord-65ph.vercel.app/"
  },
  {
    id: 10,
    description: "An e-commerce platform for online shopping.",
    image: img10,
    link: "https://full-ecomerce-scft.vercel.app/login"
  },
  {
    id: 11,
    description: "A web application for managing Islamic tasks and projects.",
    image: img11,
    link: "https://islam-42co.vercel.app/"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {projectsData.map((el) => (
          <div className="m-4 w-full sm:w-1/2 md:w-1/3" key={el.id}>
            <Card className="max-w-sm">
              <a href={el.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={el.image}
                  alt={el.description}
                  width={500}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.description}
                  </h5>
                </div>
              </a>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
