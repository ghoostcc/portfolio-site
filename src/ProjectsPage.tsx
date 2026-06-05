import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// gesture-interaction
import gestureDetail1 from "./assets/images/projects/gesture-interaction/detail-1.png";
import gestureDemo from "./assets/images/projects/gesture-interaction/demo.gif";

// interactive-exhibition
import exhibitionDetail1 from "./assets/images/projects/interactive-exhibition/detail-1.png";

// discord-matching
import discordDetail1 from "./assets/images/projects/discordMatching-detail-1.png";

// leave-system
import leaveDetail1 from "./assets/images/projects/leave-system/detail-1.png";

// invitation-system
import invitationManagementCover from "./assets/images/invitation-management-cover.png";
import invitationManagementDetail1 from "./assets/images/projects/invitation-management-detail1.png";

// group-system
import groupLotteryCover from "./assets/images/group-lottery-cover.png";
import groupLotteryDetail1 from "./assets/images/projects/group-lottery-deytail1.png";
import groupLotteryDetail2 from "./assets/images/projects/group-lottery-deytail2.png";
import groupLotteryDetail3 from "./assets/images/projects/group-lottery-deytail3.png";
import groupLotteryDetail4 from "./assets/images/projects/group-lottery-deytail4.png";

// automation-tools
import automationDetail1 from "./assets/images/projects/automation-tools/detail-1.png";
import automationDetail2 from "./assets/images/projects/automation-tools/detail-2.png";
import automationDemo from "./assets/images/projects/automation-tools/demo.gif";

// e-casso
import ecassoDetail1 from "./assets/images/projects/e-casso/detail-1.png";
import ecassoDetail2 from "./assets/images/projects/e-casso/detail-2.png";
import ecassoDetail3 from "./assets/images/projects/e-casso/detail-3.png";

type Lang = "zh" | "en";

type ProjectDetailSection = {
  heading: string;
  body: string[];
};

