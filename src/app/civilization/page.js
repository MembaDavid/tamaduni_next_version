<<<<<<< HEAD
import CivilizationTopbar from "@/Components/views/civilization/CivilizationTopbar";
import CivilizationContent from "@/Components/views/civilization/Content";
=======
"use client";
import CivilizationTopbar from "@/components/views/civilization/CivilizationTopbar";
import dynamic from "next/dynamic";
>>>>>>> tamaduni
import React from "react";

//import CivilizationContent and dissable ssr
const CivilizationContent = dynamic(
  () => import("@/components/views/civilization/Content"),
  { ssr: false }
);

function page() {
  return (
    <div>
      <CivilizationTopbar />
      <CivilizationContent />
    </div>
  );
}

export default page;
