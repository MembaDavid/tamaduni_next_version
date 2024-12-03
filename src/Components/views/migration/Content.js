import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import useMobilityData from "@/hooks/mobility";

const MigrationContent = () => {
  const { drivers, groups } = useMobilityData();
  return (
    <div className="flex flex-col md:flex-row space-x-6">
      <section className="w-full md:w-1/4">
        <LeftContainer data={groups} />
      </section>
      <section className=" w-full md:w-3/4 m-0" style={{ margin: 0 }}>
        <RightContainer data={drivers} />
      </section>
    </div>
  );
};

export default MigrationContent;
