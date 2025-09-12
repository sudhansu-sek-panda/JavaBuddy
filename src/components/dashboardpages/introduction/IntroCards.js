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
    id:2,
    icon: "",
    title: "History and Evolution Of Java",
    // image: Evolution,
    points: [
      "Java was conceived by James Gosling at Sun Microsystems in 1991, originally named Oak. It was developed as a programming language for intelligent appliances. In 1995, they renamed the language Java and released it to the public. Its core philosophy was a simple yet revolutionary idea: Write Once, Run Anywhere (WORA).",
      "How did Java Achieved WORA ?",
      "Java's magic lies in its virtual machine. Instead of compiling code directly into machine language for a specific operating system, Java code is compiled into an intermediate form called bytecode. This bytecode isn't tied to any particular machine.When you run a Java program, the Java Virtual Machine (JVM), a software layer that sits on top of your operating system, translates the bytecode into the machine code that your computer can understand. This means the same bytecode can run on any device with a JVM installed, whether it's a computer, a phone, or even a smart TV.",
      "Simple Flow : Your Java Code (.java) -> Java Compiler -> Java ByteCode (.class) -> JVM -> Your Computer's CPU"

    ]
  },
  {
    id:3,
    icon: "",
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
    icon: "",
    title: "How Java Works 🤷?",
    points: [
        "1.You write code → in a .java file (example: Hello.java).",
        "2.Compiler (javac) → Converts your code into Bytecode (a .class file).",
          "This bytecode is not machine-specific.",
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
    icon: "",
    title: "Framework vs dependency vs package vs file",
    points: [
      "1. File",
      "Smallest unit.",
      "It’s just a single document (like .java or .class).",  
      "Example: Hello.java",
      "2. Package",
      "A collection of related files (classes, interfaces).",
      "Keeps code organized.",
      "Example: java.util package has classes like ArrayList, HashMap.",
      "3. Dependency",
      "Extra code/library that your project needs but is written by someone else.",
      "Example: If you need JSON parsing, you add the json dependency.",
      "4. Framework",
      "A big ready-made structure of code that you build your project on.",
      "Provides rules, tools, and libraries.",
      "Example: Spring Boot, Hibernate."
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
    icon: "",
    title: "Advantages of Java",
    points: [

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
    icon: "",
    title: "Java vs C vs JavaScript",
    points: [

    ]
  }
   

];

