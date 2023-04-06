import inbox from "../assets/images/inbox.svg";
import driveFiles from "../assets/images/drive-file.svg";
import boards from "../assets/images/boards.svg";
import analytics from "../assets/images/analytics.svg";
import crmDashboard from "../assets/images/crm-dashboard.svg";
import ecommerce from "../assets/images/ecommerce.svg";
import cryptoCurrency from "../assets/images/cryptocurrency.svg";
import projects from "../assets/images/projects.svg";
import nftMarketplace from "../assets/images/nft-marketplace.svg";
import settings from "../assets/images/settings.svg";
import updates from "../assets/images/updates.svg";
import hashTag from "../assets/images/hash-tag.svg";
import addImage from "../assets/images/add-projects.svg";
import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";
import user3 from "../assets/images/user3.svg";
import user4 from "../assets/images/user4.svg";
import user5 from "../assets/images/user5.svg";
import user6 from "../assets/images/user6.svg";
import user7 from "../assets/images/user7.svg";
import user8 from "../assets/images/user8.svg";

export const sidelinks = [
  {
    title: "Dashboard",
    sideMenus: [
      {
        title: "Inbox",
        image: inbox,
        path: "/inbox",
        notification: 4,
      },
      {
        title: "Drive Files",
        image: driveFiles,
        path: "/drive-files",
        notification: 435,
      },

      {
        title: "Boards",
        image: boards,
        path: "/boards",
        notification: 5,
      },

      {
        title: "Updates",
        image: updates,
        path: "/updates",
      },

      {
        title: "Analytics",
        image: analytics,
        path: "/analytics",
        notification: 2,
      },

      {
        title: "CRM Dashboard",
        image: crmDashboard,
        path: "/crm-dashboard",
        notification: 2,
      },
      {
        title: "Ecommerce",
        image: ecommerce,
        path: "/ecommerce",
      },

      {
        title: "Cryptocurrency",
        image: cryptoCurrency,
        path: "/cryptocurrency",
      },

      {
        title: "Projects",
        image: projects,
        path: "/projects",
      },

      {
        title: "NFT Marketplace",
        image: nftMarketplace,
        path: "/nft-Marketplace",
      },

      {
        title: "Settings",
        image: settings,
        path: "/settings",
        notification: 2,
      },
    ],
  },

  {
    title: "Projects",
    sideMenus: [
      {
        title: "Additional Calendel",
        image: hashTag,
        path: "/additional-calender",
        notification: 6,
      },
      {
        title: "Brand Logo Design",
        image: hashTag,
        path: "/brand-logo-design",
        notification: 11,
      },

      {
        title: "User Research",
        image: hashTag,
        path: "/user-reasearch",
      },

      {
        title: "Marketing Sales",
        image: hashTag,
        path: "/marketing-sales",
        notification: 23,
      },

      {
        title: "New Projects Template",
        image: hashTag,
        path: "/new-projects-templates",
        notification: 2,
      },

      {
        title: "Add New Projects",
        image: addImage,
        path: "/add-projects",
      },
    ],
  },
];

export const navlinks = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "My Tasks",
    path: "/my-tasks",
  },
  {
    title: "Reporting",
    path: "/reporting",
  },
  {
    title: "Portfolios",
    path: "/portfolios",
  },
  {
    title: "Goals",
    path: "/goals",
  },
];

export const usersData = [
  {
    image: user1,
  },
  {
    image: user4,
  },
  {
    image: user2,
  },
  {
    image: user6,
  },

  {
    user: user7,
  },
  {
    image: user3,
    active: true,
  },

  {
    image: user6,
  },
  

  {
    image: user4,
    active: false,
    notification: 2,
  },
  {
    image: user6,
  },
  {
    image: user6,
    notification: 32,
  },
  
  
];

