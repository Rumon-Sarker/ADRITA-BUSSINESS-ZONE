import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Chevron icons

const B2BFAQ = () => {
  const faqs = [
    {
      question: "What is Open Shope?",
      answer:
        "Open Shope is a B2B grocery marketplace where businesses can source fresh and wholesale grocery items efficiently.",
    },

    {
      question: "What are the minimum order requirements?",
      answer:
        "The minimum order requirement varies by category. Contact our sales team for more details.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "We accept bank transfers, corporate credit cards, and business invoicing options.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we provide special pricing and bulk discounts for large orders. Contact our sales team for a customized quote.",
    },
    {
      question: "What is the delivery process?",
      answer:
        "We offer scheduled bulk deliveries with real-time tracking. Orders are usually fulfilled within 24-48 hours.",
    },
    {
      question: "Can I integrate Open Shope with my business system?",
      answer:
        "Yes, we provide API integrations for inventory and order management. Reach out to our technical team for details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6  shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-blue-50 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 text-lg font-semibold flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <FiChevronUp className="text-xl transition-transform duration-300" /> // Show "^" when open
              ) : (
                <FiChevronDown className="text-xl transition-transform duration-300" /> // Show ">" when closed
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 p-4 border-t border-blue-200"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default B2BFAQ;
