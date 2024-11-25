import React from "react";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="p-4">
        <Component />
      </section>
    );
  };

export { SectionWrapper };
