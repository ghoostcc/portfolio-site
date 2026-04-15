import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage1 from "./assets/images/hero/gesture-interaction-main.png";
import heroImage2 from "./assets/images/hero/gesture-touchdesign.png";
import aboutMeImage from "./assets/images/about me/me.jpg";
import aboutLearningDetail1 from "./assets/images/about me/detail-1.png";
import aboutLearningDetail2 from "./assets/images/about me/detail-2.png";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
        subtitle: "把想法做成可以被體驗的東西",
        primaryButton: "查看專案",
      },
      cards: [
        {
          dot: "🟢",
          title: "快速原型",
          text: "透過 vibe coding 與數位工具，快速將想法轉為可測試的 prototype",
        },
        {
          dot: "🔵",
          title: "使用流程設計",
          text: "設計清晰的使用方式與互動流程，讓概念可以被理解與操作",
        },
        {
          dot: "🟣",
          title: "真實場景應用",
          text: "將設計與技術應用在活動與實際情境中，創造有回饋與驚喜的體驗",
        },
      ],
      projectsSection: {
        eyebrow: "PROJECTS",
        title: "精選專案",
      },
      projects: [
        {
          tag: "Interactive Website",
          title: "手勢互動網站",
          description: "把情緒覺察轉成可即時互動的體驗 prototype。",
          button: "More",
          imageType: "image",
          imageSrc: heroImage1,
          accent: "#3FAF68",
          monogram: "GI",
          targetId: "gesture-interaction",
        },
        {
          tag: "Experience Design",
          title: "互動展演現場",
          description: "把數位互動放進真實場景，讓人能實際參與與感受。",
          button: "More",
          imageType: "image",
          imageSrc: heroImage2,
          accent: "#8D63D2",
          monogram: "EX",
          targetId: "interactive-exhibition",
        },
        {
          tag: "Community System",
          title: "Discord 社群配對系統",
          description: "協助活動分組與流程執行更順暢的社群工具。",
          button: "More",
          imageType: "placeholder",
          accent: "#4B84D9",
          monogram: "DC",
          targetId: "discord-matching-system",
        },
        {
          tag: "Workflow Tool",
          title: "逢甲大學請假回報系統",
          description: "把行政流程整理成更清楚、可執行的回報機制。",
          button: "More",
          imageType: "placeholder",
          accent: "#B1784F",
          monogram: "WF",
          targetId: "leave-reporting-system",
        },
        {
          tag: "Automation",
          title: "個人自動化工具",
          description: "從真實使用情境出發，持續優化個人工作流。",
          button: "More",
          imageType: "placeholder",
          accent: "#3C9D94",
          monogram: "AU",
          targetId: "personal-automation-tools",
        },
        {
          tag: "Brand / Event",
          title: "e-casso 藝術品牌",
          description: "把抽象主題轉成可以參與、創作與感受的體驗。",
          button: "More",
          imageType: "placeholder",
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
          "擅長把抽象的想法轉化為可以被參與的體驗與可運作的系統，\n並透過設計與數位工具，在細節中創造回饋與驚喜。",
        learningTitle: "學習與探索",
        learningText:
          "持續學習 AI 與自動化相關工具，\n包含 n8n、Make 等流程設計，\n並透過 UI/UX 共學與 TouchDesigner 工作坊，\n探索互動設計與數位體驗的可能性。",
        toolsTitle: "工具與能力",
        toolGroups: [
          {
            title: "設計工具",
            items: ["Illustrator", "Photoshop"],
          },
          {
            title: "自動化與系統",
            items: ["n8n", "Make", "Apps Script"],
          },
          {
            title: "互動與實驗",
            items: ["TouchDesigner"],
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
          "Experience Translator\nTurning ideas into things people can actually experience",
        primaryButton: "View Projects",
      },
      cards: [
        {
          dot: "🟢",
          title: "Rapid Prototyping",
          text: "Using vibe coding and digital tools to quickly turn ideas into testable prototypes",
        },
        {
          dot: "🔵",
          title: "User Flow Design",
          text: "Designing clear ways of use and interaction flows so concepts can be understood and operated",
        },
        {
          dot: "🟣",
          title: "Real-world Application",
          text: "Applying design and technology in events and real contexts to create experiences with feedback and surprise",
        },
      ],
      projectsSection: {
        eyebrow: "PROJECTS",
        title: "Selected Projects",
      },
      projects: [
        {
          tag: "Interactive Website",
          title: "Gesture Interaction Website",
          description:
            "An interactive prototype that turns emotional awareness into real-time experience.",
          button: "More",
          imageType: "image",
          imageSrc: heroImage1,
          accent: "#3FAF68",
          monogram: "GI",
          targetId: "gesture-interaction",
        },
        {
          tag: "Experience Design",
          title: "Interactive Exhibition Scene",
          description:
            "Bringing digital interaction into physical space for real participation.",
          button: "More",
          imageType: "image",
          imageSrc: heroImage2,
          accent: "#8D63D2",
          monogram: "EX",
          targetId: "interactive-exhibition",
        },
        {
          tag: "Community System",
          title: "Discord Matching System",
          description:
            "A community tool that helps event grouping and flow run more smoothly.",
          button: "More",
          imageType: "placeholder",
          accent: "#4B84D9",
          monogram: "DC",
          targetId: "discord-matching-system",
        },
        {
          tag: "Workflow Tool",
          title: "Leave Reporting System",
          description:
            "A clearer and more workable reporting flow for administrative needs.",
          button: "More",
          imageType: "placeholder",
          accent: "#B1784F",
          monogram: "WF",
          targetId: "leave-reporting-system",
        },
        {
          tag: "Automation",
          title: "Personal Automation Tools",
          description:
            "Small tools built from real use cases to improve personal workflow.",
          button: "More",
          imageType: "placeholder",
          accent: "#3C9D94",
          monogram: "AU",
          targetId: "personal-automation-tools",
        },
        {
          tag: "Brand / Event",
          title: "e-casso Art Brand",
          description:
            "Turning abstract topics into participatory and creative experiences.",
          button: "More",
          imageType: "placeholder",
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
          "I am good at turning abstract ideas into experiences people can participate in and systems that can actually work,\nand through design and digital tools, I create feedback and surprise in the details.",
        learningTitle: "Learning & Exploration",
        learningText:
          "I continue learning AI and automation-related tools,\nincluding workflow design with n8n and Make,\nand through UI/UX study groups and TouchDesigner workshops,\nI explore the possibilities of interactive design and digital experiences.",
        toolsTitle: "Tools & Skills",
        toolGroups: [
          {
            title: "Design Tools",
            items: ["Illustrator", "Photoshop"],
          },
          {
            title: "Automation & Systems",
            items: ["n8n", "Make", "Apps Script"],
          },
          {
            title: "Interaction & Experiment",
            items: ["TouchDesigner"],
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
      src: heroImage1,
      alt:
        lang === "zh"
          ? "手勢互動網站主畫面"
          : "Gesture interaction website main screen",
    },
    {
      src: heroImage2,
      alt:
        lang === "zh"
          ? "手勢互動體驗現場照片"
          : "Gesture interaction experience photo",
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

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
                    src={heroImages[currentImageIndex].src}
                    alt={heroImages[currentImageIndex].alt}
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      aspectRatio: isMobile ? "4 / 3" : "16 / 9",
                    }}
                  />
                </div>

                <button
                  onClick={nextImage}
                  aria-label={
                    lang === "zh" ? "切換下一張圖片" : "Show next image"
                  }
                  style={{
                    position: "absolute",
                    right: isMobile ? "10px" : "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: isMobile ? "38px" : "44px",
                    height: isMobile ? "38px" : "44px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.24)",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    color: "rgba(255,255,255,0.78)",
                    fontSize: isMobile ? "18px" : "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.16)",
                  }}
                >
                  →
                </button>

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: isMobile ? "12px" : "14px",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
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
                          currentImageIndex === index
                            ? "rgba(255,255,255,0.95)"
                            : "rgba(255,255,255,0.45)",
                        cursor: "pointer",
                      }}
                    />
                  ))}
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
                  display: "flex",
                  gap: "12px",
                  marginTop: isMobile ? "22px" : "24px",
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