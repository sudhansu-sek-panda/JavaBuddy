import React from 'react'
import DataTypeImg from '../../../assets/images/datatypes/DataTypesInJava.png'
import DataTypeSummery from '../../../assets/images/datatypes/DataTypeSummery.png'



import { motion } from "framer-motion";
import { BookOpen, Database, Layers } from "lucide-react";
import dataTypeCard from './dataTypeCard.js';

// Original 
//   const DataType = () => {
//   return (
//     <div>
     

//        {/* <div className="flex flex-col gap-8">
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">

//  <h1 className="text-3xl text-center font-bold text-purple-700 mb-8 ">{dataTypeCard[0].topic}</h1>
//     </div>
//     </div> */}
//     {/* Data Types */}
//        <div className="flex flex-col mt-8 gap-8">
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">

//  <h1 className="text-3xl text-center font-bold text-purple-700 mb-8 ">{dataTypeCard[0].topic}</h1>
//   <p className="text-gray-600 dark:text-gray-300 text-lg">{dataTypeCard[0].definition}</p>
//     <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">{dataTypeCard[0].types}</p>
//     </div>
//     </div>
// {/* Primitive */}
//        <div className="flex flex-col mt-8 gap-8">
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">

//  <h1 className="text-3xl text-center font-bold text-purple-700 mb-8 ">{dataTypeCard[1].topic}</h1>
//     <p className="text-gray-600 dark:text-gray-300 text-lg">{dataTypeCard[1].definition.join(' ')}</p>
//      {dataTypeCard[1].primitiveTypes && (
//                 <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
//                   {dataTypeCard[1].primitiveTypes.map((item, idx) => (
//                     <li key={idx}>✔️{item}</li>
//                   ))}
//                 </ul>
//               )}
//     </div>
//     </div>
// {/* Non-Primitive */}
//        <div className="flex flex-col mt-8 gap-8">
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">

//  <h1 className="text-3xl text-center font-bold text-purple-700 mb-8 ">{dataTypeCard[2].topic}</h1>
//     <p className="text-gray-600 dark:text-gray-300 text-lg">{dataTypeCard[2].definition.join(' ')}</p>
//      {dataTypeCard[2].referenceTypes && (
//                 <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
//                   {dataTypeCard[2].referenceTypes.map((item, idx) => (
//                     <li key={idx}>✔️{item}</li>
//                   ))}
//                 </ul>
//               )}
//     </div>
//     </div>




//     <img src={DataTypeImg} className='mt-8' alt="" />
//     </div>
//   )
// }

// export default DataType

const DataType = () => {
  return (
     <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
             
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center text-purple-700 dark:text-purple-400"
      >
        Data Types in Java
      </motion.h1>
  {/* Image */}
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={DataTypeImg}
        alt="Data Types Diagram"
        className="mt-12 rounded-xl shadow-lg mx-auto"
      />
      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* General Data Type */}
        {/* <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500"
        >
          <BookOpen className="w-10 h-10 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            {dataTypeCard[0].topic}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {dataTypeCard[0].definition}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
            {dataTypeCard[0].types}
          </p>
        </motion.div> */}

        {/* Primitive Data Types */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
        >
          <Database className="w-10 h-10 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {dataTypeCard[1].topic}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {dataTypeCard[1].definition.join(" ")}
          </p>
          {dataTypeCard[1].primitiveTypes && (
            <ul className="mt-4 space-y-2 font-medium text-gray-700 dark:text-gray-300">
              {dataTypeCard[1].primitiveTypes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 bg-green-100 dark:bg-green-800/40 px-3 py-2 rounded-lg"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Non-Primitive Data Types */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500"
        >
          <Layers className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            {dataTypeCard[2].topic}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {dataTypeCard[2].definition.join(" ")}
          </p>
          {dataTypeCard[2].referenceTypes && (
            <ul className="mt-4 space-y-2 font-medium text-gray-700 dark:text-gray-300">
              {dataTypeCard[2].referenceTypes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 bg-blue-100 dark:bg-blue-800/40 px-3 py-2 rounded-lg"
                >
                  🔗 {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
         {/* Image */}
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={DataTypeSummery}
        alt="Data Types Summery"
        className="mt-12 shadow-lg  w-[1000px]"
      />
      
        
      </div>

    
    </div>
    </div>
    </div>
  );
};

export default DataType;