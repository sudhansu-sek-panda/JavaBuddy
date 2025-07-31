import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedCode, setDisplayedCode] = useState("");

  const javaSnippet = [
    "public class HelloWorld {",
    "    public static void main(String[] args) {",
    '        System.out.println("Hello, Java Buddy!👋");',
    "    }",
    "}",
    "o/p:- Hello,Java Buddy!👋",
  ];

  useEffect(() => {
    setIsVisible(true);
    setDisplayedCode("");
    let fullCode = "";
    let line = 0;
    let char = 0;

    const interval = setInterval(() => {
      if (line < javaSnippet.length) {
        const currentLine = javaSnippet[line];
        if (char < currentLine.length) {
          fullCode += currentLine[char++];
        } else {
          fullCode += "\n";
          char = 0;
          line++;
        }
        setDisplayedCode(fullCode);
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-[#0f0f3f] to-black text-white font-sans overflow-hidden">
      <main className="flex-grow relative z-10">
        <section className="relative px-6 md:px-20 py-32 flex flex-col md:flex-row justify-between items-center">
          <div
            className={`max-w-xl transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Typewriter
                words={["Unleash Java Mastery with AI Precision"]}
                loop={false}
                cursor
                cursorStyle="▌"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Explore the Java universe with Java Buddy — AI-enhanced learning
              for modern developers. Dive into OOP, Collections, Exceptions &
              more.
            </p>
            <div className="flex gap-4">
              <Link
                to="/user/signin"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/30 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div
            className={`relative aspect-square w-80 mt-10 md:mt-0 transition-transform duration-1000 ease-in-out
  ${
    isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-96 md:-translate-x-full"
  }
`}
          >
            <div className="relative w-full h-[300px] flex items-center justify-center overflow-visible">
              <div className="relative z-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                  alt="Java Logo"
                  className="w-40 h-40 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                />
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-30 animate-ping-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500 opacity-40 animate-pulse-slow"></div>
              </div>

              {[...Array(5)].map((_, i) => {
                const radiusX = 80 + i * 30;
                const radiusY = 60 + i * 25;
                const duration = 10 + i * 1.5;
                const delay = i * 0.5;
                const angle = (i * 360) / 5;
                const rad = (angle * Math.PI) / 180;
                const x = radiusX * Math.cos(rad);
                const y = radiusY * Math.sin(rad);
                const colors = [
                  ["from-blue-400", "to-purple-500"],
                  ["from-pink-400", "to-red-500"],
                  ["from-yellow-300", "to-orange-400"],
                  ["from-green-400", "to-teal-600"],
                  ["from-indigo-400", "to-fuchsia-500"],
                ];
                const [from, to] = colors[i % colors.length];

                return (
                  <div
                    key={i}
                    className="absolute w-full h-full top-0 left-0 pointer-events-none"
                    style={{
                      animation: `orbit-${i} ${duration}s linear infinite`,
                      animationDelay: `${delay}s`,
                    }}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${from} ${to} shadow-lg animate-pulse`}
                      style={{
                        position: "absolute",
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                        boxShadow: `0 0 12px 6px rgba(255,255,255,0.25)`,
                      }}
                    ></div>
                  </div>
                );
              })}

              <style>
                {`
                ${[...Array(5)]
                  .map(
                    (_, i) => `
                    @keyframes orbit-${i} {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `
                  )
                  .join("\n")}
                @keyframes ping-slow {
                  0% { transform: scale(1); opacity: 0.5; }
                  100% { transform: scale(1.8); opacity: 0; }
                }
                .animate-ping-slow {
                  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                @keyframes pulse-slow {
                  0%, 100% { transform: scale(1); opacity: 0.6; }
                  50% { transform: scale(1.2); opacity: 1; }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 2.5s ease-in-out infinite;
                }
              `}
              </style>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 pb-20 flex justify-center">
          <div className="bg-black/30 backdrop-blur-md border border-cyan-500 rounded-2xl p-6 w-full max-w-2xl shadow-lg shadow-cyan-400/20">
            <h2 className="text-xl font-semibold text-cyan-300 mb-4">
              Java Snippet
            </h2>
            <div className="bg-gradient-to-tr from-[#050505] to-[#1a1a2e] text-green-400 font-mono text-sm md:text-base p-4 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border-l-4 border-cyan-400">
              <pre>{displayedCode}</pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
