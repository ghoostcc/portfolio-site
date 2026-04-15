import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// gesture-interaction
import gestureDetail1 from "./assets/images/projects/gesture-interaction/detail-1.png";
import gestureDetail2 from "./assets/images/projects/gesture-interaction/detail-2.png";
import gestureDemo from "./assets/images/projects/gesture-interaction/demo.gif";

// interactive-exhibition
import exhibitionDetail1 from "./assets/images/projects/interactive-exhibition/detail-1.png";
import exhibitionDetail2 from "./assets/images/projects/interactive-exhibition/detail-2.png";
import exhibitionDemo from "./assets/images/projects/interactive-exhibition/demo.gif";

// discord-matching
import discordDetail1 from "./assets/images/projects/discord-matching/detail-1.png";
import discordDetail2 from "./assets/images/projects/discord-matching/detail-2.png";
import discordDemo from "./assets/images/projects/discord-matching/demo.gif";

// leave-system
import leaveDetail1 from "./assets/images/projects/leave-system/detail-1.png";
import leaveDetail2 from "./assets/images/projects/leave-system/detail-2.png";
import leaveDemo from "./assets/images/projects/leave-system/demo.gif";

// automation-tools
import automationDetail1 from "./assets/images/projects/automation-tools/detail-1.png";
import automationDetail2 from "./assets/images/projects/automation-tools/detail-2.png";
import automationDemo from "./assets/images/projects/automation-tools/demo.gif";

// e-casso
import ecassoDetail1 from "./assets/images/projects/e-casso/detail-1.png";
import ecassoDetail2 from "./assets/images/projects/e-casso/detail-2.png";
import ecassoDemo from "./assets/images/projects/e-casso/demo.gif";

type Lang = "zh" | "en";

type ProjectSection = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  accent: string;
  monogram: string;
  introBlocks: string[];
  instagramLink?: string;
};

