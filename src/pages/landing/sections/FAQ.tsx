import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is included with my purchase?", answer: "Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience." },
  { question: "Are there any recurring fees?", answer: "No. Your purchase includes lifetime access with no recurring fees." },
  { question: "Can I use the template on multiple projects?", answer: "Yes, you can use the template on multiple projects within your organization." },
  { question: "Can I customize the admin dashboard template to match my brand?", answer: "Absolutely. The design system is built with customization in mind." },
  { question: "Are there any restrictions on using the template?", answer: "Please refer to our terms of service for any usage restrictions." },
  { question: "How can I get support after purchase?", answer: "Contact our support team at support@nuqlei.com or via the in-app chat." },
  { question: "What is included with my purchase?", answer: "Please see the full feature list on our pricing page." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-text-default text-center">Frequently asked questions</h2>
        <div className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-medium ${isOpen ? "text-sky-brand-600" : "text-text-default"}`}>
                    {faq.question}
                  </span>
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className={`flex-shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="pb-4">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
