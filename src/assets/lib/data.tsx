import sqlicon from "../../assets/icons/sqlicon.svg";
import sparkicon from "../../assets/icons/sparkicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import hadoopicon from "../../assets/icons/Hadoopicon.svg";
import azureicon from "../../assets/icons/azureicon.svg";
import scalaicon from "../../assets/icons/scalaicon.svg";
import allemni from "../../assets/img/allemni.webp";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import databricksIcon from "../../assets/icons/databricksicon.svg";
import databricks2 from "../../assets/icons/databricks-red.svg";
import firebase from "../../assets/icons/firebaseIcon.svg";
import airflow from "../../assets/icons/airflowIcon.svg";
import kafka from "../../assets/icons/kafka-icon.svg";
import snowflake from "../../assets/icons/Snowflake.svg";
import snowflake2 from "../../assets/icons/snowflake-custom.svg";
import chatme from "../../assets/img/chatme.png";
import chatme2 from "../../assets/img/chatme2.webp";
import etl from "../../assets/img/ETL pipeline.webp";
import kaggle from "../../assets/icons/kaggle-1.svg";
import profilepicture from "../img/Majdi.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail, FiLink } from "react-icons/fi";


export const headerIntroData = {
  title: {
    fr: "Salut, C'est Majdi",
    en: "Hello, I am Majdi",
  },
  subtitle: {
    fr: "Ingénieur de Données - Développeur toute la stack",
    en: "Data Engineer - Full Stack Developer",
  },
  description: {
    fr: "Je suis Majdi AKRMI, J'ai plus de 6 ans d'expérience en tant que développeur full stack, et maintenant j'ai plus de 3 ans d'expérience en tant que Data Engineer. Je vous présente ici mon travail et ma passion pour les données et le développement Web.",
    en: "I am Majdi AKRMI, I have over than 6 years of experience as a full stack developer, and now I have over than 3 years of experience as a Data Engineer. Here I present my work and my passion for Data and Web Development.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contactez-moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
       
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "ChatMe",
    description:
      "C'est une Applicaton de chat créer avec React JS et Firebase",
    description_EN:
      "This is an Chat Application create with React JS and Firebase",
    technologies: [ 
      { name: "React JS", icon: reacticon },
      { name: "Java Script", icon: javascripticon },
      { name: "Node JS", icon: nodejsicon },
      { name: "Firebase", icon: firebase },
    ],
    image: chatme,
    deploymenturl:"https://chatme-85314.web.app/login",
    githuburl: "https://github.com/Majdi-Akrmi/ChatMe",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "ChatMe V2",
    description:
      "C'est la deuxième version du l'Applicaton ChatMe créer avec React Native JS et Firebase",
    description_EN:
      "This is the version 2 of ChatMe application buliding with React Native and Firebase",
    technologies: [
      { name: "React Native", icon: reacticon },
      { name: "Java Script", icon: javascripticon },
      { name: "Node JS", icon: nodejsicon },
      { name: "Firebase", icon: firebase },
    ],
    image: chatme2,
    deploymenturl:"https://chatme-2-dec45.web.app/",
    githuburl: "https://github.com/Majdi-Akrmi/ChatMe-v2",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "ALLeMNI",
    description:
      "C'est une platforme d'éducation",
    description_EN:
      "This is an education platform",
    technologies: [
      { name: "Type Script", icon: typescripticon },
      { name: "Next JS", icon: nextjsiconwhite },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "MySQL", icon: sqlicon },
    ],
    image: allemni,
    deploymenturl:"https://allemni-v2.vercel.app/sign-in?redirect_url=https%3A%2F%2Fallemni-v2.vercel.app%2F",
    githuburl: "https://github.com/Majdi-Akrmi/ALLeMNI-v2",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "ETL Pipeline",
    description:
      "Extracter les données de Kaggle, Transformer en utilisant Databricks et le charger dans Snowwlake",
    description_EN:
      "Extract data from Kaggle, Trasformed data with Databricks and Loaded in Snowflake",
    technologies: [
      { name: "Kaggle", icon: kaggle },
      { name: "Databricks", icon: databricks2 },
      { name: "Snowflake", icon: snowflake2 },
    ],
    image: etl,
    deploymenturl:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3108667502176151/2402851953300314/6712313256190692/latest.html",
    githuburl: "https://github.com/Majdi-Akrmi/ETL-pipeline",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    fr: "Plus de projets sur GitHub",
    en: "More Projects on GitHub",
  },
} as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Data Engineering",
    skills: [
      {
        title: "SQL",
        hash: "#SQL",
        icon: sqlicon,
        color: "#61DAFB",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#023047",
      },
      {
        title: "Apache Hadoop",
        hash: "#HapacheHadoop",
        icon: hadoopicon,
        color: "#ffee32",
      },
      {
        title: "Scala",
        hash: "#scala",
        icon: scalaicon,
        color: "#d90429",
      },
      {
        title: "Spark",
        hash: "#spark",
        icon: sparkicon,
        color: "#fb8500",
      },
      {
        title: "Databricks",
        hash: "#databricks",
        icon: databricksIcon,
        color: "#FF4500",
      },
      {
        title: "Airflow",
        hash: "#airflow",
        icon: airflow,
        color: "#449C45",
      },
      {
        title: "Kafka",
        hash: "#kafka",
        icon: kafka,
        color: "#000000",
      },
      {
        title: "Snowflake",
        hash: "#snowflake",
        icon: snowflake,
        color: "#61DAFB",
      },
      
      
    ],
  },
] as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Web Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Firebase",
        hash: "#Firebase",
        icon: firebase,
        color: "#f48c06",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Cloud Computing",
    skills: [
      { 
        title: "Amazon Web Services",
        hash: "#aws",
        icon: awsicon, 
        color: "#f48c06" 
      },
      { 
        title: "Microsoft Azure",
        hash: "#azure",
        icon: azureicon, 
        color: "#00b4d8" 
      },
      
    ],
  },
] as const;

