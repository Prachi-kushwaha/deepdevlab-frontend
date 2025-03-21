import React from "react";

const Herosection:React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center max-sm:py-5 py-20 border-b-1 border-[#2E2E2E] text-[#FEFEFE]">
      <h1 className="text-5xl font-semibold">
        Beyond the Syntax: Stories of Algorithms,
        <br /> <span className="mt-4 inline-block">Design & AI Evolution</span>
      </h1>
      <div className="mt-4 text-xl inline-block text-[#CDCDCD]">
        <p>
          Struggling with DSA? Confused about System Design? Want to build
          AI-powered applications? <br />
          <span>
            Get the best insights,explanations, and hands-on guides
          </span>{" "}
          <br />
          <span>all in one place!</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Herosection;
