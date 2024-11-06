import React from "react";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import MobileNavbar from "../../components/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Jefin", lastName: "John" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div><MobileNavbar /></div>
        </div>
      </div>
      {children}
    </main>
  );
}
