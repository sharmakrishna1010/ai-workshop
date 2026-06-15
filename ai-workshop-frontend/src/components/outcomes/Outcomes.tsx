import React from "react";
import { TbPointFilled } from "react-icons/tb";

const Outcomes: React.FC = () => {
  const outcomes = [
    "Understand fundamental concepts of Artificial Intelligence and Machine Learning.",
    "Build and program interactive, real-world mini-robotics projects.",
    "Develop logical thinking, sequencing, and algorithmic problem-solving skills.",
    "Gain hands-on experience with foundational hardware components and sensors.",
    "Collaborate with peers to design creative solutions for simulated challenges.",
  ];

  return (
    <div className="flex flex-col gap-4 mt-2">
      <h2 className="text-2xl font-bold text-gray-800">What you'll learn</h2>

      <ul className="flex flex-col gap-3.5 pl-1">
        {outcomes.map((outcome, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-600 text-sm md:text-xl leading-relaxed"
          >
            <TbPointFilled className="text-orange-400" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Outcomes;
