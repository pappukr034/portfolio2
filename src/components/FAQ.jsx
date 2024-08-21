import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this website about?",
      answer: "This website is a personal portfolio showcasing my projects and skills."
    },
    {
      question: "How can I contact you?",
      answer: "You can contact me via email at pappukr034@gmail.com or through the contact form on this website."
    },
    {
      question: "What technologies do you use?",
      answer: "I primarily use React, Node.js, Express, and MongoDB, along with HTML, CSS, and JavaScript."
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" my-8 px-6 mx-3 rounded-lg border border-orange-200 py-6">
      <h2 className="text-3xl text-orange-400 font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200 pb-4">
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold text-gray-200 flex justify-between items-center">
                {faq.question}
                <span className="text-xl text-orange-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </h3>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
