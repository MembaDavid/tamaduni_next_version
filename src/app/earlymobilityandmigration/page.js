<<<<<<< HEAD
import CivilizationTopbar from "@/Components/views/civilization/CivilizationTopbar";
import MigrationContent from "@/Components/views/migration/Content";
=======
"use client";
import CivilizationTopbar from "@/components/views/civilization/CivilizationTopbar";
import dynamic from "next/dynamic";
>>>>>>> tamaduni
import React from "react";

//import MigrationContent and dissable ssr
const MigrationContent = dynamic(
  () => import("@/components/views/migration/Content"),
  { ssr: false }
);

function page() {
  return (
    <>
      <CivilizationTopbar />
      <MigrationContent />
    </>
  );
}

export default page;
