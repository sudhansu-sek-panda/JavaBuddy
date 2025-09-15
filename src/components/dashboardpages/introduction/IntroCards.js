// import Evolution from "../../../assets/Introduction/evolution.jpg"
export const introCards = [
  {
    id: 1,
    icon: "Java",
    title: "What is Java?",
    description:
      "Java is a class-based, object-oriented programming language designed to have minimal implementation dependencies. It’s widely used across enterprise, mobile application developement, and web platforms.",
    points: [
      "Platform independent via JVM.",
      "Object-Oriented and secure.",
      "Multithreading and garbage collection support.",
      "Popular in enterprise, Android developement, and web development.",
    ],
  },
  // {
  //   Framework:" ",
    
  // }
  {
  id: 2,
  icon: "History",
  title: "History and Evolution of Java",
  description: "The journey of Java from Oak to a universal language.",
  points: [
    "☕ 1991 – Conceived by James Gosling at Sun Microsystems, originally named **Oak**.",
    "📅 1995 – Renamed to **Java** and released publicly.",
    "🌍 Core Idea → **Write Once, Run Anywhere (WORA)**.",
    "⚡ How did Java achieve WORA?",
    "🔹 Java code is compiled into Bytecode (not machine-specific).",
    "🔹 JVM (Java Virtual Machine) translates Bytecode into Machine Code.",
    "🔹 Same Bytecode runs on any device with a JVM (PC, Phone, Smart TV).",
    "➡️ Flow: Your Java Code (.java) → Compiler → Bytecode (.class) → JVM` → CPU Execution"
  ]
},
  {
    id:3,
    icon: "Why",
    title: "Why Choose Java ?",
    points: [
      "1.Easy to Learn – Java looks like English and is beginner-friendly.",
      "2.Platform Independent – Write once, run anywhere (Windows, Mac, Linux, Android).",
      "3.Object-Oriented – Makes coding organized and reusable.",
      "4.Secure – Used in banking, payments, and big applications safely.",
      "5.Fast & Powerful – Runs faster than many other languages.",
      "6.Huge Community – Millions of developers, tons of help online.",
      "7.High Demand Jobs – Big companies (like Google, Amazon) still use Java.",
      "8.Versatile – Used in mobile apps, web apps, games, cloud, and AI."
    ]
  },
  {
    id:4,
    icon: "HowWorks",
    title: "How Java Works 🤷?",
    points: [
        "1.You write code → in a .java file (example: Hello.java).",
        "2.Compiler (javac) → Converts your code into Bytecode (a .class file). This bytecode is not machine-specific.",
        "3.JVM (Java Virtual Machine) → Reads the bytecode.",
          "JVM acts like a translator between Java and your computer.",
        "4.Interpreter + JIT Compiler → JVM converts bytecode into machine code (0s and 1s) that your computer understands.",
        "5.Program runs → You see the output!",
        "Simple Flow : Java Code (.java) → Compiler → Bytecode (.class) → JVM → Machine Code → Output"

    ]
  },
  {
    id: 5,
    icon: "Landmark",
    title: "JDK vs JRE vs JVM",
   
    points: [
      "JDK: The Java Development Kit (JDK) is a software development kit that provides a set of tools and libraries for developing Java applications. It includes the Java Runtime Environment (JRE), which is necessary for running Java programs, as well as development tools such as compilers and debuggers. The JDK is essential for developers who want to write, compile, and run Java code.",
      "JRE:The Java Runtime Environment (JRE) is a package that provides the libraries and JVM required to run Java applications. It does not include development tools, making it suitable for users who only need to run Java programs without developing them. The JRE is a subset of the JDK and is included in the JDK installation.",
      "JVM: The Java Virtual Machine (JVM) is a crucial component of the JRE that provides the runtime environment for Java programs. It is responsible for executing Java bytecode on any platform that supports JVM, making Java a “write once, run anywhere” language. The JVM is included in the JRE and is not installed separately.",
    ],
  },
  {
    id:6,
    icon: "Framework",
    title: "Framework vs dependency vs package vs file",
    points: [
      {
        feature: "File",
        Description: "Smallest unit. It’s just a single document (like .java or .class).",
        Example: "Hello.java",
      },
      {
        feature: "Package",
        Description: "A collection of related files (classes, interfaces). Keeps code organized.",
        Example: "java.util package (ArrayList, HashMap)",
      },
      {
        feature: "Dependency",
        Description: "Extra code/library your project needs but is written by someone else.",
        Example: "JSON parsing library",
      },
      {
        feature: "Framework",
        Description: "A big ready-made structure of code that you build your project on. Provides rules, tools, and libraries.",
        Example: "Spring Boot, Hibernate",
      }
    ]
  },
  {
    id: 7,
    icon: "Wrench",
    title: "Features of Java",
    points: [
      "Simple : Easy to learn ,with syntax similar to c++ but without complex features.",
      "Object-Oriented : Everything is treated as object",
      "Platform-independent : Java code rund on any machine with a java virtual machile",
      "Robust : Strong memory management, exception handling,and type checking",
      "Multithreaded : Supports multiple programming",
      "Architectural Neural : No dependency on processor architecture",
      "Portable : Java bytecode can be transferred and run on any platform",
      "High Performance : Just-In-Time(JIT) compiler improves performance.",
      "Secure : Provides a secure environment with features like bytecode verification",
      "sandboxing : Sandboxing is a security mechanism in Java that restricts the execution of untrusted code in a controlled environment",
      "Distributed : Designed for nuilding distributed application",
      "Dynamic : Supports dynamic linking of classes and methods . "

    ],
  },
  {
    id:8,
    icon: "Advantages",
    title: "Advantages of Java",
    points: [
        "Simple → Easy to learn and understand.",
        "Portable → Runs on any operating system.",
        "Secure → Provides safe and reliable code execution.",
        "Object-Oriented → Helps in reusability and better structure.",
        "Robust → Handles errors and memory well.",
        "Multithreaded → Can perform many tasks at the same time."
    ]
  }, {
    id: 9,
    icon: "ThumbsDown",
    title: "Disadvantages of Java",
    points: [
      
        "Slower Performance than Native Languages(like c or c++)",
        "Memory consumption (Automatic garbage Collection and heavy JVM and not ideal for systems like low RAM) ",
        "Verbose Syntax (Java code can be very long-winded compared to modern languaes like python and kotlin .)",
        "Poor GUI Support (Java's GUI liberaries (like Swing and AWT)(Outdated) (Incosstent in look across platforms) JavaFX is better ,but still not widely used for modern UIs.",
        "No Control Over Low-Level Aspects (Java abstracts away memory management and hardware access)(not suitable for system level programming like device drivers or OS kernals)",
        "Security Issues in Order Java Versions (Java Applets and Outdates plugins were once majore security risks through now deprecated,they left a legacy of trust issues .",
        "Hight Startup Time (Java application take longer to start compared to native or scripting languages , this is due to jvm startup and class loading ) ",
        "Backward Compatibility Bloat (Java is very backward compatible , But this leads to bloat and legacy code that must be supported in JVM)"
      
    ]
    
  },
  {
    id:10,
    icon: "Comparison",
    title: "Java vs C vs JavaScript",
    points: [
      { feature: "Type", C: "Procedural", Java: "Object-Oriented", JavaScript: "Scripting (Web)" },
      { feature: "Platform", C: "Platform Dependent", Java: "Platform Independent (JVM)", JavaScript: "Runs in Browsers & Node.js" },
      { feature: "Use Cases", C: "System Programming (OS, Drivers)", Java: "Enterprise Apps, Android", JavaScript: "Web Frontend & Backend" },
      { feature: "Speed", C: "Very Fast (close to hardware)", Java: "Slower (JVM Overhead)", JavaScript: "Depends on Browser Engine" },
      { feature: "Memory Management", C: "Manual (Pointers)", Java: "Automatic (GC)", JavaScript: "Automatic (GC)" },
      { feature: "Syntax", C: "Low-level, Complex", Java: "High-level, Similar to C++", JavaScript: "High-level, Dynamic" },
      { feature: "Execution", C: "Compiled (Machine Code)", Java: "Compiled to Bytecode (JVM)", JavaScript: "Interpreted in Browser" }
    ]
  }
   

];

