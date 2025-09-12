import React from 'react'
import { BookOpen, CheckCircle, XCircle, Code2, Info } from "lucide-react";
 import IdentifiersCard from './IdentifiersCard.js';
// const Identifier = () => {
 

//   return (
//     <div className="p-6 space-y-8">
//       {/* Definition Section */}
//       <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
//         <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">What is an Identifier?</h2>
//         <p className="text-gray-800 dark:text-gray-300 font-semibold text-base leading-relaxed">
//           {IdentifiersCard[0].Definations}
//         </p>
//       </div>

//       {/* Rules Section */}
//       <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
//         <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-3">Rules for Naming Identifiers</h3>
//         <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300 font-semibold">
//           {IdentifiersCard[0].Rules.map((rule, idx) => (
//             <li key={idx}>{rule}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Examples Section */}
//       <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
//         <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
//           {IdentifiersCard[1].heading}
//         </h3>

//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Valid Identifiers */}
//           <div>
//             <h4 className="font-medium text-green-600 mb-2">✅ Valid Identifiers</h4>
//             <ul className="space-y-1 text-gray-800 dark:text-gray-300 font-semibold">
//               {IdentifiersCard[1].Valid_Identifiers.map((example, idx) => (
//                 <li key={idx}>{example}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Invalid Identifiers */}
//           <div>
//             <h4 className="font-medium text-red-600 mb-2">❌ Invalid Identifiers</h4>
//             <ul className="space-y-1 text-gray-800 dark:text-gray-300 font-semibold">
//               {IdentifiersCard[1].InValid_Identifiers.map((example, idx) => (
//                 <li key={idx}>{example}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Instructions with examples */}
// <div className='bg-white dark:bg-gray-800 p-5 rounded-md shadow-md border border-purple-500 space-y-6'>

//   <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-3">
//     Real-Life Identifier Rules & Examples
//   </h3>

//   {IdentifiersCard[2].instructions.map((instruction, idx) => (
//     <div key={idx} className="space-y-2">
//       {/* Instruction */}
//       <p className='text-gray-800 dark:text-gray-300 font-semibold'>
//         {instruction}
//       </p>

//       {/* Example Block */}
//       <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm leading-relaxed">
//         {IdentifiersCard[2].programes.slice(idx * 3, idx * 3 + 3).map((line, lineIdx) => (
//           <div key={lineIdx}>{line}</div>
//         ))}
//       </div>
//     </div>
//   ))}
// </div>




//     </div>
//   )


