// import React from "react";
import { Landmark, ThumbsDown } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";
import Advantages from "../../../assets/images/Introduction/Advantages.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { introCards } from "./IntroCards";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import {
  Coffee,
  PanelsTopLeft,
  Box,
  Boxes,
  Layers,
  Wrench,
  Code2,
  Terminal,
  Rocket,
  Shield,
  Zap,
  Search,
  Filter,
  LayoutList,
  LayoutGrid,
  CalendarClock,
  Milestone,
  BadgeCheck,
  HelpCircle,
  CheckCircle2,
  Cog,
} from "lucide-react";

// shadcn/ui components (assumes your project is set up with shadcn)
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Switch } from "@/components/ui/switch";

// Icon Map

const iconMap = {
  Java: <FaJava className="text-purple-600 dark:text-purple-300" size={40} />,
  Landmark: (
    <Landmark className="text-purple-600 dark:text-purple-300" size={40} />
  ),
  Wrench: <Wrench className="text-purple-600 dark:text-purple-300" size={40} />,
  History: (
    <BsClockHistory
      className="text-purple-600 dark:text-purple-300"
      size={40}
    />
  ),
  ThumbsDown: (
    <ThumbsDown className="text-red-500 dark:text-red-400" size={40} />
  ),
  Why: (
    <HelpCircle className="text-purple-600 dark:text-purple-300" size={40} />
  ),
  Advantages: (
    <FaRegThumbsUp className="text-green-600 dark:text-green-300" size={40} />
  ),
  Framework: <Boxes className="text-blue-600 dark:text-blue-300" size={40} />,
  Comparison: (
    <Code2 className="text-orange-600 dark:text-orange-300" size={40} />
  ),
  HowWorks: <Cog className="text-indigo-600 dark:text-indigo-300" size={40} />,
};

const Introduction = () => {
  return (
    <div className="min-h-screen w-full py-18 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Introduction to Java
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-8">
        {introCards.map((card) => (
          <div
            key={card.id}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            {/* {card.image && (
              <div className="flex justify-center mb-4">
                <img src={card.image} alt="Java Logo" className="w-40 h-40" />
              </div>
            )} */}

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-5 text-xl leading-relaxed">
              {card.description}
            </p>

            {/* Points */}
            {/*<ul className="space-y-3">
              {card.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                >
                  <TiInputChecked className="text-green-500 mt-1" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>*/}

            {/* Points */}
            {/* Array.isArray() → checks if points is actually an array.
            typeof card.points[0] → checks what type of elements are inside that array. */}

            {Array.isArray(card.points) &&
            typeof card.points[0] === "string" ? (
              <ul className="space-y-3">
                {card.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-800 dark:text-gray-200 text-xl"
                  >
                    <TiInputChecked className="text-green-500 mt-1" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 dark:border-gray-600">
                  <thead className="bg-purple-600 text-white">
                    {card.icon === "Comparison" ? (
                      <tr>
                        <th className="p-2 text-left">Feature</th>
                        <th className="p-2 text-left">C</th>
                        <th className="p-2 text-left">Java</th>
                        <th className="p-2 text-left">JavaScript</th>
                      </tr>
                    ) : card.icon === "Framework" ? (
                      <tr>
                        <th className="p-2 text-left">Feature</th>
                        <th className="p-2 text-left">Description</th>
                        <th className="p-2 text-left">Example</th>
                      </tr>
                    ) : null}
                  </thead>
                  <tbody>
                    {card.points.map((row, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {card.icon === "Comparison" ? (
                          <>
                            <td className="p-2">{row.feature}</td>
                            <td className="p-2">{row.C}</td>
                            <td className="p-2">{row.Java}</td>
                            <td className="p-2">{row.JavaScript}</td>
                          </>
                        ) : card.icon === "Framework" ? (
                          <>
                            <td className="p-2">{row.feature}</td>
                            <td className="p-2">{row.Description}</td>
                            <td className="p-2">{row.Example}</td>
                          </>
                        ) : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
