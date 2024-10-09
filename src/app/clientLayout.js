"use client"; // This marks the component as a client component

import React from "react";
import { usePathname } from "next/navigation";
import Topbar from "@/components/navigation/topbar";
import Footer from "@/components/footer/Footer";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  const noTopbarFooterRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgotpassword",
    "/auth/forgotpassword/otp",
  ];

  const shouldHideTopbarFooter = noTopbarFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideTopbarFooter && <Topbar />}
      {children}
      {!shouldHideTopbarFooter && <Footer />}
    </>
  );
};

export default ClientLayout;
