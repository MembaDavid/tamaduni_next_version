import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const DEContent = () => {
  return (
    <div className="flex space-x-6">
      <section className="w-1/4">
        <LeftContainer />
      </section>
      <section className="w-3/4">
        <RightContainer />
      </section>
    </div>
  );
};

export default DEContent;
