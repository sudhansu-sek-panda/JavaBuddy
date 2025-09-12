// import React from 'react'

import InstallationCard from './InstallationCard.js'
// import Step1 from '../../../assets/images/Introduction/step1.png'
// const Installations = () => {
//   return (
//     <div>
//       {/* Setting up Java Installation */}
//  <div className="flex flex-col gap-8">
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
//  <h1 className="text-3xl text-center font-bold text-purple-700 mb-8 ">{InstallationCard[0].topic}</h1>
// <div className="">
//                    {InstallationCard[0].Steps && (
//                 <ul className="list-none  mb-2 p-4 pb-6 pt-2  text-gray-600 dark:text-gray-300">
//                   {InstallationCard[0].Steps.map((item, idx) => (
//                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
//                   ))}
//                 </ul>
//               )}
//                </div>



              


//     </div>
//     </div>
//           {/* Setting up IDE Installation */}
//      <div className="flex flex-col mt-8 gap-8">
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
//  <h1 className="text-3xl text-left font-bold text-purple-700 mb-8 ">{InstallationCard[1].topic}</h1>
// <div className="">
//                    {InstallationCard[1].steps && (
//                 <ul className="list-none  mb-2 p-4 pb-6 pt-2  text-gray-600 dark:text-gray-300">
//                   {InstallationCard[1].steps.map((item, idx) => (
//                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
//                   ))}
//                 </ul>
//               )}
//                </div>



              


//     </div>
//     </div>
//     </div>

//   )
// }

// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { CheckCircle, Terminal, Download } from "lucide-react";
// import React, { useState }  from "react";

import { CheckCircle, Terminal, Download, Copy  } from "lucide-react";

// const InstallationCard = [
//   {
//     id: 1,
//     topic: "Java Installation",
//     Steps: [
//       "Step 1: Visit the official Oracle website https://www.oracle.com/in/java/technologies/downloads/.",
//       "Step 2: Click on the 'Download Java' icon as shown in the below image.",
//       "Step 3: Select the appropriate version for your operating system (Windows, macOS, Linux) and click on the download link.",
//       "Step 4: Once the download is complete, run the installer and follow the on-screen instructions to install Java.",
//       "Step 5: After installation, verify installation by typing 'java -version' in command prompt.",
//       "Step 6: Set up JAVA_HOME environment variable.",
//       "Step 7: Add Java bin directory to system PATH variable.",
//     ],
//   },
//   {
//     id: 2,
//     topic: "Setting up Eclipse IDE",
//     steps: [
//       "Step 1: Visit https://www.eclipse.org/downloads/.",
//       "Step 2: Download Eclipse IDE for Java development.",
//       "Step 3: Extract the downloaded file.",
//       "Step 4: Run 'eclipse' executable to launch IDE.",
//       "Step 5: Select workspace directory on first launch.",
//       "Step 6: Create a Java project via File > New > Java Project.",
//     ],
//     EclipseCommandsForJava: [
//       "File > New > Java Project",
//       "Run > Run  (Ctrl + F11)",
//       "Run > Debug (F11)",
//       "Project > Build All",
//     ],
//   },
// ];


// modifiction 1
// const Installations = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
//       {InstallationCard.map((section, idx) => (
//         <div
//           key={idx}
//           className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700"
//         >
//           {/* Header */}
//           <div className="bg-purple-100 dark:bg-purple-900 rounded-t-2xl p-4 flex items-center gap-2">
//             {idx === 0 ? (
//               <Download size={24} className="text-purple-600" />
//             ) : (
//               <Terminal size={24} className="text-purple-600" />
//             )}
//             <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">
//               {section.topic}
//             </h2>
//           </div>

