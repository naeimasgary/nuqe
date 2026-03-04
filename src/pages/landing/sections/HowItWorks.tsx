import { useState } from "react";
import styles from "./HowItWorks.module.css";

// Dashboard mockup asset URLs from Figma
const cardWarning = "https://www.figma.com/api/mcp/asset/aec20afc-30b0-44c8-985d-578eea540d45";
const cardSuccess = "https://www.figma.com/api/mcp/asset/6611bedb-aa3e-480b-9c45-7b8e38bc135b";
const chartSvg = "https://www.figma.com/api/mcp/asset/0926d88e-4494-4d9a-ab73-1840e7df4180";
const chartDonut = "https://www.figma.com/api/mcp/asset/ae504ba0-c2d7-4351-9613-46382e04da7e";
const iconRocket = "https://www.figma.com/api/mcp/asset/ca876b58-6657-4927-baad-4987d167cf4d";
const iconArrow = "https://www.figma.com/api/mcp/asset/bbcc08a0-6352-4848-9003-3a139360c7fb";
const iconSearch = "https://www.figma.com/api/mcp/asset/192410d6-d4f9-45c5-aa24-6d4cc5fecd34";
const iconPie = "https://www.figma.com/api/mcp/asset/12000136-bc85-4209-b580-2fe8ee98071b";
const iconCursor = "https://www.figma.com/api/mcp/asset/260417a5-54ee-4a09-b82e-b23fe55e4c6d";
const userIcon1 = "https://www.figma.com/api/mcp/asset/f3641f1a-1e86-45c0-a8b5-9a1068429198";
const banknoteIcon = "https://www.figma.com/api/mcp/asset/4cdbec07-0be8-409a-b6d3-a744f5e41dc5";

const steps = [
  {
    id: "apply",
    title: "Apply & Get Vetted",
    description:
      "Submit your application. Our team verifies your business credentials.",
  },
  {
    id: "browse",
    title: "Browse & Discover",
    description: null,
  },
  {
    id: "connect",
    title: "Connect Anonymously",
    description: null,
  },
];

function ChevronUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState("Project Dashboard");
  const tabs = ["Project Dashboard", "Feature", "Feature", "Feature"];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Tab switcher */}
        <div className={styles.tabGroup}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`${styles.tab} ${activeTab === tab && i === 0 ? styles.tabActive : styles.tabInactive}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Dashboard Preview (left) */}
          <div className={styles.dashboardPreview}>
            <div className={styles.dashboardCards}>
              {/* Warning card */}
              <div className={styles.warningCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrap} style={{ backgroundColor: "#ff6692" }}>
                    <img src={userIcon1} alt="" className={styles.cardIconImg} />
                  </div>
                  <span className={styles.cardLabel}>Pink indicates warning</span>
                  <img src={cardWarning} alt="" className={styles.moreIcon} />
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardStat}>
                    <span className={styles.cardValue}>4,562</span>
                    <span className={styles.cardTag}>+23% last month</span>
                  </div>
                  <div className={styles.barChart}>
                    {[23, 19, 25, 21, 26].map((h, i) => (
                      <div key={i} className={styles.barGroup}>
                        <div className={styles.barTop} style={{ height: `${h}px` }} />
                        <div className={styles.barBottom} style={{ height: `${h + 3}px`, backgroundColor: "#ff6692" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Success card */}
              <div className={styles.successCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrap} style={{ backgroundColor: "#00ceb6" }}>
                    <img src={banknoteIcon} alt="" className={styles.cardIconImg} />
                  </div>
                  <span className={styles.cardLabel}>Green indicates success</span>
                  <img src={cardSuccess} alt="" className={styles.moreIcon} />
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardStat}>
                    <span className={styles.cardValue}>$2,529</span>
                    <span className={styles.cardTag}>+42% last month</span>
                  </div>
                  <img src={chartSvg} alt="" className={styles.miniChart} />
                </div>
              </div>
            </div>

            {/* Marketing Report */}
            <div className={styles.marketingReport}>
              <div className={styles.reportHeader}>
                <span className={styles.reportTitle}>Marketing Report</span>
                <img src={cardWarning} alt="" className={styles.moreIcon} />
              </div>
              <div className={styles.reportContent}>
                <div className={styles.reportList}>
                  {[
                    { icon: iconSearch, label: "Search Volume", value: "+2.9k" },
                    { icon: iconPie, label: "Return Ratio", value: "1.22" },
                    { icon: iconCursor, label: "Clicks / search", value: "0.83" },
                  ].map((item) => (
                    <div key={item.label} className={styles.reportItem}>
                      <div className={styles.reportItemIcon}>
                        <img src={item.icon} alt="" />
                      </div>
                      <div>
                        <p className={styles.reportItemLabel}>{item.label}</p>
                        <p className={styles.reportItemValue}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.donutChart}>
                  <img src={chartDonut} alt="chart" className={styles.donutImg} />
                  <span className={styles.donutValue}>275</span>
                </div>
              </div>
              <div className={styles.reportTip}>
                <img src={iconRocket} alt="" className={styles.tipIcon} />
                <span className={styles.tipText}>
                  Learn insigs how to manage all aspects of your startup.
                </span>
                <button className={styles.tipBtn}>
                  <img src={iconArrow} alt="go" />
                </button>
              </div>
            </div>
          </div>

          {/* How It Works accordion (right) */}
          <div className={styles.accordion}>
            <h2 className={styles.accordionTitle}>How It Works</h2>
            <hr className={styles.divider} />
            {steps.map((step, i) => (
              <div key={step.id}>
                <div className={`${styles.accordionItem} ${i === 0 ? styles.accordionItemOpen : ""}`}>
                  <span className={styles.accordionLabel}>{step.title}</span>
                  {i === 0 ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
                {i === 0 && step.description && (
                  <div className={styles.accordionBody}>
                    <p className={styles.accordionDesc}>{step.description}</p>
                  </div>
                )}
              </div>
            ))}
            <hr className={styles.divider} />
            <button className={styles.applyBtn}>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
