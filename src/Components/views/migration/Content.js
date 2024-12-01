import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const MigrationContent = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-6">
      <section className="w-full md:w-1/4">
        <LeftContainer />
      </section>
      <section className=" w-full md:w-3/4 m-0" style={{ margin: 0 }}>
        <RightContainer />
      </section>
    </div>
  );
};

export default MigrationContent;
