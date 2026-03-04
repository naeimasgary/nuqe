import { useState } from "react";
import styles from "./FAQ.module.css";

const chevronSrc = "https://www.figma.com/api/mcp/asset/964bd8e8-ae16-4fc0-b715-f5cc2f9a5a43";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is included with my purchase?",
    answer:
      "Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.",
  },
  {
    question: "Are there any recurring fees?",
    answer: "No. Your purchase includes lifetime access with no recurring fees.",
  },
  {
    question: "Can I use the template on multiple projects?",
    answer:
      "Yes, you can use the template on multiple projects within your organization.",
  },
  {
    question: "Can I customize the admin dashboard template to match my brand?",
    answer:
      "Absolutely. The design system is built with customization in mind.",
  },
  {
    question: "Are there any restrictions on using the template?",
    answer: "Please refer to our terms of service for any usage restrictions.",
  },
  {
    question: "How can I get support after purchase?",
    answer:
      "Contact our support team at support@nuqlei.com or via the in-app chat.",
  },
  {
    question: "What is included with my purchase?",
    answer: "Please see the full feature list on our pricing page.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Frequently asked questions</h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronUp : ""}`}
                  >
                    <img src={chevronSrc} alt="" />
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
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
