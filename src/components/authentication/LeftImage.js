import React from "react";

const LeftImage = () => {
  return (
    <section className="hidden md:block w-1/2">
      <img
        src="/authentication/login.jpeg"
        alt="login"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default LeftImage;
