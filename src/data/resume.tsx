import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "MUHAMMAD REVAN RIZKI",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "As a highly motivated Information Technology student specializing in Network Development, I have gained hands-on experience in building network systems, including Internet of Things systems. This experience has strengthened my problem-solving, system development, teamwork, and analytical thinking skills.",
  summary:
    "In 2023, I'm the type of person who's always been interested in the creative and digital world. I'm deeply curious about how social media and design can influence how people interact with brands. This interest led me to delve deeper into social media, design, photography, and data analysis, all the way to where I am today.",
  avatarUrl: "/saya.JPG",
  skills: [
    { name: "Digital Marketing"},
    { name: "Microsoft Office"},
    { name: "Laravel"},
    { name: "SIOT" },
    { name: "MYSQL"},
    { name: "React (Basic)"},
    { name: "Javascript"},
    { name: "Editing video"},
    { name: "Desain Foto(Basic)"},
    { name: "Financial Accounting" },
    { name: "Financial Reporting" },
    { name: "Canva" },
    { name: "Github"},
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/revan422",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-revan-rizki-381439324/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Revanaek2024",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "OSIS",
      href: "https://smktibazma.sch.id",
      badges: [],
      location: "Ciampea,Bogor",
      title: "Cleanliness and Tidiness",
      logoUrl: "/osis.png",
      start: "August 2024",
      end: "July 2025",
      description:"As a member of the Student Council (OSIS) in charge of cleaning, I carry out my duties with discipline and responsibility, and actively maintain a clean school environment. Through consistency and good cooperation, I have been able to become one of the best in this field and set a positive example for other students.",
    },
    {
      company: "Wings",
      badges: [],
      href: "https://smktibazma.sch.id",
      location: "Ciampea,Bogor",
      title: "Cleanliness",
      logoUrl: "/Wings.png",
      start: "June 2025",
      end: "January 2026",
      description:"As a dorm member on the Wings team, I demonstrated high levels of discipline and responsibility in maintaining a clean environment. Through solid teamwork and consistency, I succeeded in becoming one of the best and setting a positive example for the other members.",
    },
    {
      company: "PSHT",
      href: "https://smktibazma.sch.id",
      badges: [],
      location: "Ciampea,Bogor",
      title: "Fighter",
      logoUrl: "/Logo-psht.png",
      start: "June 2024",
      end: "December 2025",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  education: [
    {
      school: "SMK TI Bazma",
      href: "https://smktibazma.sch.id",
      degree: "Information Systems & Networks.",
      logoUrl: "/Bazma.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "SIOT",
      href: "https://drive.google.com/drive/u/0/folders/14DnNZk9UmGkxUWl7YYEHxWl5R9cW40Vy",
      dates: "2026",
      active: true,
      description:
        "I have completed an IoT dashboard project based on Laravel and ESP32. In this project, I successfully integrated a DHT22 sensor, an I2C LCD, and a servo motor, utilizing MQTT communication via the Shiftr.io broker. The resulting dashboard is capable of displaying real-time temperature and humidity data, sending messages to the LCD, and controlling the servo via a web interface. During development, I tested the system and resolved several issues to ensure smooth operation; one specific challenge involved the dashboard page repeatedly disconnecting from Wokwi, which I ultimately resolved by thoroughly investigating the root cause of the problem.",
      technologies: [
        "Laravel",
        "PHPMyAdmin",
        "Wokwi",
        "Shiftr.io",
        "JavaScript",
      ],
      image: "5.png",

    },
    {
      title: "Finance & Operations - IWI (Enterpreneurship & Creativity School) ",
      href: "https://drive.google.com/file/d/1SO6houvJ9W3xKRUAendRKTeob8jYPMg6/view?usp=sharing",
      dates: "2024 - 2025",
      active: true,
      description:
        "Managed cash flow records, calculated raw material costs, and prepared revenue estimates for sales activities at more than 3 major school events. Contributed to simple financial management for the sale of more than 100 homemade food products, including basic profit and loss calculations, capital management, and sales result evaluation. Gained hands-on experience in basic financial management, cost control, profit analysis, teamwork, and entrepreneurship.",
      image: "IWI.PNG",
    },
    {
      title: "Member of The Security  Division - STUDENT COUNCIL OF  SMK TI BAZMA.",
      href: "https://drive.google.com/file/d/1BjqPhvUa6nOLFxI5nfMWQE40To80kEAm/view?usp=sharing",
      dates: "2024",
      active: true,
      description:
        "Coordinat a dedicated team to enforce school-wide discipline and hygiene standards,ensuring a secure andorganized environment for all students through consistent monitoring and leadership. ",
      image: "OSIS.JPG",
    },
  ],
  hackathons: [
    {
      title: "Bronze Medal - PSHT Fighter (Top 3 National)",
      dates: "June 2025",
      location: "PSHT Championship, Indonesia",
      description:
        "Won a bronze medal and placed in the top 3 of the national fighter competition, recognized for his excellence in martial arts.",
      image:
        "Championship.png",
      links: [
        {
          title: "Refernce",
          href: "",
        },
      ],
    },
    {
      title: "Certificate of Competence - Introduction to Information Securit",
      dates: "July 19 2025",
      location: "Cyber ​​Academy",
      description:
        "An Introduction to Information Security Competency Certificate from Cyber ​​Academy Indonesia demonstrating a basic understanding of cybersecurity principles, data protection, and the application of information security practices.",
      image:
        "Cyber.png",
      links: [
         {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1_L27Gg5gH0KRodFfzJzRGG7nXR2s57rk/view?usp=sharing",
        },
      ],
    },
    {
      title: "Music Art",
      dates: "September 08 2025",
      location: "FKIP Pakuan University",
      description:
        "Achievement in the music arts competition by achieving a Top 5 position, which reflects ability, creativity, and dedication in developing talent in the field of music arts.",
      icon: "public",
      image:
        "seni.png",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1beuRrnN2oNUY2XGSFQ4chXqZt1fSTB1S/view?usp=sharing",
        },
      ],
    },
    {
      title: "DQLAB",
      dates: "January 05 2024",
      location: "Online",
      description:
        "A certificate from DQLab indicating successful completion and passing of the Basic Excel module, as proof of basic understanding in data processing and analysis using Excel.",
      image:
        "DQLAB.png",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1Y5lwdWSBi_k6vZ_8xcWXU0sPAOAESBSW/view?usp=sharing",
        },
      ],
    },
    {
      title: "ASEAN Data Science Explorers ",
      dates: "May 09 2025",
      location: "Online",
      description:
        "Certificate of participation in ASEAN Data Science Explorers 2025 in the Empowerment Session in the form of SAP Analytics Cloud training, which demonstrates active involvement in developing data analysis capabilities and utilizing analytical technology.",
      image:
        "asean.png",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1MbJAlijShf5GMNU-mvbzc9Lfx6Y6g1pD/view?usp=sharing",
        },
      ],
    },
    {
      title: "Graphic Design with Canva.",
      dates: "January 13 2026",
      location: "Online",
      description:
        "Successfully completing graphic design training using Canva with a near-perfect score, reflecting creative abilities, high precision, and strong mastery in producing quality visual works.",
      image:
        "canva.png",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1fB6HSnNxFrddrG1Jqy4brwF0LVIIHYYk/view?usp=sharing",
        },
      ],
    },
    {
      title: "Teladan Insiatif, Sopan Santun, Kebersihan, Ketertiban, & Kerapihan",
      dates: "2023 - 2024 - 2025 - 2026",
      location: "SMK TI BAZMA",
      description:
        "Known for being an example in initiative, manners, cleanliness, orderliness, and neatness, which reflects the character of discipline, responsibility, and being a role model for fellow students.",
      image:
        "Bazma.png",
      links: [
        {
          title: "1",
          href: "https://drive.google.com/file/d/1o_V4aR6SLdIaXfLO-7Pj1qfaFlW3_UD_/view?usp=sharing",
        },
        {
          title: "2",
          href: "https://drive.google.com/file/d/1cX3hoLDBMuTBxUlmWnx7QXmBYDO4woqA/view?usp=sharing",
        }
      ],
    },
  ],
} as const;
