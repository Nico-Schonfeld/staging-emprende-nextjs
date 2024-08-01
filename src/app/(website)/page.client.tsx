"use client";
import React from "react";
import { Link } from "next-view-transitions";
import { AlarmClock, Heart } from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HomePage = () => {
  const categorys = [
    { title: "Comida", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    {
      title: "Limpieza",
      href: "/",
      icon: <AlarmClock className="w-10 h-10" />,
    },
    {
      title: "Limpieza",
      href: "/",
      icon: <AlarmClock className="w-10 h-10" />,
    },
    {
      title: "Limpieza",
      href: "/",
      icon: <AlarmClock className="w-10 h-10" />,
    },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Comida", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    {
      title: "Limpieza",
      href: "/",
      icon: <AlarmClock className="w-10 h-10" />,
    },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Comida", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    {
      title: "Limpieza",
      href: "/",
      icon: <AlarmClock className="w-10 h-10" />,
    },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Comida", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
    {
      title: "Limpieza",
      href: "/",
      icon: <AlarmClock className="w-10 h-10" />,
    },
    { title: "Ropa", href: "/", icon: <AlarmClock className="w-10 h-10" /> },
  ];

  return (
    <main className="w-full h-full">
      <div className="w-full h-full container mx-auto px-2 py-5">
        <ul className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {categorys.map((item, index) => (
            <li
              key={index}
              className="relative border p-1 transition-all rounded-xl "
            >
              <HoverCard>
                <HoverCardTrigger>
                  {" "}
                  <div className="relative group overflow-hidden rounded-lg">
                    <Link href={item.href} className="absolute inset-0 z-10">
                      <span className="sr-only">View {item.title}</span>
                    </Link>
                    <Image
                      src="/assets/photos/placeholderImage.svg"
                      overrideSrc="/assets/photos/placeholderImage.svg"
                      width={200}
                      height={200}
                      alt="Image"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Category 2</h3>
                </div> */}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2 text-sm">
                  {item.title}
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default HomePage;
