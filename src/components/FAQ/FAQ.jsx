import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Is QTify free to use?",
    answer: "Yes, QTify is free to use.",
  },
  {
    question: "Can I download and listen to songs offline?",
    answer: "Sorry, unfortunately we don’t provide the service to download any songs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="faq-section">
      <h2>FAQs</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "⌃" : "⌄"}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;