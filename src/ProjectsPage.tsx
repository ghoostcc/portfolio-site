import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import heroImage1 from "./assets/images/hero/gesture-interaction-main.png";
import heroImage2 from "./assets/images/hero/gesture-touchdesign.png";

// gesture-interaction 專案頁素材
import gestureDetail1 from "./assets/images/projects/gesture-interaction/detail-1.png";
import gestureDemo from "./assets/images/projects/gesture-interaction/demo.gif";

type Lang = "zh" | "en";

type ProjectSection = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  imageType: "image" | "placeholder";
  imageSrc?: string;
  accent: string;
  monogram: string;
  background: string;
  problem: string;
  solution: string;
  role: string;
  reflection: string;
};

export default function ProjectsPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const location = useLocation();

  // 只給 gesture-interaction 用的圖片輪播 index
  const [gestureImageIndex, setGestureImageIndex] = useState(0);

  const gestureImages = [gestureDetail1, gestureDemo];

  const nextGestureImage = () => {
    setGestureImageIndex((prev) => (prev + 1) % gestureImages.length);
  };

  const prevGestureImage = () => {
    setGestureImageIndex((prev) =>
      prev === 0 ? gestureImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = location.hash.replace("#", "");

    const timer = window.setTimeout(() => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location]);

  const content = {
    zh: {
      hero: {
        eyebrow: "PROJECT ARCHIVE",
        title: "專案整理",
        text: "這裡收錄我將想法轉化為體驗、工具與流程的專案實作。",
      },
      labels: {
        background: "專案背景",
        problem: "問題",
        solution: "體驗流程",
        role: "我的角色",
        reflection: "收穫 / Reflection",
      },
      backToHome: "返回首頁",
      projects: [
        {
          id: "gesture-interaction",
          tag: "Interactive Experience",
          title: "手勢互動體驗｜情緒覺察",
          summary: "結合實體票券、數位互動與手勢操作，將抽象情緒轉化為可被看見與感受的變化。",
          imageType: "image",
          imageSrc: heroImage1,
          accent: "#3FAF68",
          monogram: "GI",
          background:
            "在與人生教練合辦的活動中，我設計了一套結合「實體票券」與「數位互動」的體驗流程。",
          problem:
            "希望把原本抽象、不容易被描述的情緒覺察，轉化成參與者可以在現場直接感受、看見並互動的體驗。",
          solution:
            "參與者透過票券上的條碼對準現場電腦鏡頭，我透過手機進行遠端控制，作為互動流程的控制端，並結合手勢操作即時影響畫面中的角色狀態，讓「抽象情緒」轉化為可以被看見與感受的變化。整體體驗串連「進場 → 互動 → 結束」，形成一個完整的參與流程。",
          role:
            "我負責整體體驗流程設計、互動邏輯規劃、條碼票券與數位畫面的串接概念，以及現場互動控制方式的設計。",
          reflection:
            "這個專案讓我更確認自己擅長把抽象概念轉化成可被體驗的互動形式，也讓我更理解實體場域、流程安排與數位互動之間如何彼此配合。",
        },
        {
          id: "interactive-exhibition",
          tag: "Experience Design",
          title: "互動展演現場",
          summary: "把數位互動放進真實場景，讓人能實際參與與感受。",
          imageType: "image",
          imageSrc: heroImage2,
          accent: "#8D63D2",
          monogram: "EX",
          background:
            "我希望探索的不只是螢幕介面，而是人在真實空間中如何感受、參與與回應互動。",
          problem:
            "數位體驗常停留在單一裝置內，但在活動或展演現場，互動需要更直覺、更具情境感。",
          solution:
            "我從現場動線、參與方式與互動節奏出發，設計一個讓人可以自然進入情境的互動體驗。",
          role:
            "我負責體驗概念發想、互動流程規劃與整體展示方向整理。",
          reflection:
            "這個專案讓我學到，真實場景中的體驗設計不只關於畫面，而是關於人如何靠近、理解並願意參與。",
        },
        {
          id: "discord-matching-system",
          tag: "Community System",
          title: "Discord 社群配對系統",
          summary: "協助活動分組與流程執行更順暢的社群工具。",
          imageType: "placeholder",
          accent: "#4B84D9",
          monogram: "DC",
          background:
            "這個專案來自社群活動中的實際需求，希望讓配對、通知與分組流程更有系統。",
          problem:
            "活動中的分組、通知與流程安排容易混亂，增加主辦方與參與者的負擔。",
          solution:
            "我把配對邏輯、訊息整理與使用流程整合成一套較清楚的社群工具結構，讓流程更容易被執行。",
          role: "我負責需求整理、流程設計與工具架構規劃。",
          reflection:
            "這個專案讓我更確定自己對於把混亂流程整理成可執行系統這件事很有興趣。",
        },
        {
          id: "leave-reporting-system",
          tag: "Workflow Tool",
          title: "逢甲大學請假回報系統",
          summary: "把行政流程整理成更清楚、可執行的回報機制。",
          imageType: "placeholder",
          accent: "#B1784F",
          monogram: "WF",
          background:
            "專案來自行政與流程管理的真實觀察，希望把原本零散的回報方式整理成更清楚的機制。",
          problem:
            "請假與回報流程若缺乏一致規則，容易造成資訊落差、追蹤困難與執行成本增加。",
          solution:
            "我將回報流程拆解成明確步驟，重新整理資訊傳遞方式與執行邏輯，讓整體流程更容易被理解與操作。",
          role: "我負責流程梳理、結構規劃與使用情境整理。",
          reflection:
            "這個專案讓我發現，很多行政問題其實可以透過更好的流程設計與資訊整理被改善。",
        },
        {
          id: "personal-automation-tools",
          tag: "Automation",
          title: "個人自動化工具",
          summary: "從真實使用情境出發，持續優化個人工作流。",
          imageType: "placeholder",
          accent: "#3C9D94",
          monogram: "AU",
          background:
            "這些工具來自日常工作與學習情境中的真實需求，希望減少重複操作，讓流程更順。",
          problem:
            "當任務重複、資訊分散或需要跨工具操作時，容易消耗大量時間與注意力。",
          solution:
            "我使用自動化與流程工具，把常見任務整理成可重複使用的工作流，逐步改善效率與可持續性。",
          role: "我負責使用情境分析、流程設計與工具實作。",
          reflection:
            "這類專案讓我更熟悉如何從小問題出發，逐步建立真正可用的系統。",
        },
        {
          id: "e-casso-art-brand",
          tag: "Brand / Event",
          title: "e-casso 藝術品牌",
          summary: "把抽象主題轉成可以參與、創作與感受的體驗。",
          imageType: "placeholder",
          accent: "#9A5ACB",
          monogram: "EC",
          background:
            "這個專案從品牌與藝術體驗的結合出發，嘗試把較抽象的概念轉譯成可被參與的形式。",
          problem:
            "抽象主題若缺少具體的參與方式，容易停留在視覺層面，難以形成真正的體驗記憶。",
          solution:
            "我以品牌語言、互動設計與活動情境為基礎，規劃能讓人進入主題、參與創作與感受內容的體驗方式。",
          role: "我負責概念轉譯、體驗設計與整體表達方向整理。",
          reflection:
            "這個專案讓我更理解如何把抽象內容轉成有節奏、有參與感的體驗。",
        },
      ] as ProjectSection[],
    },
    en: {
      hero: {
        eyebrow: "PROJECT ARCHIVE",
        title: "Projects",
        text: "A collection of projects where I turn ideas into experiences, tools, and workable systems.",
      },
      labels: {
        background: "Background",
        problem: "Goal",
        solution: "Experience Flow",
        role: "My Role",
        reflection: "Reflection",
      },
      backToHome: "Back to Home",
      projects: [
        {
          id: "gesture-interaction",
          tag: "Interactive Experience",
          title: "Gesture Interaction Experience | Emotional Awareness",
          summary:
            "An interactive experience combining physical tickets, digital interaction, and gesture control to make abstract emotions visible and perceivable.",
          imageType: "image",
          imageSrc: heroImage1,
          accent: "#3FAF68",
          monogram: "GI",
          background:
            "In a co-hosted event with a life coach, I designed an experience flow that combined physical tickets with digital interaction.",
          problem:
            "The goal was to transform abstract emotional awareness into something participants could directly see, feel, and engage with on site.",
          solution:
            "Participants aimed the barcode on their ticket at the on-site computer camera. I used my phone as the remote control side of the interaction flow, and combined gesture input to affect the character’s state on screen in real time. This turned abstract emotions into visible and experiential changes. The whole experience connected entry, interaction, and ending into a complete participation flow.",
          role:
            "I was responsible for the overall experience flow design, interaction logic planning, the concept linking barcode tickets with digital visuals, and the design of the on-site interaction control method.",
          reflection:
            "This project made me more certain that I am good at translating abstract concepts into interactive experiences, and helped me better understand how physical context, flow design, and digital interaction can work together.",
        },
        {
          id: "interactive-exhibition",
          tag: "Experience Design",
          title: "Interactive Exhibition Scene",
          summary:
            "Bringing digital interaction into physical space for real participation.",
          imageType: "image",
          imageSrc: heroImage2,
          accent: "#8D63D2",
          monogram: "EX",
          background:
            "I wanted to explore not only screen-based interaction, but also how people perceive, participate, and respond within a real-world environment.",
          problem:
            "Digital experiences often remain confined to a single device, but in event or exhibition settings, interaction needs to be more intuitive and contextual.",
          solution:
            "Starting from spatial flow, participation patterns, and interaction rhythm, I designed an experience that lets people enter the context naturally.",
          role:
            "I was responsible for concept ideation, interaction flow planning, and the overall exhibition direction.",
          reflection:
            "This project taught me that experience design in physical contexts is not just about visuals, but about how people approach, understand, and choose to participate.",
        },
        {
          id: "discord-matching-system",
          tag: "Community System",
          title: "Discord Matching System",
          summary:
            "A community tool that helps event grouping and flow run more smoothly.",
          imageType: "placeholder",
          accent: "#4B84D9",
          monogram: "DC",
          background:
            "This project came from real needs in community events, with the goal of making matching, notifications, and grouping more systematic.",
          problem:
            "Grouping, notifications, and flow arrangements in events can easily become messy, increasing the burden for both organizers and participants.",
          solution:
            "I integrated matching logic, message organization, and user flow into a clearer community tool structure so the process could be executed more smoothly.",
          role:
            "I was responsible for requirement mapping, flow design, and tool structure planning.",
          reflection:
            "This project confirmed my interest in turning messy processes into workable systems.",
        },
        {
          id: "leave-reporting-system",
          tag: "Workflow Tool",
          title: "Leave Reporting System",
          summary:
            "A clearer and more workable reporting flow for administrative needs.",
          imageType: "placeholder",
          accent: "#B1784F",
          monogram: "WF",
          background:
            "This project came from direct observation of administrative work, with the goal of organizing scattered reporting methods into a clearer mechanism.",
          problem:
            "When leave and reporting processes lack consistent structure, they can create information gaps, tracking difficulties, and extra execution cost.",
          solution:
            "I broke the reporting process into clear steps and reorganized the information flow and execution logic to make the whole process easier to understand and operate.",
          role:
            "I was responsible for flow analysis, structure planning, and use-case organization.",
          reflection:
            "This project made me realize that many administrative problems can be improved through better flow design and information organization.",
        },
        {
          id: "personal-automation-tools",
          tag: "Automation",
          title: "Personal Automation Tools",
          summary:
            "Small tools built from real use cases to improve personal workflow.",
          imageType: "placeholder",
          accent: "#3C9D94",
          monogram: "AU",
          background:
            "These tools came from everyday work and learning situations, with the goal of reducing repetitive actions and improving workflow.",
          problem:
            "When tasks are repetitive, information is scattered, or multiple tools are involved, a lot of time and attention can be lost.",
          solution:
            "I used automation and workflow tools to turn common tasks into reusable processes, gradually improving efficiency and sustainability.",
          role:
            "I was responsible for use-case analysis, flow design, and tool implementation.",
          reflection:
            "These projects helped me become more familiar with building truly useful systems from small but real problems.",
        },
        {
          id: "e-casso-art-brand",
          tag: "Brand / Event",
          title: "e-casso Art Brand",
          summary:
            "Turning abstract topics into participatory and creative experiences.",
          imageType: "placeholder",
          accent: "#9A5ACB",
          monogram: "EC",
          background:
            "This project started from the combination of brand and art experience, exploring how abstract concepts can be translated into something participatory.",
          problem:
            "Abstract topics often remain only visual if there is no clear way for people to engage, making them harder to remember as lived experiences.",
          solution:
            "I used brand language, interaction design, and event context to shape ways for people to enter the theme, participate creatively, and experience the content.",
          role:
            "I was responsible for concept translation, experience design, and overall expression direction.",
          reflection:
            "This project helped me better understand how to turn abstract content into an experience with rhythm and participation.",
        },
      ] as ProjectSection[],
    },
  };

  const t = content[lang];

  const renderProjectMedia = (project: ProjectSection) => {
    if (project.id === "gesture-interaction") {
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: isMobile ? "260px" : "420px",
            backgroundColor: "#111",
          }}
        >
          <img
            src={gestureImages[gestureImageIndex]}
            alt={`${project.title} ${gestureImageIndex + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <button
            onClick={prevGestureImage}
            aria-label={lang === "zh" ? "上一張圖片" : "Previous image"}
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.24)",
              backgroundColor: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.16)",
            }}
          >
            ←
          </button>

          <button
            onClick={nextGestureImage}
            aria-label={lang === "zh" ? "下一張圖片" : "Next image"}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.24)",
              backgroundColor: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "18px",
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
              bottom: "14px",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              padding: "6px 10px",
              borderRadius: "999px",
              backgroundColor: "rgba(0,0,0,0.22)",
              backdropFilter: "blur(6px)",
            }}
          >
            {gestureImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setGestureImageIndex(index)}
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
                    gestureImageIndex === index
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      );
    }

    if (project.imageType === "image" && project.imageSrc) {
      return (
        <img
          src={project.imageSrc}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            minHeight: isMobile ? "260px" : "100%",
          }}
        />
      );
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: isMobile ? "260px" : "420px",
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
            width: "88px",
            height: "88px",
            borderRadius: "22px",
            background: `linear-gradient(135deg, ${project.accent}, #ffffff)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1f1f1f",
            fontSize: "28px",
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
    );
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
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#1f1f1f",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.13em",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            ← {t.backToHome}
          </Link>

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
            maxWidth: "980px",
            margin: "0 auto",
            padding: isMobile ? "28px 18px 28px" : "42px 24px 34px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.58)",
              border: "1px solid rgba(70,60,45,0.06)",
              borderRadius: isMobile ? "28px" : "34px",
              padding: isMobile ? "24px 20px" : "30px 32px",
              boxShadow: "0 14px 40px rgba(81, 64, 42, 0.06)",
              textAlign: "center",
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
                marginBottom: "16px",
              }}
            >
              {t.hero.eyebrow}
            </div>

            <h1
              style={{
                margin: "0 0 14px 0",
                fontSize: isMobile ? "32px" : "44px",
                lineHeight: 1.1,
                color: "#2a2a2a",
                fontFamily:
                  "'Times New Roman', Georgia, 'Noto Serif TC', serif",
              }}
            >
              {t.hero.title}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: isMobile ? "17px" : "18px",
                lineHeight: 1.8,
                color: "#5b5750",
                maxWidth: "720px",
                marginInline: "auto",
              }}
            >
              {t.hero.text}
            </p>
          </div>
        </section>

        <section
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: isMobile ? "10px 18px 110px" : "16px 24px 140px",
            display: "grid",
            gap: isMobile ? "18px" : "24px",
          }}
        >
          {t.projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              style={{
                backgroundColor: "rgba(255,255,255,0.76)",
                borderRadius: isMobile ? "24px" : "28px",
                border: "1px solid rgba(70,60,45,0.06)",
                boxShadow: "0 10px 28px rgba(81, 64, 42, 0.05)",
                overflow: "hidden",
                scrollMarginTop: "110px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1.08fr 0.92fr",
                  alignItems: "stretch",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    minHeight: isMobile ? "260px" : "100%",
                    background:
                      project.imageType === "placeholder"
                        ? `linear-gradient(160deg, ${project.accent}20 0%, rgba(255,255,255,0.78) 48%, #efe8dc 100%)`
                        : "#111",
                  }}
                >
                  {renderProjectMedia(project)}

                  <div
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "16px",
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
                    padding: isMobile ? "22px 20px" : "28px 28px 26px",
                    display: "grid",
                    gap: "18px",
                    alignContent: "start",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        margin: "0 0 10px 0",
                        fontSize: isMobile ? "28px" : "34px",
                        lineHeight: 1.15,
                        color: "#232323",
                      }}
                    >
                      {project.title}
                    </h2>

                    <p
                      style={{
                        margin: 0,
                        fontSize: isMobile ? "16px" : "17px",
                        lineHeight: 1.85,
                        color: "#5b5750",
                        fontWeight: 600,
                      }}
                    >
                      {project.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          color: "#1f1f1f",
                        }}
                      >
                        {t.labels.background}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.85,
                          color: "#5b5750",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.background}
                      </p>
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          color: "#1f1f1f",
                        }}
                      >
                        {t.labels.problem}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.85,
                          color: "#5b5750",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          color: "#1f1f1f",
                        }}
                      >
                        {t.labels.solution}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.85,
                          color: "#5b5750",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          color: "#1f1f1f",
                        }}
                      >
                        {t.labels.role}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.85,
                          color: "#5b5750",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.role}
                      </p>
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          color: "#1f1f1f",
                        }}
                      >
                        {t.labels.reflection}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.85,
                          color: "#5b5750",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {project.reflection}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}