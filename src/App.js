import React, { useState } from "react";
import {
  Globe,
  FileText,
  CheckSquare,
  Upload,
  Users,
  Mail,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Layout,
  Key,
  MessageCircle,
  Info,
  BarChart,
  Bell,
  MapPin,
  ArrowLeft,
  Image as ImageIcon,
  PlayCircle,
  FilePlus,
  Save,
} from "lucide-react";

// 將原本的 PartnerOnboarding 改名為 App，以符合 CodeSandbox 的預設要求
const App = () => {
  const [lang, setLang] = useState("zh"); // 'zh' or 'en'
  const [view, setView] = useState("home"); // 'home', 'church', 'content'
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const content = {
    zh: {
      nav: {
        brand: "YouVersion | 夥伴資源中心",
        home: "回首頁",
      },
      home: {
        title: "歡迎加入 YouVersion 夥伴網絡",
        subtitle: "我們致力於透過科技，將神的話語帶給每一個語言、每一個民族。",
        step1: {
          badge: "第一步",
          title: "填寫合作意願表",
          desc: "無論您是教會或內容機構，請先填寫此表單，讓我們認識您。",
          btn: "前往填寫申請表 (HubSpot)",
        },
        step2: {
          badge: "第二步",
          title: "選擇您的身分",
          desc: "請選擇下方的身分，查看專屬的操作流程與教學資源。",
        },
        cardChurch: {
          title: "我是教會 / 牧養機構",
          desc: "我想建立教會頁面、使用數據分析 (Insights) 與推播通知來牧養會眾。",
          btn: "查看教會夥伴資源",
        },
        cardContent: {
          title: "我是內容創作者 / 出版社",
          desc: "我想上架讀經計畫、靈修影片或文章，分發給全球用戶。",
          btn: "查看上架教學與規範",
        },
      },
      church: {
        hero: {
          title: "YouVersion Connect 為教會賦能",
          subtitle:
            "透過免費的數位工具，幫助您的教會在數位時代建立更緊密的連結。",
        },
        features: {
          title: "核心功能介紹",
          items: [
            {
              icon: <BarChart className="w-8 h-8 text-blue-600" />,
              title: "教會數據洞察 (Insights)",
              desc: "了解會眾的讀經趨勢。您可以查看會有多少人閱讀聖經、完成了哪些計畫，幫助您掌握教會的屬靈健康狀況，並據此調整講道或牧養策略。",
            },
            {
              icon: <Bell className="w-8 h-8 text-blue-600" />,
              title: "連結與推播 (Connections)",
              desc: "建立專屬的教會頁面。會眾「設為我的教會」後，您可以發送每週重要通知、靈修提醒或活動訊息，直接推送到他們的手機上。",
            },
            {
              icon: <MapPin className="w-8 h-8 text-blue-600" />,
              title: "教會搜尋 (Church Finder)",
              desc: "讓正在尋找教會的人看見您。您的教會將顯示在 YouVersion 的地圖搜尋中，增加曝光度並接觸潛在新朋友。",
            },
          ],
        },
        process: {
          title: "申請流程",
          steps: [
            {
              title: "註冊帳號",
              desc: "前往 YouVersion Connect 官網建立組織帳號。",
            },
            {
              title: "驗證身分",
              desc: "提交教會網站或相關證明，等待官方審核開通。",
            },
            {
              title: "設定頁面",
              desc: "上傳教會 Logo、聚會時間與介紹，開始邀請會眾加入。",
            },
          ],
          cta: "前往 YouVersion Connect 官網申請",
        },
      },
      content: {
        hero: {
          title: "內容夥伴上架指南",
          subtitle: "透過 Partner Portal，將您的屬靈內容帶給全球數億用戶。",
        },
        warning: {
          title: "重要觀念：雙系統運作",
          desc: "內容夥伴需要使用兩個系統：先在 Connect 完成簽約 (行政)，再到 Partner Portal 上傳內容 (執行)。",
        },
        steps: {
          title: "合作流程概覽",
          items: [
            {
              step: "01",
              title: "加入夥伴 LINE 群",
              content: (
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm mb-2">
                    確認已填寫完首頁的意願表後：
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-green-50 text-green-800 rounded-lg border border-green-100">
                    <MessageCircle size={20} />
                    <span className="font-bold">LINE ID: @473szgqj</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    加入後，請發送訊息告知小編：「我已完成意願表填寫」。
                  </p>
                </div>
              ),
            },
            {
              step: "02",
              title: "前置作業與簽約 (Connect)",
              content: (
                <ul className="space-y-3 text-gray-600 list-disc pl-4 text-sm">
                  <li>
                    <strong className="text-gray-800">接收邀請：</strong>{" "}
                    收到系統信後，點擊連結進入 YouVersion Connect。
                  </li>
                  <li>
                    <strong className="text-gray-800">簽署協議：</strong>{" "}
                    登入後，點擊上方
                    <span className="text-orange-600 font-bold">橘色區塊</span>
                    ，完成資訊並簽署協議 (Agreement)。
                  </li>
                  <li>
                    <span className="text-red-600 font-medium">
                      注意：此階段您還無法上傳內容。簽完請通知小編。
                    </span>
                  </li>
                </ul>
              ),
            },
            {
              step: "03",
              title: "開通後台 (Partner Portal)",
              content: (
                <ul className="space-y-3 text-gray-600 list-disc pl-4 text-sm">
                  <li>
                    簽約完成後，小編會發送
                    <strong className="text-gray-800">第二封邀請信</strong>。
                  </li>
                  <li>
                    點擊信中連結，這將帶您進入讀經計畫後台 (Partner Portal)。
                  </li>
                  <li className="flex items-start gap-2 bg-yellow-50 p-2 rounded text-yellow-800 border border-yellow-100">
                    <Info size={16} className="mt-0.5 shrink-0" />
                    <span>
                      若無法登入，請務必使用「忘記密碼」重設，通常即可解決。
                    </span>
                  </li>
                </ul>
              ),
            },
          ],
        },
        tutorial: {
          title: "圖文教學：如何上架讀經計畫？",
          steps: [
            {
              title: "1. 登入 Partner Portal",
              desc: "使用您的帳號登入後台。若顯示權限不足，請確認是否已點擊 Email 中的邀請連結。",
              icon: <Key size={24} />,
              placeholder: "畫面示意：Partner Portal 登入介面",
            },
            {
              title: "2. 建立新計畫 (Create Plan)",
              desc: "點擊右上角的 'Create Plan' 按鈕。在彈出視窗中選擇語言 (Chinese, Traditional) 並輸入計畫名稱。",
              icon: <FilePlus size={24} />,
              placeholder: "畫面示意：Dashboard 右上角的按鈕位置",
            },
            {
              title: "3. 填寫基本資訊 (Details)",
              desc: "輸入計畫簡介 (Description)。請務必設定正確的天數 (Duration)，這會決定您接下來要填寫幾天的內容。",
              icon: <FileText size={24} />,
              placeholder: "畫面示意：輸入 Title 和 Description 的表單",
            },
            {
              title: "4. 編輯每日內容 (Content)",
              desc: "點擊左側選單的 Content。依序填寫每一天的：靈修文章 (Devotional) 與 經文 (Reference)。",
              icon: <Layout size={24} />,
              placeholder: "畫面示意：每日靈修內容編輯器",
            },
            {
              title: "5. 上傳圖片 (Images)",
              desc: "上傳計畫封面圖。尺寸必須為 1440x810 像素 (16:9)，檔案小於 300KB。請避免圖片上有過多文字。",
              icon: <ImageIcon size={24} />,
              placeholder: "畫面示意：圖片上傳區域與尺寸提示",
            },
            {
              title: "6. 預覽與提交 (Review)",
              desc: "確認無誤後，點擊 Submit for Review。我們的團隊將在 5-10 個工作天內完成審核。",
              icon: <CheckSquare size={24} />,
              placeholder: "畫面示意：Submit 按鈕位置",
            },
          ],
        },
        resources: {
          title: "格式規範下載",
          items: [
            {
              name: "讀經計畫格式規範 (必讀).pdf",
              size: "2.4 MB",
              type: "PDF",
            },
            { name: "影片規格與縮圖尺寸說明.pdf", size: "1.8 MB", type: "PDF" },
            { name: "作者簡介填寫範本.docx", size: "500 KB", type: "DOC" },
          ],
        },
      },
      footer: {
        contact: "遇到困難？",
        contactBtn: "聯繫 LINE 小編",
        copyright: "© 2026 YouVersion Partnership Team. 僅供合作夥伴使用。",
      },
    },
    en: {
      nav: {
        brand: "YouVersion | Partner Hub",
        home: "Home",
      },
      home: {
        title: "Welcome to YouVersion Partners",
        subtitle: "Making God's Word available to everyone, everywhere.",
        step1: {
          badge: "Step 1",
          title: "Fill Interest Form",
          desc: "Whether you are a church or content partner, please tell us about your ministry first.",
          btn: "Go to Application Form (HubSpot)",
        },
        step2: {
          badge: "Step 2",
          title: "Choose Your Path",
          desc: "Select your role below to see specific workflows and resources.",
        },
        cardChurch: {
          title: "Church / Ministry",
          desc: "I want to use Insights, Push Notifications, and build a Church Profile.",
          btn: "Church Partner Resources",
        },
        cardContent: {
          title: "Content Creator",
          desc: "I want to publish Bible Plans, Videos, or Articles globally.",
          btn: "Upload Guide & Specs",
        },
      },
      church: {
        hero: {
          title: "Empowering Churches with Connect",
          subtitle:
            "Leverage free digital tools to build stronger connections with your congregation.",
        },
        features: {
          title: "Key Features",
          items: [
            {
              icon: <BarChart className="w-8 h-8 text-blue-600" />,
              title: "Church Insights",
              desc: "Understand Bible engagement trends and monitor spiritual health.",
            },
            {
              icon: <Bell className="w-8 h-8 text-blue-600" />,
              title: "Connect & Push Notifications",
              desc: "Send weekly notifications, devotionals, or event reminders directly to members.",
            },
            {
              icon: <MapPin className="w-8 h-8 text-blue-600" />,
              title: "Church Finder",
              desc: "Be found on the YouVersion map and increase visibility.",
            },
          ],
        },
        process: {
          title: "Application Process",
          steps: [
            {
              title: "Register",
              desc: "Create an organization account at YouVersion Connect.",
            },
            {
              title: "Verify",
              desc: "Submit proof of ministry and wait for verification.",
            },
            { title: "Setup", desc: "Upload logo and service times." },
          ],
          cta: "Apply at YouVersion Connect",
        },
      },
      content: {
        hero: {
          title: "Content Partner Guide",
          subtitle:
            "Distribute your spiritual content to millions globally via the Partner Portal.",
        },
        warning: {
          title: "Important: Two Systems",
          desc: "Sign agreement in Connect (Admin) first, then upload content in Partner Portal (Execution).",
        },
        steps: {
          title: "Workflow Overview",
          items: [
            {
              step: "01",
              title: "Join Partner Group",
              content: (
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm mb-2">
                    After filling the form on the homepage:
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-green-50 text-green-800 rounded-lg border border-green-100">
                    <MessageCircle size={20} />
                    <span className="font-bold">LINE ID: @473szgqj</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Notify admin: 'I have completed the form'.
                  </p>
                </div>
              ),
            },
            {
              step: "02",
              title: "Prep & Agreement (Connect)",
              content: (
                <ul className="space-y-3 text-gray-600 list-disc pl-4 text-sm">
                  <li>
                    <strong className="text-gray-800">Invitation:</strong> Click
                    the link in the system email to access Connect.
                  </li>
                  <li>
                    <strong className="text-gray-800">Sign:</strong> Log in,
                    click the{" "}
                    <span className="text-orange-600 font-bold">
                      Orange Block
                    </span>{" "}
                    at the top, and sign the Agreement.
                  </li>
                  <li>
                    <span className="text-red-600 font-medium">
                      Note: You cannot upload content yet. Notify admin when
                      done.
                    </span>
                  </li>
                </ul>
              ),
            },
            {
              step: "03",
              title: "Access Portal (Backend)",
              content: (
                <ul className="space-y-3 text-gray-600 list-disc pl-4 text-sm">
                  <li>
                    After signing, admin sends a{" "}
                    <strong className="text-gray-800">2nd invitation</strong>.
                  </li>
                  <li>Click to access the Partner Portal.</li>
                  <li className="flex items-start gap-2 bg-yellow-50 p-2 rounded text-yellow-800 border border-yellow-100">
                    <Info size={16} className="mt-0.5 shrink-0" />
                    <span>If login fails, try 'Forgot Password' to reset.</span>
                  </li>
                </ul>
              ),
            },
          ],
        },
        tutorial: {
          title: "Step-by-Step Upload Guide",
          steps: [
            {
              title: "1. Log in to Partner Portal",
              desc: "Log in. If you see 'Access Denied', ensure you clicked the invitation email link.",
              icon: <Key size={24} />,
              placeholder: "Screen: Login Page",
            },
            {
              title: "2. Create Plan",
              desc: "Click 'Create Plan' at top right. Select Language and Title.",
              icon: <FilePlus size={24} />,
              placeholder: "Screen: Dashboard Button",
            },
            {
              title: "3. Basic Details",
              desc: "Fill in Description and Duration (Days).",
              icon: <FileText size={24} />,
              placeholder: "Screen: Plan Details Form",
            },
            {
              title: "4. Edit Content",
              desc: "Add Devotional content and Scripture references for each day.",
              icon: <Layout size={24} />,
              placeholder: "Screen: Content Editor",
            },
            {
              title: "5. Upload Images",
              desc: "Upload cover image (1440x810, 16:9 ratio, <300KB).",
              icon: <ImageIcon size={24} />,
              placeholder: "Screen: Image Upload",
            },
            {
              title: "6. Review & Submit",
              desc: "Submit for review. Approval takes 5-10 business days.",
              icon: <CheckSquare size={24} />,
              placeholder: "Screen: Submit Button",
            },
          ],
        },
        resources: {
          title: "Guidelines Download",
          items: [
            { name: "Bible Plan Guidelines.pdf", size: "2.4 MB", type: "PDF" },
            {
              name: "Video & Thumbnail Specs.pdf",
              size: "1.8 MB",
              type: "PDF",
            },
            { name: "Bio Template.docx", size: "500 KB", type: "DOC" },
          ],
        },
      },
      footer: {
        contact: "Need Help?",
        contactBtn: "Contact Manager",
        copyright: "© 2026 YouVersion Partnership Team. For internal use only.",
      },
    },
  };

  const t = content[lang];

  // Helper component for the Home View
  const HomeView = () => (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {t.home.title}
        </h1>
        <p className="text-xl text-gray-500">{t.home.subtitle}</p>
      </div>

      {/* Step 1: Form CTA - High Priority */}
      <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-8 mb-16 text-center shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-100 text-red-600 px-4 py-1 rounded-bl-xl font-bold text-sm uppercase tracking-wider">
          {t.home.step1.badge}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t.home.step1.title}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t.home.step1.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://dbco5.share.hsforms.com/2fr6mSJ_xRS6OS4TyQx7NnA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-md text-lg"
          >
            {t.home.step1.btn} <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Step 2: Selection */}
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
          {t.home.step2.badge}
        </span>
        <h2 className="text-2xl font-bold text-gray-900">
          {t.home.step2.title}
        </h2>
        <p className="text-gray-500 mt-2">{t.home.step2.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Church Card */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all flex flex-col items-center text-center cursor-pointer group relative"
          onClick={() => setView("church")}
        >
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Users size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.home.cardChurch.title}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
            {t.home.cardChurch.desc}
          </p>
          <button className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all w-full">
            {t.home.cardChurch.btn}
          </button>
        </div>

        {/* Content Card */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all flex flex-col items-center text-center cursor-pointer group relative"
          onClick={() => setView("content")}
        >
          <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Upload size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.home.cardContent.title}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
            {t.home.cardContent.desc}
          </p>
          <button className="px-6 py-3 bg-white border-2 border-red-600 text-red-600 font-bold rounded-full group-hover:bg-red-600 group-hover:text-white transition-all w-full">
            {t.home.cardContent.btn}
          </button>
        </div>
      </div>
    </div>
  );

  // Helper component for Church View
  const ChurchView = () => (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t.church.hero.title}
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {t.church.hero.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {t.church.features.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          {t.church.process.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
          {t.church.process.steps.map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                {idx + 1}
              </div>
              <h4 className="font-bold text-blue-900 mb-1">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="https://partners.youversion.com/connect"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-md"
        >
          {t.church.process.cta} <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );

  // Helper component for Content View (Revised SOP + Tutorial)
  const ContentView = () => (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t.content.hero.title}
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {t.content.hero.subtitle}
        </p>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
        <h3 className="text-orange-800 font-bold text-lg mb-2 flex items-center">
          <Key className="mr-2" size={20} />
          {t.content.warning.title}
        </h3>
        <p className="text-orange-700">{t.content.warning.desc}</p>
      </div>

      {/* Process Steps */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-1 h-8 bg-red-600 rounded-full block"></span>
          {t.content.steps.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {t.content.steps.items.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative"
            >
              <div className="absolute top-6 right-6 text-gray-200 font-black text-4xl">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                {step.title}
              </h3>
              <div className="relative z-10">{step.content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Layout className="text-red-600" />
            {t.content.tutorial.title}
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {t.content.tutorial.steps.map((step, index) => (
            <div
              key={index}
              className="p-8 grid md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
              <div className="md:col-span-8">
                {/* Image Placeholder - Users can replace this div with an <img src="..." /> tag */}
                <div className="w-full aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 p-4 text-center hover:bg-gray-50 transition-colors">
                  <ImageIcon size={32} className="mb-2 opacity-50" />
                  <span className="font-medium text-sm">
                    {step.placeholder}
                  </span>
                  <span className="text-xs mt-1">(圖片位置)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-700">
          {t.content.resources.title}
        </div>
        <div className="divide-y divide-gray-100">
          {t.content.resources.items.map((item, index) => (
            <div
              key={index}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 font-bold text-xs">
                  {item.type}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.size}</div>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setView("home")}
            >
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                Y
              </div>
              <span className="font-bold text-lg text-gray-900 tracking-tight hidden sm:block">
                {t.nav.brand}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {view !== "home" && (
                <button
                  onClick={() => setView("home")}
                  className="hidden md:flex items-center text-gray-600 hover:text-red-600 text-sm font-medium mr-4"
                >
                  <ArrowLeft size={16} className="mr-1" /> {t.nav.home}
                </button>
              )}
              <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
              <button
                onClick={() => setLang(lang === "zh" ? "en" : "zh")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-bold text-gray-700"
              >
                <Globe size={14} />
                {lang === "zh" ? "EN" : "繁中"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* View Switcher */}
      {view === "home" && <HomeView />}
      {view === "church" && <ChurchView />}
      {view === "content" && <ContentView />}

      {/* Footer (Global) */}
      <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-200 mt-12">
        <div className="mb-4">
          <a
            href="mailto:taiwan@youversion.com"
            className="inline-flex items-center text-gray-500 hover:text-red-600 font-medium transition-colors"
          >
            <Mail size={16} className="mr-2" /> taiwan@youversion.com
          </a>
        </div>
        {t.footer.copyright}
      </footer>
    </div>
  );
};

export default App;