export const tasks = [
  {
    id: 1,
    title: "Model Answer",
    badges: [
      {
        title: "#UI007",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Design",
        bgColor: "rgba(59, 130, 246, 0.1);",
        textColor: "#3B82F6",
      },
      {
        title: "Backlog",
        bgColor: "rgba(234, 179, 8, 0.1)",
        textColor: "#CA8A04",
      },
    ],
    users: [
      {
        image: user3,
      },
      {
        image: user7,
      },
    ],
    messages: 3,
    share: 2,
    save: 4,
    isBacklog: true,
  },
  {
    id: 2,
    title: "Create calendar, chat and email app pages",
    badges: [
      {
        title: "#UI003",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Development",
        bgColor: "rgba(236, 72, 153, 0.1)",
        textColor: "#DB2777",
      },
      {
        title: "Backlog",
        bgColor: "rgba(234, 179, 8, 0.1)",
        textColor: "#CA8A04",
      },
    ],
    users: [
      {
        image: user6,
      },
      {
        image: user8,
      },
    ],
    messages: 4,
    share: 2,
    save: 1,
    isBacklog: true,
  },
  {
    id: 3,
    title: "Product Design, Figma, Sketch (Software), Prototype",
    badges: [
      {
        title: "#BC05",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Project",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Backlog",
        bgColor: "rgba(234, 179, 8, 0.1)",
        textColor: "#CA8A04",
      },
    ],
    users: [
      {
        image: user4,
      },
    ],
    messages: 4,
    share: 2,
    save: 2,
    isBacklog: true,
  },
  {
    id: 4,
    title: "Change email option process",
    badges: [
      {
        title: "#FTC07",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Backlog",
        bgColor: "rgba(234, 179, 8, 0.1)",
        textColor: "#CA8A04",
      },
    ],
    users: [
      {
        image: user3,
      },
      {
        image: user7,
      },
    ],
    messages: 4,
    share: 2,
    save: 2,
    isBacklog: true,
  },
  {
    id: 5,
    title: "Post launch reminder/ Post list",
    badges: [
      {
        title: "#FTC09",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Backlog",
        bgColor: "rgba(234, 179, 8, 0.1)",
        textColor: "#CA8A04",
      },
    ],
    users: [],
    isBacklog: true,
  },

  {
    id: 6,
    title: "Model Answer",
    badges: [
      {
        title: "#UI005",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "To Do",
        bgColor: "rgba(236, 72, 153, 0.1)",
        textColor: "#DB2777",
      },
    ],
    users: [
      {
        image: user4,
      },
      {
        image: user7,
      },
    ],
    messages: 4,
    share: 2,
    save: 1,
    isTodo: true,
  },
  {
    id: 7,
    title: "Add authentication pages",
    badges: [
      {
        title: "#UI008",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Todo",
        bgColor: "rgba(236, 72, 153, 0.1)",
        textColor: "#DB2777",
      },
    ],
    users: [],
    isTodo: true,
  },

  {
    id: 8,
    title: "Profile Page Satructure",
    badges: [
      {
        title: "#UI005",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Todo",
        bgColor: "rgba(236, 72, 153, 0.1)",
        textColor: "#DB2777",
      },
    ],
    users: [
      {
        image: user2,
      },
    ],
    messages: 4,
    share: 2,
    isTodo: true,
  },
  {
    id: 9,
    title: "Create calendar, chat and email app pages",
    badges: [
      {
        title: "#UI003",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Development",
        bgColor: "rgba(236, 72, 153, 0.1)",
        textColor: "#DB2777",
      },
      {
        title: "Backlog",
        bgColor: "rgba(234, 179, 8, 0.1)",
        textColor: "#CA8A04",
      },
    ],
    users: [
      {
        image: user6,
      },
      {
        image: user8,
      },
    ],
    messages: 4,
    share: 2,
    save: 1,
    isTodo: true,
  },
  {
    id: 10,
    title: "Model Answer",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "In Process",
        bgColor: "rgba(168, 85, 247, 0.1)",
        textColor: "#9333EA",
      },
    ],
    users: [
      {
        image: user3,
      },
      {
        image: user7,
      },
    ],
    messages: 4,
    share: 2,
    save: 1,
    isProcessing: true,
  },
  {
    id: 11,
    title: "Model Answer",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "In Process",
        bgColor: "rgba(168, 85, 247, 0.1)",
        textColor: "#9333EA",
      },
    ],
    users: [
      {
        image: user3,
      },
      {
        image: user7,
      },
    ],
    messages: 4,
    share: 2,
    save: 1,
    isProcessing: true,
  },
  {
    id: 12,
    title: "Model Answer",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Done",
        bgColor: "rgba(34, 197, 94, 0.1)",
        textColor: "#16A34A",
      },
    ],
    users: [
      {
        image: user3,
      },
      {
        image: user7,
      },
    ],
    messages: 4,
    share: 2,
    save: 1,
    isCompleted: true,
  },
  {
    id: 13,
    title: "Create calendar, chat and email app pages",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Done",
        bgColor: "rgba(34, 197, 94, 0.1)",
        textColor: "#16A34A",
      },
    ],
    users: [],
    isCompleted: true,
  },
  {
    id: 14,
    title: "Product Design, Figma, Sketch (Software), Prototype",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Done",
        bgColor: "rgba(34, 197, 94, 0.1)",
        textColor: "#16A34A",
      },
    ],
    users: [
      {
        image: user4,
      },
    ],
    messages: 4,
    share: 2,
    isCompleted: true,
  },
  {
    id: 15,
    title: "Modal Answer",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Done",
        bgColor: "rgba(168, 85, 247, 0.1)",
        textColor: "#9333EA",
      },
    ],
    users: [
      {
        image: user3,
      },
      {
        image: user6,
      },
    ],
    messages: 4,
    share: 2,
    isCompleted: true,
  },
  {
    id: 16,
    title: "Create calendar, chat and email app pages",
    badges: [
      {
        title: "#002",
        bgColor: "#ffffff",
        textColor: "#606C80",
        isBorder: true,
      },
      {
        title: "Done",
        bgColor: "rgba(34, 197, 94, 0.1)",
        textColor: "#16A34A",
      },
    ],
    users: [],
    isCompleted: true,
  },
];