const Identifier = () => {
  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-xl">
      
      {/* Definition Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-3">
          <Info className="text-purple-600" size={26} />
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
            What is an Identifier?
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium">
          {IdentifiersCard[0].Definations}
        </p>
      </div>

      {/* Rules Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-pink-500">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-pink-600" size={24} />
          <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300">
            Rules for Naming Identifiers
          </h3>
        </div>
        <ul className="space-y-3">
          {IdentifiersCard[0].Rules.map((rule, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-800 dark:text-gray-300 font-semibold"
            >
              <CheckCircle className="text-green-500 mt-1" size={18} />
              {rule}




             







            </li>
          ))}
        </ul>
      </div>

      {/* Examples Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="text-blue-600" size={24} />
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300">
            {IdentifiersCard[1].heading}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Valid Identifiers */}
          {/* <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700"> */}
          <div className="p-4 rounded-xl ">
            <h4 className="flex items-center justify-center gap-2 text-2xl font-semibold text-green-700 dark:text-green-400 mb-8">
              ✅ Valid 
            </h4>
            {/* <ul className="space-y-2 text-gray-800 dark:text-gray-300 font-medium">
              {IdentifiersCard[1].Valid_Identifiers.map((example, idx) => (
                <li key={idx} className="px-2 py-1 rounded-md hover:bg-green-100 dark:hover:bg-green-800/50">
                  {example}
                </li>
              ))}
            </ul> */}
            {/* <ul className="space-y-3">
  {IdentifiersCard[1].Valid_Identifiers.map((example, idx) => (
    <li
      key={idx}
      className="px-4 py-2 bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700 
                 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 font-medium 
                 hover:shadow-md hover:bg-green-100 dark:hover:bg-green-800/50 transition"
    >
      {example}
    </li>
  ))}
</ul> */}
{/* <ul className="flex flex-wrap gap-3">
  {IdentifiersCard[1].Valid_Identifiers.map((example, idx) => (
    <li
      key={idx}
      className="inline-flex w-fit px-4 py-2 bg-green-50 dark:bg-green-900/30 
                 border border-green-300 dark:border-green-700 rounded-lg 
                 shadow-sm text-gray-800 dark:text-gray-200 font-medium 
                 hover:shadow-md hover:bg-green-100 dark:hover:bg-green-800/50 
                 transition"
    >
      {example}
    </li>
  ))}
</ul> */}
<ul className="flex flex-wrap gap-3">
  {IdentifiersCard[1].Valid_Identifiers.map((example, idx) => (
    <li
      key={idx}
      className="inline-flex w-fit px-4 py-2 bg-green-100 dark:bg-green-800/50
                 border border-green-300 dark:border-green-700 rounded-lg 
                 shadow-md text-gray-800 dark:text-gray-200 font-medium"
    >
      {example}
      
    </li>
    
  ))}
</ul>


          </div>

          {/* Invalid Identifiers */}
          {/* <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700"> */}
          <div className="p-4 rounded-xl ">
            <h4 className="flex items-center  justify-center gap-2 text-2xl font-semibold text-red-700 dark:text-red-400 mb-8">
              ❌ Invalid 
            </h4>
            {/* <ul className="space-y-2 text-gray-800 dark:text-gray-300 font-medium">
              {IdentifiersCard[1].InValid_Identifiers.map((example, idx) => (
                <li key={idx} className="px-2 py-1 rounded-md hover:bg-red-100 dark:hover:bg-red-800/50">
                  {example}
                </li>
              ))}
            </ul> */}

            {/* <ul className="flex flex-wrap gap-3 text-gray-800 dark:text-gray-300 font-medium">
  {IdentifiersCard[1].InValid_Identifiers.map((example, idx) => (
    <li
      key={idx}
      className="inline-flex w-fit px-4 py-2 bg-red-50 dark:bg-red-900/30 
                 border border-red-300 dark:border-red-700 rounded-lg 
                 shadow-sm text-gray-800 dark:text-gray-200 font-medium 
                 hover:shadow-md hover:bg-red-100 dark:hover:bg-red-800/50 
                 transition"
    >
      {example}
    </li>
  ))}
</ul> */}
<ul className="flex flex-wrap gap-3 text-gray-800 dark:text-gray-300 font-medium">
  {IdentifiersCard[1].InValid_Identifiers.map((example, idx) => (
    <li
      key={idx}
      className="inline-flex w-fit px-4 py-2 bg-red-100 dark:bg-red-800/50 
                 border border-red-300 dark:border-red-700 rounded-lg 
                 shadow-md text-gray-800 dark:text-gray-200 font-medium"
    >
      {example}
    </li>
  ))}
</ul>


          </div>
        </div>
      </div>

      {/* Instructions with examples */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-purple-600 space-y-8">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2">
          <Code2 size={22} className="text-purple-500" /> Real-Life Identifier Rules & Examples
        </h3>

        {IdentifiersCard[2].instructions.map((instruction, idx) => (
          <div key={idx} className="space-y-3">
            {/* Instruction */}
            <p className="text-gray-800 dark:text-gray-300 font-semibold flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} /> {instruction}
            </p>

            {/* Example Block */}
            <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-lg shadow-inner border border-gray-700 text-sm leading-relaxed overflow-x-auto">
              {IdentifiersCard[2].programes
                .slice(idx * 3, idx * 3 + 3)
                .map((line, lineIdx) => (
                  <div key={lineIdx}>{line}</div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );


};

// }

export default Identifier
