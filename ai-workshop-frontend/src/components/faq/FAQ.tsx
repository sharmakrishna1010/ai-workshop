import React from "react";
import AccordionItem from "./AccordianItem";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "Do children need prior programming experience?",
      answer:
        "Not at all! This workshop is designed from scratch for absolute beginners. We teach core concepts using visual blocks and simple progression before moving to syntax.",
    },
    {
      question: "What hardware or components are required?",
      answer:
        "Since the mode is entirely online, we utilize premium web-based simulator kits. Everything required to build, test, and run code is provided digitally inside the browser workspace.",
    },
    {
      question: "Will a certificate be provided upon completion?",
      answer:
        "Yes, every child receives a verified Kidrove digital certificate of completion honoring their projects and capstone build at the end of the 4 weeks.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
