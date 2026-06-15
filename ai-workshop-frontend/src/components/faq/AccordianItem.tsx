import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl bg-white shadow-xs overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:bg-orange-50/50 transition-colors duration-200"
      >
        <span className="text-sm md:text-xl">{question}</span>
        <FaChevronDown
          className={`text-gray-400 text-sm transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-gray-50" : "max-h-0"}`}
      >
        <p className="p-4 text-gray-600 text-md leading-relaxed bg-gray-50/30">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
