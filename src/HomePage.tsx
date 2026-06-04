import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutMeImage from "./assets/images/about me/me.jpg";
import aboutLearningDetail1 from "./assets/images/about me/detail-1.png";
import aboutLearningDetail2 from "./assets/images/about me/detail-2.png";
import communitySystemCover from "./assets/images/Community System-cover.png";
import ecassoCover from "./assets/images/ecasso-cover.png";
import experienceDesignCover from "./assets/images/Experience Design-cover.png";
import groupLotteryCover from "./assets/images/group-lottery-cover.png";
import interactiveWebsiteCover from "./assets/images/Interactive Website-cover.png";
import invitationManagementCover from "./assets/images/invitation-management-cover.png";
import leaveManagementCover from "./assets/images/leave-management-cover.png";
import automationToolsCover from "./assets/images/automation-tools-cover.png";

import heroCollage from "./assets/images/hero-collage.png";

type Lang = "zh" | "en";

type ProjectCard = {
  tag: string;
  title: string;
  description: string;
  button: string;
  imageType: "image" | "placeholder";
  imageSrc?: string;
  accent: string;
  monogram: string;
  targetId: string;
};

type ToolGroup = {
  title: string;
  items: string[];
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [learningImageIndex, setLearningImageIndex] = useState(0);

  const projectScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollProjects = (direction: "left" | "right") => {
    if (!projectScrollRef.current) return;

    const scrollAmount = isMobile ? 280 : 320;

    projectScrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const content = {
    zh: {
      nav: {
        projects: "專案",
        about: "關於我",
        contact: "聯絡",
      },
      hero: {
        eyebrow: "EXPERIENCE TRANSLATOR",
        title: "LIU YUE TONG",
        subtitle: "將需求、流程與想法，\n轉化為可運作的系統與體驗。",
        highlights: [
           "行政流程自動化",
           "社群配對系統",
           "個人知識工作流",
           "互動展覽體驗",
        ],
        primaryButton: "查看專案",
      },
      cards: [
        {
          dot: "🟢",
          title: "需求轉譯",
          text: "從抽象想法與真實需求出發，快速建立可測試的 Prototype。",
        },
        {
          dot: "🔵",
          title: "系統建構",
          text: "將流程、資訊與互動整理成可持續運作的系統。",
        },
        {
          dot: "🟣",
          title: "體驗落地",
          text: "讓工具與體驗真正進入現實情境，創造參與感與回饋。",
        },
      ],
      projectsSection: {
        eyebrow: "CASE STUDIES",
        title: "問題與解法",
      },
   projects: [
  {
    tag: "Workflow & Systems",
    title: "社群配對系統",
    description:
      "協助管理活動參與者與配對流程。\n\n減少人工整理成本，提高配對效率。",
    button: "More",
    imageType: "image",
    imageSrc: communitySystemCover,
    accent: "#4B84D9",
    monogram: "DC",
    targetId: "discord-matching-system",
  },
  {
    tag: "Workflow & Systems",
    title: "行政流程自動化",
    description:
      "校園請假與審核流程系統化。\n\n減少重複行政作業與資訊落差。",
    button: "More",
    imageType: "image",
    imageSrc: leaveManagementCover,
    accent: "#B1784F",
    monogram: "WF",
    targetId: "leave-reporting-system",
  },
  {
    tag: "Workflow & Systems",
    title: "展覽邀請管理系統",
    description:
      "集中管理展覽邀請資訊。\n\n讓名單收集與同步更有效率。",
    button: "More",
    imageType: "image",
    imageSrc: invitationManagementCover,
    accent: "#6A9CF8",
    monogram: "IV",
    targetId: "invitation-system",
  },
  {
    tag: "Workflow & Systems",
    title: "活動分組系統",
    description:
      "為品牌活動建立即時抽籤與分組流程。\n\n同步呈現主持人與參與者結果。",
    button: "More",
    imageType: "image",
    imageSrc: groupLotteryCover,
    accent: "#4DAA8C",
    monogram: "GR",
    targetId: "group-system",
  },
  {
    tag: "Workflow & Systems",
    title: "個人知識工作流",
    description:
      "整合資訊與自動化流程。\n\n建立可持續運作的個人工作系統。",
    button: "More",
    imageType: "image",
    imageSrc: automationToolsCover,
    accent: "#3C9D94",
    monogram: "AU",
    targetId: "personal-automation-tools",
  },
  {
    tag: "Experience Design",
    title: "手勢互動網站",
    description:
      "將情緒探索轉化為互動體驗。\n\n透過手勢與畫面即時回應。",
    button: "More",
    imageType: "image",
    imageSrc: interactiveWebsiteCover,
    accent: "#3FAF68",
    monogram: "GI",
    targetId: "gesture-interaction",
  },
  {
    tag: "Experience Design",
    title: "互動視覺實驗",
    description:
      "以風景與自我為主題的即時互動展演。\n\n探索身體、影像與即時回饋。",
    button: "More",
    imageType: "image",
    imageSrc: experienceDesignCover,
    accent: "#8D63D2",
    monogram: "EX",
    targetId: "interactive-exhibition",
  },
  {
    tag: "Experience Design",
    title: "E-casso 體驗創作品牌",
    description:
      "透過體驗與創作，留下自己的想法。\n\n結合藝術與不同領域，探索更多可能。",
    button: "More",
    imageType: "image",
    imageSrc: ecassoCover,
    accent: "#9A5ACB",
    monogram: "EC",
    targetId: "e-casso-art-brand",
  },
] as ProjectCard[],
      aboutSection: {
        eyebrow: "ABOUT",
        title: "關於我",
        introTitle: "我是劉玥彤，",
        introText:
          "從真實需求出發，透過 AI、自動化工具、流程設計\n與互動體驗設計，\n將抽象想法轉化為可運作、可參與、可持續的系統與體驗。\n\n我關心的不只是功能本身，而是工具是否真的被使用，體驗是否真的被感受到。",
        learningTitle: "學習與探索",
        learningText:
          "持續學習 AI 與自動化相關工具，\n包含 n8n、Make 等流程設計，\n並透過 UI/UX 共學與 TouchDesigner 工作坊，\n探索互動設計與數位體驗的可能性。",
        toolsTitle: "工具與能力",
        toolGroups: [
          {
            title: "AI 與自動化",
            items: ["n8n", "Make", "Apps Script"],
          },
          {
            title: "流程與系統設計",
            items: ["Workflow Design", "Google Sheets", "Airtable"],
          },
          {
            title: "互動與體驗設計",
            items: ["TouchDesigner", "UI/UX", "Event Design"],
          },
        ] as ToolGroup[],
      },
      contactSection: {
        eyebrow: "CONTACT",
        title: "聯絡我",
        text: "如果你對我的專案、研究方向或合作有興趣，歡迎與我聯絡。",
        emailLabel: "EMAIL",
        instagramLabel: "INSTAGRAM",
      },
    },
    en: {
      nav: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
      },
      hero: {
        eyebrow: "EXPERIENCE TRANSLATOR",
        title: "LIU YUE TONG",
        subtitle:
          "Turning needs, workflows and ideas\ninto working systems and participatory experiences.",
        highlights: [
           "Workflow Automation",
           "Community Matching System",
           "Knowledge Workflow",
           "Interactive Experience",
        ],
        primaryButton: "View Projects",
      },
      cards: [
        {
          dot: "🟢",
          title: "Need Translation",
          text: "Turning abstract ideas and real needs into testable prototypes.",
        },
        {
          dot: "🔵",
          title: "System Building",
          text: "Organizing workflows, information and interactions into sustainable systems.",
        },
        {
          dot: "🟣",
          title: "Experience Delivery",
          text: "Bringing tools and experiences into real contexts to create engagement and feedback.",
        },
      ],
      projectsSection: {
        eyebrow: "CASE STUDIES",
        title: "Problems & Solutions",
      },
      projects: [
        {
          tag: "Workflow & Systems",
          title: "Community Matching System",
          description:
            "Systemizing the matching process for community events.\n\nThrough automation and data management, this project reduces manual workload and improves the stability of matching results.",
          button: "More",
          imageType: "image",
          imageSrc: communitySystemCover,
          accent: "#4B84D9",
          monogram: "DC",
          targetId: "discord-matching-system",
        },
        {
          tag: "Workflow & Systems",
          title: "Administrative Workflow Automation",
          description:
            "Redesigning leave requests, approval and notification workflows for a campus unit.\n\nUsing Apps Script automation to reduce repetitive administrative work and improve information synchronization.",
          button: "More",
          imageType: "image",
          imageSrc: leaveManagementCover,
          accent: "#B1784F",
          monogram: "WF",
          targetId: "leave-reporting-system",
        },
        {
          tag: "Workflow & Systems",
          title: "Exhibitor Invitation Management System",
          description:
            "Building a dedicated invitation management platform for exhibition participants.\n\nIntegrating identity verification, invitation form submission and real-time list synchronization to reduce manual organization work.",
          button: "More",
          imageType: "image",
          imageSrc: invitationManagementCover,
          accent: "#6A9CF8",
          monogram: "IV",
          targetId: "invitation-system",
        },
        {
          tag: "Workflow & Systems",
          title: "Event Grouping System",
          description:
            "Creating a real-time lottery and grouping flow for brand events.\n\nCombining a host control panel with participant screens so results can be synchronized instantly on-site.",
          button: "More",
          imageType: "image",
          imageSrc: groupLotteryCover,
          accent: "#4DAA8C",
          monogram: "GR",
          targetId: "group-system",
        },
        {
          tag: "Workflow & Systems",
          title: "Personal Knowledge Workflow",
          description:
            "Building a personal knowledge system for reading, organizing and output.\n\nIntegrating AI and automation tools so knowledge can be continuously accumulated and reused.",
          button: "More",
          imageType: "image",
          imageSrc: automationToolsCover,
          accent: "#3C9D94",
          monogram: "AU",
          targetId: "personal-automation-tools",
        },
        {
          tag: "Experience Design",
          title: "Gesture Interaction Website",
          description:
            "Turning emotional awareness into a real-time interactive experience prototype.",
          button: "More",
          imageType: "image",
          imageSrc: interactiveWebsiteCover,
          accent: "#3FAF68",
          monogram: "GI",
          targetId: "gesture-interaction",
        },
        {
          tag: "Experience Design",
          title: "Interactive Visual Experiment",
          description:
            "A real-time interactive performance themed around landscape and self.\n\nBuilt with TouchDesigner to create a visual and interaction system where the image changes instantly through gestures and live control.",
          button: "More",
          imageType: "image",
          imageSrc: experienceDesignCover,
          accent: "#8D63D2",
          monogram: "EX",
          targetId: "interactive-exhibition",
        },
        {
          tag: "Experience Design",
          title: "E-casso Art Brand",
          description:
            "Turning different themes into participatory experiences.\n\nThrough art and cross-disciplinary collaboration, this project designs event formats with interaction and feedback.",
          button: "More",
          imageType: "image",
          imageSrc: ecassoCover,
          accent: "#9A5ACB",
          monogram: "EC",
          targetId: "e-casso-art-brand",
        },
      ] as ProjectCard[],
      aboutSection: {
        eyebrow: "ABOUT",
        title: "About",
        introTitle: "I am Liu Yue Tong,",
        introText:
          "I translate real needs into working systems and participatory experiences through AI, automation tools, workflow design and interactive experience design.\n\nI care not only about whether something works, but whether it is truly used, felt and experienced in real contexts.",
        learningTitle: "Learning & Exploration",
        learningText:
          "I continue learning AI and automation-related tools,\nincluding workflow design with n8n and Make,\nand through UI/UX study groups and TouchDesigner workshops,\nI explore the possibilities of interactive design and digital experiences.",
        toolsTitle: "Tools & Skills",
        toolGroups: [
          {
            title: "AI & Automation",
            items: ["n8n", "Make", "Apps Script"],
          },
          {
            title: "Workflow & System Design",
            items: ["Workflow Design", "Google Sheets", "Airtable"],
          },
          {
            title: "Interaction & Experience Design",
            items: ["TouchDesigner", "UI/UX", "Event Design"],
          },
        ] as ToolGroup[],
      },
      contactSection: {
        eyebrow: "CONTACT",
        title: "Get in touch",
        text: "If you're interested in my work, research direction, or potential collaboration, feel free to reach out.",
        emailLabel: "EMAIL",
        instagramLabel: "INSTAGRAM",
      },
    },
  };

  const t = content[lang];

  const heroImages = [
  {
    src: heroCollage,
    alt: lang === "zh" ? "作品總覽拼貼" : "Project collage",
  },
];

  const learningImages = [
    {
      src: aboutLearningDetail1,
      alt: lang === "zh" ? "學習與探索圖片 1" : "Learning and exploration image 1",
    },
    {
      src: aboutLearningDetail2,
      alt: lang === "zh" ? "學習與探索圖片 2" : "Learning and exploration image 2",
    },
  ];


  const nextLearningImage = () => {
    setLearningImageIndex((prev) => (prev + 1) % learningImages.length);
  };

  const prevLearningImage = () => {
    setLearningImageIndex((prev) =>
      prev === 0 ? learningImages.length - 1 : prev - 1
    );
  };

  const goToLearningImage = (index: number) => {
    setLearningImageIndex(index);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f6f2eb 0%, #f1ede6 52%, #f7f4ee 100%)",
        color: "#1f1f1f",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(246, 242, 235, 0.82)",
          borderBottom: "1px solid rgba(70, 60, 45, 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: isMobile ? "16px 18px" : "18px 24px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.13em",
              }}
            >
              PORTFOLIO
            </div>

            <nav
              style={{
                display: "flex",
                gap: isMobile ? "14px" : "18px",
                fontSize: "14px",
                color: "#6a655d",
                fontWeight: 600,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {t.nav.projects}
              </a>
              <a
                href="#about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          <div
            style={{
              display: "flex",
              gap: "6px",
              padding: "4px",
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <button
              onClick={() => setLang("zh")}
              style={{
                padding: "7px 14px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: lang === "zh" ? "#171717" : "transparent",
                color: lang === "zh" ? "#ffffff" : "#4b4b4b",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              中文
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                padding: "7px 14px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: lang === "en" ? "#171717" : "transparent",
                color: lang === "en" ? "#ffffff" : "#4b4b4b",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <section
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: isMobile ? "24px 18px 36px" : "34px 24px 64px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.45fr) 420px",
              gap: isMobile ? "18px" : "24px",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1px solid rgba(70,60,45,0.06)",
                borderRadius: isMobile ? "28px" : "34px",
                padding: isMobile ? "24px 20px 24px" : "30px 30px 28px",
                boxShadow: "0 14px 40px rgba(81, 64, 42, 0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: isMobile ? "16px" : "18px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "9px 16px",
                    borderRadius: "999px",
                    backgroundColor: "#ece3d5",
                    color: "#746652",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}
                >
                  {t.hero.eyebrow}
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  marginBottom: isMobile ? "24px" : "26px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "28px",
                    overflow: "hidden",
                    backgroundColor: "#111",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src={heroImages[0].src}
                    alt={heroImages[0].alt}
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      aspectRatio: isMobile ? "4 / 3" : "16 / 9",
                    }}
                  />
                </div>
                </div>
              <div
                style={{
                  display: "grid",
                  gap: "12px",
                  justifyItems: "start",
                  textAlign: "left",
                  maxWidth: isMobile ? "100%" : "540px",
                  margin: isMobile ? "0" : "0 auto",
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontSize: isMobile
                      ? "clamp(30px, 9vw, 42px)"
                      : "clamp(34px, 4vw, 52px)",
                    lineHeight: 1.06,
                    letterSpacing: "0.05em",
                    fontWeight: 800,
                    color: "#2a2a2a",
                    fontFamily:
                      "'Times New Roman', Georgia, 'Noto Serif TC', serif",
                    wordBreak: "keep-all",
                  }}
                >
                  {t.hero.title}
                </h1>

                <p
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "18px" : "20px",
                    lineHeight: 1.6,
                    color: "#5b5750",
                    whiteSpace: "pre-line",
                    fontWeight: 600,
                  }}
                >
                  {t.hero.subtitle}
                </p>
              </div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "8px" : "8px 34px",
    marginTop: "8px",
    paddingLeft: isMobile ? "0" : "12px",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.7,
    color: "#6a6258",
    fontWeight: 600,
    maxWidth: "440px",
  }}
