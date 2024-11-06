"use client";
import Link from "next/link"; // Import from "next/link"
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "../../constants";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }:SiderbarProps) => {
  const pathname = usePathname() || ""; // Fallback to empty string to avoid SSR issues

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            priority // Add priority for faster loading
            className="w-6 h-6 max-xl:w-4 max-xl:h-4" // Corrected classes for size
          />
          <h1 className="sidebar-logo">FinPal</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(item.route);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              href={item.route}
              key={item.label}
            >
              <div className="relative w-6 h-6">
                {" "}
                {/* Defined dimensions for `fill` */}
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      <footer>FOOTER</footer>
    </section>
  );
};

export default Sidebar;
