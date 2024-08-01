import React from "react";
import NavbarContainer from "@/components/Navbar/NavbarContainer";
import { Metadata } from "next";
import FooterContainer from "@/components/Footer/FooterContainer";

export const metadata: Metadata = {
  title: "Template Nextjs",
  description:
    "Esta plantilla es ideal para desarrolladores que desean crear una aplicación web con Next.js.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavbarContainer />
      {children}
      <FooterContainer />
    </>
  );
};

export default layout;
