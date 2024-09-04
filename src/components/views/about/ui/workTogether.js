import Link from "next/link";
import React from "react";

const WorkTogether = () => {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
      <p className="text-lg mb-6">
        Whether you’re looking for a partner in innovation or to join a team
        that values creativity, collaboration, and community, we’d love to hear
        from you!
      </p>
      <Link
        className="bg-white text-gray-800 px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition"
        href="/contact"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default WorkTogether;