//           {/* Content */}
//           <div className="p-6 space-y-6">
//             {section.Steps && (
//               <ul className="space-y-3">
//                 {section.Steps.map((step, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
//                   >
//                     <CheckCircle className="text-green-500 mt-1" size={22} />
//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {section.steps && (
//               <ul className="space-y-3">
//                 {section.steps.map((step, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
//                   >
//                     <CheckCircle className="text-green-500 mt-1" size={22} />
//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {section.EclipseCommandsForJava && (
//               <div>
//                 <h3 className="text-xl font-semibold text-purple-600 mb-3">
//                   💻 Eclipse Commands
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {section.EclipseCommandsForJava.map((cmd, i) => (
//                     <div
//                       key={i}
//                       className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-800 dark:text-gray-200 font-mono text-sm shadow"
//                     >
//                       {cmd}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };






// export default Installations;


// Modification 2

// const Installations = () => {
//   const [openCard, setOpenCard] = useState(null);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied: " + text);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
//       {InstallationCard.map((section, idx) => (
//         <div
//           key={idx}
//           className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-purple-300 dark:hover:shadow-purple-900 transition-transform duration-300 hover:-translate-y-1"
//         >
//           {/* Header */}
//           <button
//             onClick={() => setOpenCard(openCard === idx ? null : idx)}
//             className="w-full flex items-center justify-between bg-purple-100 dark:bg-purple-900 rounded-t-2xl p-5 cursor-pointer"
//           >
//             <div className="flex items-center gap-2">
//               {idx === 0 ? (
//                 <Download size={24} className="text-purple-600" />
//               ) : (
//                 <Terminal size={24} className="text-purple-600" />
//               )}
//               <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">
//                 {section.topic}
//               </h2>
//             </div>
//             <span className="text-purple-600 dark:text-purple-300 font-bold">
//               {openCard === idx ? "▲" : "▼"}
//             </span>
//           </button>

//           {/* Collapsible Content */}
//           {openCard === idx && (
//             <div className="p-6 space-y-8">
//               {section.Steps && (
//                 <ul className="space-y-4">
//                   {section.Steps.map((step, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300"
//                     >
//                       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow">
//                         {i + 1}
//                       </span>
//                       <span>{step}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {section.steps && (
//                 <ul className="space-y-4">
//                   {section.steps.map((step, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300"
//                     >
//                       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow">
//                         {i + 1}
//                       </span>
//                       <span>{step}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {section.EclipseCommandsForJava && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-purple-600 mb-4">
//                     💻 Eclipse Commands
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {section.EclipseCommandsForJava.map((cmd, i) => (
//                       <div
//                         key={i}
//                         className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-800 dark:text-gray-200 font-mono text-sm shadow hover:ring-2 hover:ring-purple-400 transition"
//                       >
//                         <span>{cmd}</span>
//                         <button
//                           onClick={() => copyToClipboard(cmd)}
//                           className="ml-3 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400"
//                         >
//                           <Copy size={18} />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const Installations = () => {
//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     // alert("Copied: " + text);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
//       {InstallationCard.map((section, idx) => (
//         <div
//           key={idx}
//           className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-purple-300 dark:hover:shadow-purple-900 transition-transform duration-300 hover:-translate-y-1"
//         >
//           {/* Header */}
//           <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900 rounded-t-2xl p-5">
//             {idx === 0 ? (
//               <Download size={24} className="text-purple-600" />
//             ) : (
//               <Terminal size={24} className="text-purple-600" />
//             )}
//             <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">
//               {section.topic}
//             </h2>
//           </div>

//           {/* Content (always visible now) */}
//           <div className="p-6 space-y-8">
//             {section.Steps && (
//               <ul className="space-y-4">
//                 {section.Steps.map((step, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300"
//                   >
//                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow">
//                       {i + 1}
//                     </span>
//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {section.steps && (
//               <ul className="space-y-4">
//                 {section.steps.map((step, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300"
//                   >
//                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow">
//                       {i + 1}
//                     </span>
//                     <span>{step}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {section.EclipseCommandsForJava && (
//               <div>
//                 <h3 className="text-xl font-semibold text-purple-600 mb-4">
//                   💻 Eclipse Commands
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {section.EclipseCommandsForJava.map((cmd, i) => (
//                     <div
//                       key={i}
//                       className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-800 dark:text-gray-200 font-mono text-sm shadow hover:ring-2 hover:ring-purple-400 transition"
//                     >
//                       <span>{cmd}</span>
//                       <button
//                         onClick={() => copyToClipboard(cmd)}
//                         className="ml-3 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400"
//                       >
//                         <Copy size={18} />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Installations;

// 


// export default Installations

import React from "react";
// import { Copy, Terminal, Download } from "lucide-react";


const Installations = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      
      {InstallationCard.map((section, idx) => (
         <div className="flex flex-col gap-8">
        
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
           
        <div
          key={idx}
          className="bg-white "
        >
          {/* Header */}
          <div className="flex items-center gap-2 ml-0 bg-purple-100 dark:bg-purple-900 rounded-t-2xl p-5">
            {idx === 0 ? (
              <Download size={24} className="text-purple-600" />
            ) : (
              <Terminal size={24} className="text-purple-600" />
            )}
            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-200">
              {section.topic}
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {section.Steps &&
              section.Steps.map((step, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow">
                      {i + 1}
                    </span>
                    <span>{step.text}</span>
                  </div>

                  {step.img && (
                    <img
                      src={step.img}
                      alt={`Step ${i + 1}`}
                      className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                  )}

                  {step.cmd && (
                    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-800 dark:text-gray-200 font-mono text-sm shadow hover:ring-2 hover:ring-purple-400 transition">
                      <span>{step.cmd}</span>
                      <button
                        onClick={() => copyToClipboard(step.cmd)}
                        className="ml-3 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                  )}
                </div>
              ))}

            {section.steps &&
              section.steps.map((step, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow">
                      {i + 1}
                    </span>
                    <span>{step.text}</span>
                  </div>

                  {step.img && (
                    <img
                      src={step.img}
                      alt={`Step ${i + 1}`}
                      className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                  )}
                </div>
              ))}

            {section.EclipseCommandsForJava && (
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  💻 Eclipse Commands
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.EclipseCommandsForJava.map((cmd, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-gray-800 dark:text-gray-200 font-mono text-sm shadow hover:ring-2 hover:ring-purple-400 transition"
                    >
                      <span>{cmd}</span>
                      <button
                        onClick={() => copyToClipboard(cmd)}
                        className="ml-3 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
            </div>
          </div>


      ))}
    </div>
  );
};

export default Installations;
