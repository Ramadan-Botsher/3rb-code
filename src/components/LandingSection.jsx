import React from "react";

const LandingSection = ({ title, content }) => {
  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{content}</p>
    </section>
  );
};

export default LandingSection;
