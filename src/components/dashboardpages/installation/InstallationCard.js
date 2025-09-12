import Step1 from '../../../assets/images/installation/step1.png'
import Step2 from '../../../assets/images/installation/step2.png'
const InstallationCard = [
  {
    id: 1,
    topic: "Install Java (JDK)",
    Steps: [
      {
        text: "Go to the official Oracle JDK download page.",
        img: Step1, // Oracle website screenshot placeholder
      },
      {
        text: "Choose the correct installer for your OS (Windows, macOS, Linux).",
        img: Step2, // version selection placeholder
      },
      {
        text: "Run the downloaded installer and follow on-screen instructions.",
        img: "https://i.imgur.com/m2FPBZQ.png", // installation wizard placeholder
      },
      {
        text: "After installation, open a terminal and verify with:",
        cmd: "java -version",
      },
      {
        text: "Set JAVA_HOME environment variable pointing to JDK installation path.",
        img: "https://i.imgur.com/t9PslGp.png", // env variable setup placeholder
      },
      {
        text: "Add the JDK bin folder to your PATH so you can run Java commands globally.",
        img: "https://i.imgur.com/VXWgr8h.png", // PATH setup placeholder
      },
    ],
  },
  {
    id: 2,
    topic: "Set Up Eclipse IDE",
    steps: [
      {
        text: "Go to the Eclipse Downloads page.",
        img: "https://i.imgur.com/gyWjYtO.png", // Eclipse website placeholder
      },
      {
        text: "Download 'Eclipse IDE for Java Developers'.",
        img: "https://i.imgur.com/FK7P1rQ.png", // Eclipse download placeholder
      },
      {
        text: "Extract the downloaded zip file to a folder of your choice.",
        img: "https://i.imgur.com/HOi53s1.png", // extraction placeholder
      },
      {
        text: "Run the `eclipse.exe` (Windows) or `eclipse` (Linux/Mac) file to start IDE.",
        img: "https://i.imgur.com/4moiUuZ.png", // eclipse launch placeholder
      },
      {
        text: "On first launch, select a workspace directory where projects will be stored.",
        img: "https://i.imgur.com/dpNoYlL.png", // workspace selection placeholder
      },
      {
        text: "Create a new Java project: File → New → Java Project.",
        img: "https://i.imgur.com/j9Ws29p.png", // new project wizard placeholder
      },
    ],
    EclipseCommandsForJava: [
      "File > New > Java Project",
      "Run > Run  (Ctrl + F11)",
      "Run > Debug (F11)",
      "Project > Build All",
    ],
  },
];

export default  InstallationCard;