type ProjectSection = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  accent: string;
  monogram: string;
  sections: ProjectDetailSection[];
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
    "invitation-system": 0,
    "group-system": 0,
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
      categoryLabel: "分類",
      instagramLabel: "IG 連結",
      projects: [
        {
          id: "discord-matching-system",
          tag: "Workflow & Systems",
          title: "社群配對系統｜活動流程設計",
          summary:
            "從配對邏輯與需求整理出發，建立更有效率且可持續運作的社群配對系統。",
          accent: "#4B84D9",
          monogram: "DC",
          sections: [
            {
              heading: "專案背景",
              body: [
                "為 Podcast《電扶梯走左邊》的社群活動「電粉咖啡廳」所設計，\n希望讓參與者之間的配對流程更加系統化。",
              ],
            },
            {
              heading: "遇到的問題",
              body: [
                "原本配對主要仰賴人工處理，\n容易耗時、遺漏資料，也難以保留配對紀錄。",
              ],
            },
            {
              heading: "我的解法",
              body: [
                "從「需求」與「配對邏輯」開始整理，\n建立可依照條件與偏好進行配對的流程。",
                "初期使用 n8n 建立流程，\n後續改以 Google Sheets 與 Apps Script 重構，\n讓資料管理與操作更加直觀。",
              ],
            },
            {
              heading: "成果",
              body: ["降低人工處理負擔，\n讓整體配對流程更穩定且可持續運作。"],
            },
          ],
        },
        {
          id: "leave-reporting-system",
          tag: "Workflow & Systems",
          title: "請假回報系統｜行政流程優化",
          summary:
            "重新整理請假流程，透過表單、試算表與自動通知機制，提升行政效率。",
          accent: "#B1784F",
          monogram: "WF",
          sections: [
            {
              heading: "專案背景",
              body: ["為逢甲大學通識中心所設計，\n希望改善繁瑣的請假回報流程。"],
            },
            {
              heading: "遇到的問題",
              body: ["學生與老師之間需要多次確認，\n容易造成資訊不同步與重複溝通。"],
            },
            {
              heading: "我的解法",
              body: [
                "透過 Google Forms、Google Sheets 與 Apps Script，",
                "建立申請、審核與通知流程，\n並在狀態變更時自動寄送通知。",
              ],
            },
            {
              heading: "成果",
              body: ["減少人工確認成本，\n讓學生與教師都能即時掌握申請狀況。"],
            },
          ],
        },
        {
          id: "invitation-system",
          tag: "Workflow & Systems",
          title: "展覽邀請管理系統｜名單流程整合",
          summary:
            "建立展覽邀請名單管理系統，讓名單收集、整理與同步流程更有效率。",
          accent: "#6A9CF8",
          monogram: "IV",
          sections: [
            {
              heading: "專案背景",
              body: ["為年底多人藝術聯展籌備流程所設計，\n目的是讓邀請名單管理更有系統。"],
            },
            {
              heading: "遇到的問題",
              body: [
                "多位參展者共同維護資料，\n容易造成重複確認、資料遺漏與版本不一致。",
              ],
            },
            {
              heading: "我的解法",
              body: [
                "透過 Google Sheets、Apps Script，",
                "參展者登入後，\n系統會確認身分並記住登入狀態。",
                "每位參展者可自行新增邀請對象，\n並即時查看目前名單內容。",
                "後台則能同步掌握邀請關係，\n清楚知道每位受邀者的來源。",
              ],
            },
            {
              heading: "成果",
              body: ["系統目前仍持續使用中，\n有效降低人工整理成本並提升資訊同步效率。"],
            },
          ],
        },
        {
          id: "group-system",
          tag: "Event Tool",
          title: "活動分組系統｜即時抽籤體驗",
          summary: "為活動設計多人即時抽籤與分組流程，提升現場互動與參與感。",
          accent: "#4DAA8C",
          monogram: "GR",
          sections: [
            {
              heading: "專案背景",
              body: ["為活動現場所設計的分組工具，\n希望讓多人分組更快速且具互動性。"],
            },
            {
              heading: "遇到的問題",
              body: ["傳統紙本抽籤與人工分組，\n容易耗費時間，也增加工作人員負擔。"],
            },
            {
              heading: "我的解法",
              body: [
                "設計主持端與參與端同步的抽籤流程，",
                "主持人能快速掌控分組，\n參與者也能即時看到結果。",
                "讓抽籤不只是流程，\n而成為活動中的互動體驗。",
              ],
            },
            {
              heading: "成果",
              body: ["提升現場節奏與參與感，\n讓分組流程更加流暢。"],
            },
          ],
        },
        {
          id: "personal-automation-tools",
          tag: "Workflow & Systems",
          title: "個人自動化工具｜工作流設計",
          summary:
            "從閱讀紀錄到知識儲存，將日常需求拆解成可持續運作的個人工作流。",
          accent: "#3C9D94",
          monogram: "AU",
          sections: [
            {
              heading: "專案背景",
              body: [
                "源自於日常閱讀與資訊整理需求，",
                "希望建立一套能夠快速記錄、\n整理與回顧內容的個人系統。",
              ],
            },
            {
              heading: "遇到的問題",
              body: [
                "閱讀內容、靈感與收藏資訊散落在不同平台，",
                "長期累積後，\n容易出現難以回顧與重新利用的情況。",
              ],
            },
            {
              heading: "我的解法",
              body: [
                "【閱讀紀錄】\n\n以 LINE 官方帳號作為輸入介面，",
                "透過 Make 建立自動化流程，\n將閱讀進度、書籍內容與想法整理至 Airtable，",
                "並利用關聯功能建立內容之間的連結。",
                "───",
                "【知識儲存】\n\n以 Google Sheets 與 Apps Script 為基礎，",
                "並結合手機捷徑功能，\n讓我能在各平台透過「分享」快速儲存內容。",
                "同時加入簡單說明，\n減少過去隨意收藏卻難以再利用的問題。",
              ],
            },
            {
              heading: "成果",
              body: [
                "建立持續演化中的個人工作流，",
                "讓資訊不只是被收藏，\n而能在需要時重新被找到與利用。",
              ],
            },
          ],
        },
        {
          id: "gesture-interaction",
          tag: "Interactive Experience",
          title: "手勢互動體驗｜情緒覺察",
          summary:
            "結合實體票券、數位互動與手勢操作，將情緒轉化為可被看見與感受的變化。",
          accent: "#3FAF68",
          monogram: "GI",
          sections: [
            {
              heading: "專案背景",
              body: [
                "於與人生教練合作的活動中，",
                "設計結合「實體票券」與「數位互動」的體驗流程。",
              ],
            },
            {
              heading: "遇到的問題",
              body: ["抽象的情緒感受不容易被表達，", "也難以在活動中形成共同體驗。"],
            },
            {
              heading: "我的解法",
              body: [
                "參與者先透過票券上的條碼進行驗證，",
                "再透過手機進行遠端控制，",
                "並以手勢操作即時影響畫面中的角色狀態，",
                "讓情緒變化能被看見與感受。",
              ],
            },
            {
              heading: "成果",
              body: [
                "形成「進場 → 互動 → 結束」的完整體驗流程，",
                "讓抽象情緒成為可參與的互動體驗。",
              ],
            },
          ],
        },
        {
          id: "interactive-exhibition",
          tag: "Experience Design",
          title: "互動視覺實驗｜TouchDesigner",
          summary:
            "以個人感受為起點，結合互動視覺與空間 Mapping，讓觀看成為可參與的展演體驗。",
          accent: "#8D63D2",
          monogram: "TD",
          sections: [
            {
              heading: "專案背景",
              body: [
                "於 TouchDesigner 工作坊中，",
                "以「我所觀看的風景」與「我是誰」為主題，\n嘗試將個人感受轉化為互動裝置。",
              ],
            },
            {
              heading: "遇到的問題",
              body: ["傳統展示多以單向觀看為主，", "觀眾較難與作品建立連結。"],
            },
            {
              heading: "我的解法",
              body: [
                "以現場方盒子作為載體進行 Mapping，",
                "設計三個主要互動：",
                "1. 啟動機制\n透過手機遙控作為進場方式。",
                "2. 展區互動\n以手勢切換畫面、縮放內容。",
                "3. 藝術表達\n透過手勢生成筆觸，\n讓觀者能直接參與作品。",
              ],
            },
            {
              heading: "成果",
              body: [
                "讓畫面不只是展示，",
                "而是與空間產生關係，\n形成可被觀看與參與的展演體驗。",
              ],
            },
          ],
        },
        {
          id: "e-casso-art-brand",
          tag: "Brand / Event",
          title: "E-casso 體驗創作品牌｜體驗轉譯與活動設計",
          summary:
            "以藝術作為媒介，將抽象主題轉化為可被參與、互動與感受的活動體驗。",
          accent: "#9A5ACB",
          monogram: "EC",
          instagramLink: "https://www.instagram.com/ecasso_acy/",
          sections: [
            {
              heading: "專案背景",
              body: [
                "E-casso 是一個以藝術作為媒介的體驗品牌，",
                "希望透過不同主題，\n創造具有參與感的活動內容。",
              ],
            },
            {
              heading: "遇到的問題",
              body: ["抽象概念往往難以被感受，", "參與者容易停留在被動接收資訊。"],
            },
            {
              heading: "我的解法",
              body: [
                "從主題出發，",
                "思考如何將內容轉譯為可互動的體驗。",
                "過去主題包含：\n\n• AI × 音樂（Suno）\n• 英文對話社群\n• 瑪雅圖騰\n• 超乎常理的款待設計",
                "讓參與者在活動過程中實際參與，\n而非只是被動接收。",
              ],
            },
            {
              heading: "成果",
              body: [
                "逐漸建立以「藝術 × 體驗 × 互動」為核心的品牌方向，",
                "並持續探索更多跨領域的活動可能。",
              ],
            },
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
      categoryLabel: "Category",
      instagramLabel: "Instagram",
      projects: [
        {
          id: "discord-matching-system",
          tag: "Workflow & Systems",
          title: "Community Matching System | Event Flow Design",
          summary:
            "Starting from matching logic and user needs, I built a more efficient and sustainable community matching system.",
          accent: "#4B84D9",
          monogram: "DC",
          sections: [
            {
              heading: "Project Background",
              body: [
                "Designed for the podcast community event “電粉咖啡廳” by 《電扶梯走左邊》,\nthis project aimed to make participant matching more systematic.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "The original matching process relied mainly on manual work,\nwhich was time-consuming, easy to miss data, and difficult to preserve matching records.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "I started by organizing the user needs and matching logic,\nand built a flow that could match participants based on conditions and preferences.",
                "I first used n8n to create the workflow,\nthen rebuilt it with Google Sheets and Apps Script\nto make data management and operation more intuitive.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The system reduced manual workload\nand made the overall matching process more stable and sustainable.",
              ],
            },
          ],
        },
        {
          id: "leave-reporting-system",
          tag: "Workflow & Systems",
          title: "Leave Reporting System | Administrative Flow Optimization",
          summary:
            "I reorganized the leave reporting process and improved administrative efficiency through forms, spreadsheets, and automated notifications.",
          accent: "#B1784F",
          monogram: "WF",
          sections: [
            {
              heading: "Project Background",
              body: [
                "Designed for the General Education Center at Feng Chia University,\nthis project aimed to improve a complicated leave reporting workflow.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Students and teachers had to confirm information back and forth multiple times,\nwhich often caused information gaps and repeated communication.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "Using Google Forms, Google Sheets, and Apps Script,",
                "I built an application, review, and notification workflow,\nwith automatic email notifications triggered when the status changed.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The system reduced the cost of manual confirmation\nand allowed both students and teachers to track application status in real time.",
              ],
            },
          ],
        },
        {
          id: "invitation-system",
          tag: "Workflow & Systems",
          title: "Exhibition Invitation Management System | Guest List Workflow Integration",
          summary:
            "I built an exhibition invitation management system to make guest list collection, organization, and synchronization more efficient.",
          accent: "#6A9CF8",
          monogram: "IV",
          sections: [
            {
              heading: "Project Background",
              body: [
                "Designed for the preparation process of a year-end group art exhibition,\nthis project aimed to make invitation list management more systematic.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Multiple exhibitors maintained the data together,\nwhich easily led to repeated checks, missing information, and inconsistent versions.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "Using Google Sheets, Apps Script,",
                "after exhibitors log in,\nthe system verifies their identity and remembers the login status.",
                "Each exhibitor can add their own invitees\nand view the current guest list in real time.",
                "The backend can also track invitation relationships\nand clearly identify the source of each invited guest.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The system is still in use,\neffectively reducing manual organization costs and improving information synchronization efficiency.",
              ],
            },
          ],
        },
        {
          id: "group-system",
          tag: "Event Tool",
          title: "Event Grouping System | Real-time Drawing Experience",
          summary:
            "I designed a real-time drawing and grouping flow for events to improve on-site interaction and participation.",
          accent: "#4DAA8C",
          monogram: "GR",
          sections: [
            {
              heading: "Project Background",
              body: [
                "Designed as a grouping tool for live events,\nthis project aimed to make multi-person grouping faster and more interactive.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Traditional paper-based drawing and manual grouping\ncan take time and increase the workload for event staff.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "I designed a synchronized drawing flow for both host and participants.",
                "The host can quickly control the grouping process,\nwhile participants can see their results immediately.",
                "The drawing process becomes not only a procedure,\nbut also an interactive moment in the event.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The system improved the on-site rhythm and sense of participation,\nmaking the grouping process smoother.",
              ],
            },
          ],
        },
        {
          id: "personal-automation-tools",
          tag: "Workflow & Systems",
          title: "Personal Automation Tools | Workflow Design",
          summary:
            "From reading records to knowledge storage, I broke daily needs into a sustainable personal workflow.",
          accent: "#3C9D94",
          monogram: "AU",
          sections: [
            {
              heading: "Project Background",
              body: [
                "This project came from my daily needs for reading and information organization.",
                "I wanted to build a personal system\nthat could quickly record, organize, and review content.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Reading notes, ideas, and saved information were scattered across different platforms.",
                "As they accumulated over time,\nit became difficult to review and reuse them.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "【Reading Records】\n\nI used a LINE Official Account as the input interface.",
                "Through Make, I built an automated workflow\nthat organized reading progress, book content, and thoughts into Airtable.",
                "I also used relational fields to create links between different pieces of content.",
                "───",
                "【Knowledge Storage】\n\nUsing Google Sheets and Apps Script as the foundation,",
                "combined with mobile shortcuts,\nI can quickly save content from different platforms through the share action.",
                "I also added short notes during capture\nto reduce the problem of casually saving things that are hard to reuse later.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "I built an evolving personal workflow,",
                "so information is not only saved,\nbut can be found and reused when needed.",
              ],
            },
          ],
        },
        {
          id: "gesture-interaction",
          tag: "Interactive Experience",
          title: "Gesture Interaction Experience | Emotional Awareness",
          summary:
            "Combining physical tickets, digital interaction, and gesture input, this project turns emotions into visible and perceivable changes.",
          accent: "#3FAF68",
          monogram: "GI",
          sections: [
            {
              heading: "Project Background",
              body: [
                "In an event co-created with a life coach,",
                "I designed an experience flow that combined physical tickets and digital interaction.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Abstract emotional feelings are not easy to express,",
                "and they are also difficult to turn into a shared experience during an event.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "Participants first verified their entry through the barcode on the ticket.",
                "Then I used a phone for remote control,",
                "and gesture input affected the character state on screen in real time,",
                "making emotional changes visible and perceivable.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The project formed a complete experience flow of entry → interaction → ending,",
                "turning abstract emotions into an interactive experience that people could participate in.",
              ],
            },
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
          sections: [
            {
              heading: "Project Background",
              body: [
                "In a TouchDesigner workshop,",
                "I used the themes of “the landscapes I see” and “who I am”\nto explore how personal perception could become an interactive installation.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Traditional exhibitions are often based on one-way viewing,",
                "making it harder for audiences to build a connection with the work.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "I used boxes in the physical space as the mapping surface.",
                "The design included three main interactions:",
                "1. Trigger Mechanism\nA mobile remote control served as the entry method.",
                "2. Exhibition Interaction\nGestures were used to switch screens and zoom content in or out.",
                "3. Artistic Expression\nGestures generated brush strokes,\nallowing viewers to directly participate in the work.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The visuals became more than a display.",
                "They formed a relationship with the space\nand created a performance experience that could be both viewed and participated in.",
              ],
            },
          ],
        },
        {
          id: "e-casso-art-brand",
          tag: "Brand / Event",
          title: "E-casso Experience Creation Brand | Experience Translation & Event Design",
          summary:
            "Using art as a medium, this brand translates abstract themes into event experiences that can be participated in, interacted with, and felt.",
          accent: "#9A5ACB",
          monogram: "EC",
          instagramLink: "https://www.instagram.com/ecasso_acy/",
          sections: [
            {
              heading: "Project Background",
              body: [
                "E-casso is an experience brand that uses art as its medium.",
                "Through different themes,\nit aims to create event content with a sense of participation.",
              ],
            },
            {
              heading: "Problem",
              body: [
                "Abstract concepts are often difficult to feel,",
                "and participants can easily remain passive receivers of information.",
              ],
            },
            {
              heading: "My Solution",
              body: [
                "Starting from each theme,",
                "I think about how to translate the content into an interactive experience.",
                "Past themes include:\n\n• AI × Music (Suno)\n• English conversation community\n• Mayan totems\n• Unexpected hospitality design",
                "Participants are encouraged to take part in the process,\nrather than only receiving information passively.",
              ],
            },
            {
              heading: "Outcome",
              body: [
                "The brand direction has gradually developed around art × experience × interaction,",
                "and continues to explore more cross-disciplinary event possibilities.",
              ],
            },
          ],
        },
      ] as ProjectSection[],
    },
  };

  const t = content[lang];

  const projectImages = useMemo<Record<string, string[]>>(
    () => ({
      "gesture-interaction": [gestureDetail1, gestureDemo],
      "interactive-exhibition": [exhibitionDetail1],
      "discord-matching-system": [discordDetail1],
      "leave-reporting-system": [leaveDetail1],
      "invitation-system": [
        invitationManagementCover,
        invitationManagementDetail1,
      ],
      "group-system": [
        groupLotteryCover,
        groupLotteryDetail1,
        groupLotteryDetail2,
        groupLotteryDetail3,
        groupLotteryDetail4,
      ],
      "personal-automation-tools": [
        automationDetail1,
        automationDetail2,
        automationDemo,
      ],
      "e-casso-art-brand": [
        ecassoDetail1,
        ecassoDetail2,
        ecassoDetail3,
      ],
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
      [projectId]:
        (prev[projectId] ?? 0) === 0 ? total - 1 : (prev[projectId] ?? 0) - 1,
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
    const isFirstProject = project.id === "gesture-interaction";

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4",
          borderRadius: isMobile ? "20px" : "24px",
          overflow: "hidden",
          backgroundColor: "#f2efe9",
          border: "1px solid rgba(70,60,45,0.06)",
        }}
      >
        {isFirstProject ? (
          <img
            src={currentImage}
            alt={`${project.title} ${currentIndex + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              backgroundColor: "#f2efe9",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f2efe9",
            }}
          >
            <img
              src={currentImage}
              alt={`${project.title} ${currentIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        )}

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
            zIndex: 2,
          }}
        >
          {project.tag}
        </div>

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
                border: "1px solid rgba(0,0,0,0.04)",
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(10px)",
                color: "#8a8a8a",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                zIndex: 2,
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
                border: "1px solid rgba(0,0,0,0.04)",
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(10px)",
                color: "#8a8a8a",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                zIndex: 2,
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
                zIndex: 2,
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
              fontFamily:
                "'Times New Roman', Georgia, 'Noto Serif TC', serif",
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
                padding: isMobile ? "18px" : "20px",
                scrollMarginTop: "110px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : "minmax(0, 0.95fr) minmax(0, 1fr)",
                  alignItems: "start",
                  gap: isMobile ? "20px" : "32px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    alignSelf: "start",
                  }}
                >
                  {renderProjectMedia(project)}
                </div>

                <div
                  style={{
                    padding: isMobile ? "2px 2px 4px" : "10px 8px 10px 0",
                    display: "grid",
                    gap: "24px",
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
                        fontWeight: 500,
                        textAlign: "left",
                        maxWidth: "540px",
                      }}
                    >
                      {project.summary}
                    </p>
                  </div>

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

                  <div
                    style={{
                      display: "grid",
                      gap: "22px",
                      textAlign: "left",
                    }}
                  >
                    {project.sections.map((section, sectionIndex) => (
                      <section
                        key={`${project.id}-section-${sectionIndex}`}
                        style={{
                          display: "grid",
                          gap: "12px",
                          paddingTop: sectionIndex === 0 ? 0 : "6px",
                        }}
                      >
                        {sectionIndex > 0 && (
                          <div
                            style={{
                              width: "100%",
                              height: "1px",
                              backgroundColor: "rgba(95, 86, 74, 0.18)",
                              marginBottom: "2px",
                            }}
                          />
                        )}

                        <h3
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            lineHeight: 1.4,
                            color: "#2d2d2d",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            textAlign: "left",
                          }}
                        >
                          {section.heading}
                        </h3>

                        <div
                          style={{
                            display: "grid",
                            gap: "12px",
                          }}
                        >
                          {section.body.map((paragraph, paragraphIndex) => (
                            <p
                              key={`${project.id}-section-${sectionIndex}-paragraph-${paragraphIndex}`}
                              style={{
                                margin: 0,
                                fontSize: "16px",
                                lineHeight: 2.05,
                                color: "#4f4a43",
                                whiteSpace: "pre-line",
                                textAlign: "left",
                              }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
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