>
  {t.hero.highlights.map((item) => (
    <div
      key={item}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          color: "#3FAF68",
          fontSize: "14px",
          lineHeight: 1,
          fontWeight: 800,
        }}
      >
        ✓
      </span>
      <span>{item}</span>
    </div>
  ))}
</div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: isMobile ? "26px" : "30px",
                  justifyContent: "flex-start",
                  maxWidth: isMobile ? "100%" : "540px",
                  marginLeft: isMobile ? "0" : "auto",
                  marginRight: isMobile ? "0" : "auto",
                }}
              >
                <a
                  href="#projects"
                  style={{
                    padding: "14px 24px",
                    borderRadius: "999px",
                    backgroundColor: "#171717",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: 700,
                    boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {t.hero.primaryButton}
                </a>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: isMobile ? "14px" : "18px",
                alignContent: "stretch",
              }}
            >
              {t.cards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.72)",
                    borderRadius: isMobile ? "24px" : "28px",
                    padding: isMobile ? "22px 20px" : "26px 26px",
                    border: "1px solid rgba(70,60,45,0.06)",
                    boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: isMobile ? "auto" : "180px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      marginBottom: "14px",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? "20px" : "22px",
                        lineHeight: 1,
                      }}
                    >
                      {card.dot}
                    </span>

                    <h3
                      style={{
                        margin: 0,
                        fontSize: isMobile ? "22px" : "24px",
                        lineHeight: 1.25,
                        color: "#1f1f1f",
                        fontWeight: 800,
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: isMobile ? "16px" : "17px",
                      lineHeight: 1.85,
                      color: "#5b5750",
                      textAlign: "left",
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: isMobile ? "28px 18px 64px" : "56px 24px 88px",
            scrollMarginTop: "100px",
          }}
        >
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              textAlign: "center",
              marginBottom: isMobile ? "22px" : "30px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                backgroundColor: "#ece3d5",
                color: "#746652",
                fontSize: "12px",
                letterSpacing: "0.16em",
                lineHeight: 1.4,
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              {t.projectsSection.eyebrow}
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "28px" : "36px",
                lineHeight: 1.2,
                color: "#232323",
              }}
            >
              {t.projectsSection.title}
            </h2>
          </div>

          <div
            style={{
              position: "relative",
              paddingLeft: isMobile ? "0" : "34px",
              paddingRight: isMobile ? "0" : "34px",
            }}
          >
            {!isMobile && (
              <>
                <button
                  onClick={() => scrollProjects("left")}
                  aria-label={lang === "zh" ? "向左滑看更多卡片" : "Scroll left"}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "42%",
                    transform: "translateY(-50%)",
                    width: "42px",
                    height: "42px",
                    borderRadius: "999px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    backgroundColor: "rgba(255,255,255,0.64)",
                    color: "rgba(70,60,45,0.58)",
                    cursor: "pointer",
                    fontSize: "18px",
                    backdropFilter: "blur(8px)",
                    zIndex: 3,
                  }}
                >
                  ←
                </button>

                <button
                  onClick={() => scrollProjects("right")}
                  aria-label={lang === "zh" ? "向右滑看更多卡片" : "Scroll right"}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "42%",
                    transform: "translateY(-50%)",
                    width: "42px",
                    height: "42px",
                    borderRadius: "999px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    backgroundColor: "rgba(255,255,255,0.64)",
                    color: "rgba(70,60,45,0.58)",
                    cursor: "pointer",
                    fontSize: "18px",
                    backdropFilter: "blur(8px)",
                    zIndex: 3,
                  }}
                >
                  →
                </button>
              </>
            )}

            <div
              ref={projectScrollRef}
              style={{
                display: "flex",
                gap: isMobile ? "16px" : "18px",
                overflowX: "auto",
                overflowY: "visible",
                paddingTop: "8px",
                paddingBottom: "12px",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {t.projects.map((project, index) => {
                const isHovered = hoveredProject === index;

                return (
                  <article
                    key={project.title}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{
                      flex: "0 0 auto",
                      width: isMobile ? "280px" : "290px",
                      backgroundColor: "rgba(255,255,255,0.76)",
                      borderRadius: "26px",
                      border: "1px solid rgba(70,60,45,0.06)",
                      boxShadow: isHovered
                        ? "0 20px 48px rgba(81, 64, 42, 0.16)"
                        : "0 10px 28px rgba(81, 64, 42, 0.06)",
                      overflow: "hidden",
                      transform:
                        !isMobile && isHovered
                          ? "translateY(-8px)"
                          : "translateY(0)",
                      transition:
                        "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: isMobile ? "470px" : "500px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "3 / 4",
                        overflow: "hidden",
                        background:
                          project.imageType === "placeholder"
                            ? `linear-gradient(160deg, ${project.accent}20 0%, rgba(255,255,255,0.78) 48%, #efe8dc 100%)`
                            : "#111",
                      }}
                    >
                      {project.imageType === "image" && project.imageSrc ? (
                        <img
                          src={project.imageSrc}
                          alt={project.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transform:
                              !isMobile && isHovered
                                ? "scale(1.03)"
                                : "scale(1)",
                            transition: "transform 220ms ease",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "24px",
                            boxSizing: "border-box",
                          }}
                        >
                          <div
                            style={{
                              width: "78px",
                              height: "78px",
                              borderRadius: "20px",
                              background: `linear-gradient(135deg, ${project.accent}, #ffffff)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#1f1f1f",
                              fontSize: "26px",
                              fontWeight: 800,
                              boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                              marginBottom: "18px",
                            }}
                          >
                            {project.monogram}
                          </div>

                          <div
                            style={{
                              fontSize: "12px",
                              letterSpacing: "0.14em",
                              color: "#6f675d",
                              fontWeight: 700,
                              textAlign: "center",
                            }}
                          >
                            {project.tag.toUpperCase()}
                          </div>
                        </div>
                      )}

                      <div
                        style={{
                          position: "absolute",
                          left: "14px",
                          top: "14px",
                          display: "inline-block",
                          padding: "7px 11px",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255,255,255,0.78)",
                          backdropFilter: "blur(8px)",
                          color: "#6c6358",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {project.tag}
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "18px 18px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        flex: 1,
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: isMobile ? "22px" : "24px",
                          lineHeight: 1.2,
                          color: "#1f1f1f",
                        }}
                      >
                        {project.title}
                      </h3>

                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          lineHeight: 1.75,
                          color: "#5b5750",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.description}
                      </p>

                      <div style={{ flex: 1 }} />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "8px",
                        }}
                      >
                        <Link
                          to={`/projects#${project.targetId}`}
                          style={{
                            padding: "11px 18px",
                            minWidth: "104px",
                            borderRadius: "999px",
                            border: "1px solid rgba(0,0,0,0.1)",
                            backgroundColor: isHovered ? "#171717" : "#ffffff",
                            color: isHovered ? "#ffffff" : "#2f2f2f",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: 700,
                            transition:
                              "background-color 180ms ease, color 180ms ease, border-color 180ms ease",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {project.button}
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {isMobile && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "14px",
                }}
              >
                <button
                  onClick={() => scrollProjects("left")}
                  aria-label={lang === "zh" ? "向左滑看更多卡片" : "Scroll left"}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    backgroundColor: "rgba(255,255,255,0.64)",
                    color: "rgba(70,60,45,0.58)",
                    cursor: "pointer",
                    fontSize: "18px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  ←
                </button>

                <button
                  onClick={() => scrollProjects("right")}
                  aria-label={lang === "zh" ? "向右滑看更多卡片" : "Scroll right"}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    backgroundColor: "rgba(255,255,255,0.64)",
                    color: "rgba(70,60,45,0.58)",
                    cursor: "pointer",
                    fontSize: "18px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  →
                </button>
              </div>
            )}
          </div>
        </section>

        <section
          id="about"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: isMobile ? "28px 18px 96px" : "58px 24px 120px",
            scrollMarginTop: "100px",
          }}
        >
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              textAlign: "center",
              marginBottom: isMobile ? "24px" : "34px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                backgroundColor: "#ece3d5",
                color: "#746652",
                fontSize: "12px",
                letterSpacing: "0.16em",
                lineHeight: 1.4,
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              {t.aboutSection.eyebrow}
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "28px" : "36px",
                lineHeight: 1.2,
                color: "#232323",
              }}
            >
              {t.aboutSection.title}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: isMobile ? "18px" : "26px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.76)",
                borderRadius: isMobile ? "24px" : "28px",
                border: "1px solid rgba(70,60,45,0.06)",
                boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                padding: isMobile ? "22px 20px" : "30px 32px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1.35fr 0.65fr",
                  gap: isMobile ? "22px" : "32px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: "18px",
                    justifyItems: "start",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "28px" : "34px",
                      lineHeight: 1.3,
                      fontWeight: 700,
                      color: "#3e3831",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    {t.aboutSection.introTitle}
                  </div>

                  <div
                    style={{
                      fontSize: isMobile ? "18px" : "22px",
                      lineHeight: 1.9,
                      color: "#5a544d",
                      whiteSpace: "pre-line",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    {t.aboutSection.introText}
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 4",
                    borderRadius: "22px",
                    overflow: "hidden",
                    backgroundColor: "#f8f8f7",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={aboutMeImage}
                    alt={
                      lang === "zh" ? "劉玥彤個人照片" : "Portrait of Liu Yue Tong"
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "18px" : "22px",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.76)",
                  borderRadius: "28px",
                  border: "1px solid rgba(70,60,45,0.06)",
                  boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                  padding: isMobile ? "22px 20px" : "26px 26px 24px",
                  display: "grid",
                  gap: "18px",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: isMobile ? "24px" : "28px",
                      lineHeight: 1.25,
                      color: "#1f1f1f",
                      textAlign: "center",
                    }}
                  >
                    {t.aboutSection.learningTitle}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: isMobile ? "16px" : "17px",
                      lineHeight: 1.95,
                      color: "#5b5750",
                      whiteSpace: "pre-line",
                      textAlign: "center",
                    }}
                  >
                    {t.aboutSection.learningText}
                  </p>
                </div>

                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3 / 2",
                    borderRadius: "20px",
                    backgroundColor: "#f0f1f3",
                    border: "1px solid rgba(0,0,0,0.05)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={learningImages[learningImageIndex].src}
                    alt={learningImages[learningImageIndex].alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      backgroundColor: "#f0f1f3",
                    }}
                  />

                  <button
                    onClick={prevLearningImage}
                    aria-label={lang === "zh" ? "上一張圖片" : "Previous image"}
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "36px",
                      height: "36px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.28)",
                      backgroundColor: "rgba(255,255,255,0.58)",
                      backdropFilter: "blur(8px)",
                      color: "#5f5850",
                      fontSize: "16px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                    }}
                  >
                    ←
                  </button>

                  <button
                    onClick={nextLearningImage}
                    aria-label={lang === "zh" ? "下一張圖片" : "Next image"}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "36px",
                      height: "36px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.28)",
                      backgroundColor: "rgba(255,255,255,0.58)",
                      backdropFilter: "blur(8px)",
                      color: "#5f5850",
                      fontSize: "16px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                    }}
                  >
                    →
                  </button>

                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "12px",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "8px",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(0,0,0,0.14)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {learningImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToLearningImage(index)}
                        aria-label={
                          lang === "zh"
                            ? `切換到第 ${index + 1} 張圖片`
                            : `Go to image ${index + 1}`
                        }
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "999px",
                          border: "none",
                          padding: 0,
                          backgroundColor:
                            learningImageIndex === index
                              ? "rgba(255,255,255,0.95)"
                              : "rgba(255,255,255,0.45)",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.76)",
                  borderRadius: "28px",
                  border: "1px solid rgba(70,60,45,0.06)",
                  boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                  padding: isMobile ? "22px 20px" : "26px 26px 24px",
                  display: "grid",
                  gap: "18px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "24px" : "28px",
                    lineHeight: 1.25,
                    color: "#1f1f1f",
                    textAlign: "center",
                  }}
                >
                  {t.aboutSection.toolsTitle}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  {t.aboutSection.toolGroups.map((group) => (
                    <div
                      key={group.title}
                      style={{
                        borderRadius: "18px",
                        backgroundColor: "#fbfaf7",
                        border: "1px solid rgba(0,0,0,0.04)",
                        padding: "16px 16px 14px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "999px",
                            backgroundColor: "#ded7cc",
                            flexShrink: 0,
                          }}
                        />
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#4b453e",
                          }}
                        >
                          {group.title}
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                        }}
                      >
                        {group.items.map((item) => (
                          <div
                            key={item}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "8px 12px",
                              borderRadius: "999px",
                              backgroundColor: "#ffffff",
                              border: "1px solid rgba(0,0,0,0.06)",
                              color: "#5a544d",
                              fontSize: "14px",
                              fontWeight: 600,
                            }}
                          >
                            <div
                              style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "4px",
                                backgroundColor: "#e6e1d8",
                                flexShrink: 0,
                              }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: isMobile ? "28px 18px 120px" : "34px 24px 140px",
            scrollMarginTop: "100px",
          }}
        >
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              textAlign: "center",
              marginBottom: isMobile ? "22px" : "30px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                backgroundColor: "#ece3d5",
                color: "#746652",
                fontSize: "12px",
                letterSpacing: "0.16em",
                lineHeight: 1.4,
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              {t.contactSection.eyebrow}
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "28px" : "36px",
                lineHeight: 1.2,
                color: "#232323",
                marginBottom: "12px",
              }}
            >
              {t.contactSection.title}
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: isMobile ? "16px" : "18px",
                lineHeight: 1.8,
                color: "#5b5750",
                maxWidth: "560px",
              }}
            >
              {t.contactSection.text}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "16px" : "20px",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            <a
              href="mailto:s35jilyg42@email.com"
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(255,255,255,0.76)",
                borderRadius: "24px",
                border: "1px solid rgba(70,60,45,0.06)",
                boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                padding: isMobile ? "22px 20px" : "26px 26px",
                display: "grid",
                gap: "8px",
                color: "#1f1f1f",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: "#7a746c",
                  fontWeight: 700,
                }}
              >
                {t.contactSection.emailLabel}
              </div>

              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#2a2a2a",
                  wordBreak: "break-all",
                }}
              >
                s35jilyg42@email.com
              </div>
            </a>

            <a
              href="https://www.instagram.com/s35jilyg/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(255,255,255,0.76)",
                borderRadius: "24px",
                border: "1px solid rgba(70,60,45,0.06)",
                boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                padding: isMobile ? "22px 20px" : "26px 26px",
                display: "grid",
                gap: "8px",
                color: "#1f1f1f",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: "#7a746c",
                  fontWeight: 700,
                }}
              >
                {t.contactSection.instagramLabel}
              </div>

              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#2a2a2a",
                }}
              >
                https://www.instagram.com/s35jilyg/
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