export const navLinks = [
  { fr: "Home", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "A Propos De Moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const sideBarRightMail = {
  link: "mailto:akremi.majdi@gmail.com",
  text: "akremi.majdi@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/majdi-akrmi-534a37272/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Majdi-Akrmi",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:akremi.majdi@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    fr: '"Sans big data, vous êtes aveugle et sourd et au milieu d’une autoroute."',
    en: `"Without big data, you are blind and deaf and in the middle of a freeway."`,
    author: "Geoffrey Moore",
  },
  {
    fr: '"Les données vous parleront si vous êtes prêt à écouter."',
    en: `"Data will talk to you if you’re willing to listen."`,
    author: "Jim Bergeson",
  },
] as const;

export const aboutMeData = {
  title: "A propos de moi",
  title_EN: "About me",
  description: "Mon parcours",
  description_EN: "My background",
  paragraphs_FR: [
    {
      title: "Parcours Académique",
      description:
        ` Diplôme en Licence Appliquée en Sciences de l'informatique`,
      icon: hardwareicon,
    },
    {
      title: "Parcours Professionnel",
      description:
        `Développeur Web & Ingénieur de données`,
      icon: caricon,
    },
    {
      title: "Certifications professionnelles",
      description: "Certified Microsoft Azure DP-900, Certified Microsoft Azure AZ-900, IBM Certified, Databricks Certified",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Academic background",
      description:
        `Bachelor's Degree in Computer Science`,    
      icon: hardwareicon,
    },
    {
      title: "Career paths",
      description:
        `Web developer & Data Engineer`,
      icon: caricon,
    },
    {
      title: "Professional certifications",
      description:
        "Certified Microsoft Azure DP-900, Certified Microsoft Azure AZ-900, IBM Certified, Databricks Certified",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Laissez-moi un message et je vous reviendrai dans les plus brefs delais",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre Nom",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez écrire votre email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Votre Requête",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre requête",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Votre Message",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veillez écrire votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyez",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "J'accepte que Majdi utilise mes données personnelles (nom et adresse électronique) pour me contacter.",
      en: "I agree that Majdi may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous reconnaissez avoir pris connaissance de la politique privée",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en direct sera ouverte sous peu. Démarrage des serveurs...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Je vous remercie pour votre courriel. Je vous répondrai dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    fr: "🦄 Malheureusement, l'envoi de votre courriel n'a pas fonctionné. Veuillez réessayer plus tard",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    fr: "Veuillez indiquer votre nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