export default function ProjectsPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const location = useLocation();

  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({
    "gesture-interaction": 0,
    "interactive-exhibition": 0,
    "discord-matching-system": 0,
    "leave-reporting-system": 0,
    "personal-automation-tools": 0,
    "e-casso-art-brand": 0,
  });

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
      },
      backToHome: "返回首頁",
      introLabel: "專案介紹",
      instagramLabel: "IG 連結",
      projects: [
        {
          id: "gesture-interaction",
          tag: "Interactive Experience",
          title: "手勢互動體驗｜情緒覺察",
          summary:
            "結合實體票券、數位互動與手勢操作，將抽象情緒轉化為可被看見與感受的變化。",
          accent: "#3FAF68",
          monogram: "GI",
          introBlocks: [
            "在與人生教練合辦的活動中，\n我設計了一套結合「實體票券」與「數位互動」的體驗流程，",
            "參與者透過票券上的條碼對準現場電腦鏡頭，\n我透過手機進行遠端控制，作為互動流程的控制端，\n並結合手勢操作即時影響畫面中的角色狀態\n讓「抽象情緒」轉化為可以被看見與感受的變化。",
            "整體體驗串連「進場 → 互動 → 結束」，\n形成一個完整的參與流程。",
          ],
        },
        {
          id: "interactive-exhibition",
          tag: "Experience Design",
          title: "互動視覺實驗｜TouchDesigner",
          summary:
            "以個人感受為起點，結合互動視覺與空間 mapping，讓觀看成為可以被參與的展演體驗。",
          accent: "#8D63D2",
          monogram: "TD",
          introBlocks: [
            "在 TouchDesigner 工作坊中，\n我以「我所觀看的風景」與「我是誰」為主題，\n嘗試將個人的感受轉化為可被操作的互動視覺。",
            "我以現場的方盒子作為載體進行 mapping，\n讓畫面不只是呈現，而是與空間產生關係，\n成為一個可以被觀看與參與的展演裝置。",
            "整體設計包含三個主要互動：\n\n1. 啟動機制  \n透過手機遙控觸發，作為整個展演的開始，\n讓觀眾從一個明確的「進入點」進入體驗。\n\n2. 風景互動  \n將台中地標轉化為視覺素材，\n觀眾可以透過手勢切換畫面，並進行放大與縮小，\n在互動中重新觀看熟悉的風景。\n\n3. 藝術表達  \n透過手機觸控操作，在畫面中生成筆觸，\n讓使用者能直接在作品上留下痕跡，\n形成一種即時的創作與參與。",
          ],
        },
        {
          id: "discord-matching-system",
          tag: "Community System",
          title: "社群配對系統｜活動流程設計",
          summary:
            "從配對邏輯與需求整理出發，建立一套更有效率且可持續運作的活動配對系統。",
          accent: "#4B84D9",
          monogram: "DC",
          introBlocks: [
            "這個專案是為 Podcast《電扶梯走左邊》的社群活動「電粉咖啡廳」所設計，\n目的是讓參與者之間的配對過程更有效率且可持續運作。",
            "在原本的活動中，配對主要仰賴人工處理，\n不僅耗時，也容易出現重複或遺漏的情況。\n\n因此我先從「配對邏輯」與「需求」開始整理，\n建立一套能夠考慮過往紀錄與條件的配對方式，\n讓整個流程更有系統性。",
            "初期我使用 n8n 建立自動化工作流程，\n後續為配合團隊實際使用情境，\n我改以 Google Sheets 與 Apps Script 建構系統，\n讓資料管理與操作更加直觀，\n並降低系統出錯與當機的風險。",
          ],
        },
        {
          id: "leave-reporting-system",
          tag: "Workflow Tool",
          title: "請假回報系統｜行政流程優化",
          summary:
            "重新整理請假流程，透過表單、試算表與自動通知機制，讓行政作業更直覺且有效率。",
          accent: "#B1784F",
          monogram: "WF",
          introBlocks: [
            "這個專案是為逢甲大學通識中心所設計，\n目的是讓原本繁瑣的請假流程變得更直覺且有效率。",
            "在原有流程中，學生與老師之間需要多次來回確認，\n不僅耗時，也容易產生資訊不一致的情況。\n\n因此我重新整理整個請假流程，\n透過 Google Forms、Google Sheets 與 Apps Script，\n我建構了一套自動化流程，\n讓學生可以快速完成請假申請，\n並即時通知相關人員。",
            "同時透過 Script 觸發器，\n系統可以在狀態變更時自動發送通知，\n讓老師與學生都能即時掌握審核結果與申請狀況。",
          ],
        },
        {
          id: "personal-automation-tools",
          tag: "Automation",
          title: "個人自動化工具｜工作流設計",
          summary:
            "從閱讀紀錄到知識儲存，將日常需求拆解成可持續運作的個人工作流系統。",
          accent: "#3C9D94",
          monogram: "AU",
          introBlocks: [
            "這個專案源於我在日常使用中的需求，\n在過程中，我將需求拆分為兩個主要情境：\n「閱讀紀錄」與「知識儲存」。",
            "在閱讀紀錄中，\n我以 LINE 官方帳號作為輸入介面，\n讓自己可以隨時記錄書籍進度、佳句與想閱讀的書單。\n\n透過 Make 建立自動化流程，\n將資料整理後傳送至 Airtable，\n並利用其關聯功能，清楚呈現閱讀進度與內容之間的關係。",
            "在知識儲存部分，\n我以 Google Sheets 與 Apps Script 為基礎，\n並結合手機捷徑功能，\n讓我能在各個平台透過「分享」快速儲存內容。\n\n同時在紀錄時加入簡單說明，\n減少過去隨意收藏卻難以再利用的問題。",
          ],
        },
        {
          id: "e-casso-art-brand",
          tag: "Brand / Event",
          title: "E-casso 藝術品牌｜體驗轉譯與活動設計",
          summary:
            "以藝術作為媒介，將抽象主題轉化為可以被參與、互動與感受的活動體驗。",
          accent: "#9A5ACB",
          monogram: "EC",
          instagramLink: "https://www.instagram.com/ecasso_acy/",
          introBlocks: [
            "E-casso 是一個以藝術作為媒介的體驗品牌，\n致力於將不同主題轉化為可以被參與與感受的形式。",
            "在每一次活動中，我們會從一個主題出發，\n思考如何將其轉譯為「可以被創作與互動」的體驗，\n讓參與者不是被動接收，而是在過程中實際參與。\n\n過去的主題包含 AI × 音樂（Suno）、英文對話社群、瑪雅圖騰等，\n將原本抽象或知識性的內容轉化為可被感受的活動形式。",
            "在設計活動時，\n我特別關注整體參與流程與現場氛圍，\n從內容安排到互動環節，\n都會思考如何讓體驗具有回饋與層次。\n\n同時也透過「超乎常理的款待」與細節設計，\n在過程中創造驚喜，\n讓參與者在體驗之後能留下更深刻的感受。",
          ],
        },
      ] as ProjectSection[],
    },
    en: {
      hero: {
        eyebrow: "PROJECT ARCHIVE",
        title: "Projects",
      },
      backToHome: "Back to Home",
      introLabel: "Project Overview",
      instagramLabel: "Instagram",
      projects: [
        {
          id: "gesture-interaction",
          tag: "Interactive Experience",
          title: "Gesture Interaction Experience | Emotional Awareness",
          summary:
            "Combining physical tickets, digital interaction, and gesture input to turn abstract emotions into visible and perceivable changes.",
          accent: "#3FAF68",
          monogram: "GI",
          introBlocks: [
            "In a co-hosted event with a life coach,\nI designed an experience flow that combined physical tickets and digital interaction.",
            "Participants aligned the barcode on their ticket with the on-site computer camera.\nI used my phone as the remote control side of the interaction flow,\nand combined gesture input to affect the character state on screen in real time,\nturning abstract emotions into visible and perceivable changes.",
            "The whole experience connected entry → interaction → ending,\nforming a complete participation flow.",
          ],
        },
        {
          id: "interactive-exhibition",
          tag: "Experience Design",
          title: "Interactive Visual Experiment | TouchDesigner",
          summary:
            "Starting from personal perception, this project combines interactive visuals and spatial mapping to turn viewing into a participatory performance experience.",
          accent: "#8D63D2",
          monogram: "TD",
          introBlocks: [
            "In a TouchDesigner workshop,\nI explored the themes of “the landscapes I see” and “who I am”,\ntrying to transform personal feelings into interactive visuals.",
            "I used a box in the physical space as the mapping object,\nso the visuals were not only displayed,\nbut also connected to the surrounding space and became part of a participatory installation.",
            "The design included three main interactions:\n\n1. Triggering mechanism\nActivated by mobile remote control as the entry point of the experience.\n\n2. Landscape interaction\nTaichung landmarks were transformed into visual material,\nand users could switch, zoom in, and zoom out through gestures.\n\n3. Artistic expression\nThrough mobile touch input, users could generate brush strokes on the screen,\nleaving traces directly on the work as a form of live participation.",
          ],
        },
        {
          id: "discord-matching-system",
          tag: "Community System",
          title: "Community Matching System | Event Flow Design",
          summary:
            "A matching system built from workflow logic and participant needs to make community events more efficient and sustainable.",
          accent: "#4B84D9",
          monogram: "DC",
          introBlocks: [
            "This project was designed for the community event “電粉咖啡廳” by the podcast 《電扶梯走左邊》,\nwith the goal of making participant matching more efficient and sustainable.",
            "Originally, the matching process relied heavily on manual work,\nwhich was time-consuming and prone to duplication or omissions.\n\nSo I first organized the matching logic and user needs,\nand built a system that could take previous records and conditions into account.",
            "At first, I used n8n to build the automation workflow.\nLater, to better fit the team’s real use case,\nI rebuilt the system with Google Sheets and Apps Script,\nwhich made data handling more intuitive\nand reduced the risk of errors or crashes.",
          ],
        },
        {
          id: "leave-reporting-system",
          tag: "Workflow Tool",
          title: "Leave Reporting System | Administrative Flow Optimization",
          summary:
            "A redesigned leave process using forms, sheets, and automated notifications to make administrative work more intuitive and efficient.",
          accent: "#B1784F",
          monogram: "WF",
          introBlocks: [
            "This project was designed for the General Education Center at Feng Chia University,\nwith the goal of making the original leave request process more intuitive and efficient.",
            "In the original process, students and teachers had to confirm information back and forth multiple times,\nwhich was time-consuming and often led to inconsistent information.\n\nSo I reorganized the whole leave process\nand built an automated flow using Google Forms, Google Sheets, and Apps Script.",
            "With script triggers,\nthe system could automatically send notifications whenever the status changed,\nso both teachers and students could stay updated on the application and review result in real time.",
          ],
        },
        {
          id: "personal-automation-tools",
          tag: "Automation",
          title: "Personal Automation Tools | Workflow Design",
          summary:
            "A personal workflow system built from daily needs, covering reading records and knowledge capture.",
          accent: "#3C9D94",
          monogram: "AU",
          introBlocks: [
            "This project came from my everyday needs.\nDuring the process, I divided those needs into two main scenarios:\n“reading records” and “knowledge storage.”",
            "For reading records,\nI used a LINE official account as the input interface,\nso I could record reading progress, quotes, and future reading lists anytime.\n\nThrough Make,\nthe data was organized and sent to Airtable,\nwhere relational fields helped make the structure and progress clearer.",
            "For knowledge storage,\nI used Google Sheets and Apps Script as the foundation,\nand combined them with mobile shortcuts,\nso I could quickly save content from different platforms through the share action.\n\nI also added simple notes during capture,\nwhich reduced the problem of saving things casually but not being able to use them later.",
          ],
        },
        {
          id: "e-casso-art-brand",
          tag: "Brand / Event",
          title: "E-casso Art Brand | Experience Translation & Event Design",
          summary:
            "An experience brand that uses art as a medium to translate abstract themes into participatory and interactive event formats.",
          accent: "#9A5ACB",
          monogram: "EC",
          instagramLink: "https://www.instagram.com/ecasso_acy/",
          introBlocks: [
            "E-casso is an experience brand that uses art as its medium,\ndedicated to transforming different themes into forms that can be participated in and felt.",
            "In each event, we start from a theme\nand think about how to translate it into an experience that can be created and interacted with,\nso participants are not passive receivers but active participants in the process.\n\nPast themes include AI × Music (Suno), English conversation communities, and Mayan totems.",
            "When designing events,\nI pay close attention to the full participation flow and the atmosphere on site.\nFrom content arrangement to interaction segments,\nI think about how to create layers and feedback within the experience.\n\nAt the same time,\nthrough unexpected hospitality and detail design,\nI try to create moments of surprise that leave a deeper impression after the event.",
          ],
        },
      ] as ProjectSection[],
    },
  };

  const t = content[lang];

  const projectImages = useMemo<Record<string, string[]>>(
    () => ({
      "gesture-interaction": [gestureDetail1, gestureDetail2, gestureDemo],
      "interactive-exhibition": [
        exhibitionDetail1,
        exhibitionDetail2,
        exhibitionDemo,
      ],
      "discord-matching-system": [discordDetail1, discordDetail2, discordDemo],
      "leave-reporting-system": [leaveDetail1, leaveDetail2, leaveDemo],
      "personal-automation-tools": [
        automationDetail1,
        automationDetail2,
        automationDemo,
      ],
      "e-casso-art-brand": [ecassoDetail1, ecassoDetail2, ecassoDemo],
    }),
    []
  );

  const nextImage = (projectId: string) => {
    const total = projectImages[projectId]?.length || 1;
    setImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) + 1) % total,
    }));
  };

  const prevImage = (projectId: string) => {
    const total = projectImages[projectId]?.length || 1;
    setImageIndexes((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] ?? 0) === 0 ? total - 1 : (prev[projectId] ?? 0) - 1,
    }));
  };

  const goToImage = (projectId: string, index: number) => {
    setImageIndexes((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const renderProjectMedia = (project: ProjectSection) => {
    const images = projectImages[project.id] || [];
    const currentIndex = imageIndexes[project.id] ?? 0;
    const currentImage = images[currentIndex];

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: isMobile ? "260px" : "420px",
          backgroundColor: "#f2efe9",
        }}
      >
        <img
          src={currentImage}
          alt={`${project.title} ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => prevImage(project.id)}
              aria-label={lang === "zh" ? "上一張圖片" : "Previous image"}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                backgroundColor: "rgba(86, 126, 172, 0.72)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
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
              onClick={() => nextImage(project.id)}
              aria-label={lang === "zh" ? "下一張圖片" : "Next image"}
              style={{
                position: "absolute",
                right: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                backgroundColor: "rgba(86, 126, 172, 0.72)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
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
                backgroundColor: "rgba(0,0,0,0.18)",
                backdropFilter: "blur(6px)",
              }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(project.id, index)}
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
                      currentIndex === index
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.45)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </>
        )}
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
            padding: isMobile ? "28px 18px 18px" : "42px 24px 24px",
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
              margin: 0,
              fontSize: isMobile ? "32px" : "44px",
              lineHeight: 1.1,
              color: "#1f2f44",
              fontFamily: "'Times New Roman', Georgia, 'Noto Serif TC', serif",
            }}
          >
            {t.hero.title}
          </h1>
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
                backgroundColor: "rgba(255,255,255,0.78)",
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
                    background: "#f2efe9",
                  }}
                >
                  {renderProjectMedia(project)}

                  <div
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "16px",
                      display: "inline-block",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(255,255,255,0.94)",
                      color: "#6c6358",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(70,60,45,0.08)",
                    }}
                  >
                    {project.tag}
                  </div>
                </div>

                <div
                  style={{
                    padding: isMobile ? "26px 20px" : "34px 36px 34px",
                    display: "grid",
                    gap: "28px",
                    alignContent: "start",
                    textAlign: "left",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h2
                      style={{
                        margin: "0 0 14px 0",
                        fontSize: isMobile ? "30px" : "40px",
                        lineHeight: 1.15,
                        color: "#1f2f44",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        textAlign: "left",
                      }}
                    >
                      {project.title}
                    </h2>

                    <p
                      style={{
                        margin: 0,
                        fontSize: isMobile ? "16px" : "17px",
                        lineHeight: 1.95,
                        color: "#6b655d",
                        fontWeight: 400,
                        textAlign: "left",
                        maxWidth: "540px",
                      }}
                    >
                      {project.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "18px",
                      textAlign: "left",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        lineHeight: 1.4,
                        color: "#2d2d2d",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        textAlign: "left",
                      }}
                    >
                      {t.introLabel}
                    </h3>

                    {project.instagramLink && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: isMobile ? "column" : "row",
                          alignItems: isMobile ? "flex-start" : "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#6b655d",
                            fontWeight: 600,
                          }}
                        >
                          {t.instagramLabel}
                        </span>
                        <a
                          href={project.instagramLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "14px",
                            color: "#7d5fbc",
                            textDecoration: "none",
                            wordBreak: "break-all",
                          }}
                        >
                          {project.instagramLink}
                        </a>
                      </div>
                    )}

                    {project.introBlocks.map((block, index) => (
                      <div
                        key={`${project.id}-block-${index}`}
                        style={{
                          display: "grid",
                          gap: "18px",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            lineHeight: 2.05,
                            color: "#4f4a43",
                            whiteSpace: "pre-line",
                            textAlign: "left",
                          }}
                        >
                          {block}
                        </p>

                        {index < project.introBlocks.length - 1 && (
                          <div
                            style={{
                              width: "36px",
                              height: "1px",
                              backgroundColor: "rgba(95, 86, 74, 0.28)",
                            }}
                          />
                        )}
                      </div>
                    ))}
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