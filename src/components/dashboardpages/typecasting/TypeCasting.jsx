

// const typeCasting = [
// {
//   id:0,
// QnsTypeCasting:"What is Type-casting in java?",

// TypeCasting:["Type casting in Java is the process of converting a value from one data type to another. ",

// "This can be done either automatically by the compiler (implicit casting) or manually by the programmer"] 

// }
// ]

import { motion } from "framer-motion";
import TypecastingCard from "./TypecastingCard.js";
import React from 'react';
import ExplicitImplicitImg from '../../../assets/images/typecasting/ExplicitImplicitLogo.png';
import NarrowingWidening from '../../../assets/images/typecasting/NarrowingWidening.webp';




  
// Original

  // return (
  //   <div className="p-6 space-y-8">
  //     <h1 className="text-3xl font-bold text-purple-700">Java Typecasting</h1>
    
  //     {TypecastingCard.map((card) => (
  //       <div key={card.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-l-4 border-purple-500">
  //         <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{card.topic}</h2>
  //         <p className="text-gray-800 dark:text-gray-300 font-medium mb-4">{card.defination}</p>
  //         <img src={card.TypeCastingImg} alt="" />
  //         {Object.entries(card).map(([key, value]) => {
  //           if (
  //             key !== 'id' &&
  //             key !== 'topic' &&
  //             key !== 'defination' &&
  //             Array.isArray(value)
  //           ) {
  //             return (
  //               <div key={key} className="mb-4">
  //                 <h3 className="text-xl font-semibold text-purple-600 mb-2">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
  //                 <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-300 font-semibold">
  //                   {value.map((item, idx) => (
  //                     <li key={idx}>{item}</li>
  //                   ))}
  //                 </ul>
  //               </div>
  //             );
  //           }
  //           if (
  //             key !== 'id' &&
  //             key !== 'topic' &&
  //             key !== 'defination' &&
  //             typeof value === 'string'
  //           ) {
  //             return (
  //               <p key={key} className="mb-2 text-gray-700 dark:text-gray-300 font-semibold">
  //                 <strong className="text-purple-600 capitalize">{key}:</strong> {value}
  //               </p>
  //             );
  //           }
  //           return null;
  //         })}

  //         <div className="mt-4">
  //           <h3 className="text-lg font-semibold text-green-600 mb-1">Example of Typecasting:</h3>
  //           <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm space-y-1">
  //             <pre>// Implicit Typecasting</pre>
  //             <pre>int a = 10;</pre>
  //             <pre>double d = a; // automatic widening</pre>
  //             <pre>// Explicit Typecasting</pre>
  //             <pre>double x = 10.5;</pre>
  //             <pre>int y = (int) x; // manual narrowing</pre>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
// };



// const Typecasting = ({ TypecastingCard }) => {

  const TypeCasting = () => {
    console.log(TypecastingCard);
  // return (
  //   <div className="p-8 space-y-10 bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
  //     <h1 className="text-4xl font-extrabold text-center text-green-700 dark:text-green-400 drop-shadow-lg">
  //       Java Typecasting
  //     </h1>

  //     {TypecastingCard.map((card, idx) => (
  //       <motion.div
  //         key={card.id}
  //         initial={{ opacity: 0, y: 40 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
  //         whileHover={{ scale: 1.02 }}
  //         className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-l-8 border-green-500 hover:shadow-2xl transition-all duration-300"
  //       >
  //         <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300 mb-3 tracking-wide">
  //           {card.topic}
  //         </h2>
  //         <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
  //           {card.defination}
  //         </p>

  //         <motion.img
  //           src={card.TypeCastingImg}
  //           alt=""
  //           className="rounded-lg shadow-md mx-auto mb-5"
  //           whileHover={{ scale: 1.05, rotate: 1 }}
  //           transition={{ type: "spring", stiffness: 200 }}
  //         />

  //         {Object.entries(card).map(([key, value]) => {
  //           if (
  //             key !== "id" &&
  //             key !== "topic" &&
  //             key !== "defination" &&
  //             Array.isArray(value)
  //           ) {
  //             return (
  //               <div key={key} className="mb-5">
  //                 <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
  //                   {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
  //                 </h3>
  //                 <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-300 font-medium">
  //                   {value.map((item, idx) => (
  //                     <motion.li
  //                       key={idx}
  //                       initial={{ x: -10, opacity: 0 }}
  //                       animate={{ x: 0, opacity: 1 }}
  //                       transition={{ delay: idx * 0.1 }}
  //                     >
  //                       {item}
  //                     </motion.li>
  //                   ))}
  //                 </ul>
  //               </div>
  //             );
  //           }
  //           if (
  //             key !== "id" &&
  //             key !== "topic" &&
  //             key !== "defination" &&
  //             typeof value === "string"
  //           ) {
  //             return (
  //               <p
  //                 key={key}
  //                 className="mb-3 text-gray-700 dark:text-gray-300 font-medium"
  //               >
  //                 <strong className="text-green-600 capitalize">
  //                   {key}:
  //                 </strong>{" "}
  //                 {value}
  //               </p>
  //             );
  //           }
  //           return null;
  //         })}

  //         <div className="mt-6">
  //           <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
  //             Example of Typecasting:
  //           </h3>
  //           <motion.div
  //             className="bg-gray-900 text-green-300 font-mono p-5 rounded-xl shadow-inner overflow-x-auto text-sm space-y-1 border border-green-700"
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ delay: 0.4 }}
  //             whileHover={{ scale: 1.01 }}
  //           >
  //             <pre>// Implicit Typecasting</pre>
  //             <pre>int a = 10;</pre>
  //             <pre>double d = a; // automatic widening</pre>
  //             <pre>// Explicit Typecasting</pre>
  //             <pre>double x = 10.5;</pre>
  //             <pre>int y = (int) x; // manual narrowing</pre>
  //           </motion.div>
  //         </div>
  //       </motion.div>
  //     ))}
  //   </div>
  // );


  return (
    <div className="p-8 space-y-10 bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-green-700 dark:text-green-400 drop-shadow-lg">
        🔄 Typecasting
      </h1>

      {TypecastingCard.map((card, idx) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-l-8 border-green-500 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300 mb-3 tracking-wide">
            {card.topic}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
            {card.defination}
          </p>

          {/* Render image only if it exists */}
          {/* {card.TypeCastingImg && (
            <motion.img
              src={card.TypeCastingImg}
              alt="typecasting"
              className="rounded-lg shadow-md mx-auto mb-5"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          )} */}
{/* Popup */}
      {/* {card.TypeCastingImg && (
  <motion.img
    src={card.TypeCastingImg}
    alt="typecasting"
    className="rounded-lg shadow-md mx-auto mb-5"
    whileHover={{ scale: 1.15 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 10
    }}
  />
)} */}
{/* Shimmer shine effect */}
{card.TypeCastingImg && (
  <motion.img
    src={card.TypeCastingImg}
    alt="typecasting"
    className="rounded-lg shadow-md mx-auto mb-5 relative overflow-hidden"
    // whileHover={{ scale: 1.05 }}
    // transition={{ duration: 0.5 }}
  />
)}
{/* Swing Animation */}
{/* {card.TypeCastingImg && (
  <motion.img
    src={card.TypeCastingImg}
    alt="typecasting"
    className="rounded-lg shadow-md mx-auto mb-5"
    whileHover={{ rotate: [0, 5, -5, 3, -3, 0] }}
    transition={{ duration: 0.8 }}
  />
)} */}


          {/* Render only dynamic array/string props */}
          {Object.entries(card).map(([key, value]) => {
            if (
              ["id", "topic", "defination", "TypeCastingImg"].includes(key)
            ) {
              return null; // skip unnecessary fields
            }

            // Render arrays as list
            if (Array.isArray(value)) {
              return (
                <div key={key} className="mb-5">
                  <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) =>
                      str.toUpperCase()
                    )}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-300 font-medium">
                    {value.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Render plain string props
            if (typeof value === "string") {
              return (
                <p
                  key={key}
                  className="mb-3 text-gray-700 dark:text-gray-300 font-medium"
                >
                  <strong className="text-green-600 capitalize">
                    {key}:
                  </strong>{" "}
                  {value}
                </p>
              );
            }

            return null;
          })}

          {/* Example section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
              Example of Typecasting:
            </h3>
            <motion.div
              className="bg-gray-900 text-green-300 font-mono p-5 rounded-xl shadow-inner overflow-x-auto text-sm space-y-1 border border-green-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
            >

              <pre>// Implicit Typecasting</pre>
              <pre>int a = 10;</pre>
              <pre>double d = a; // automatic widening</pre>
              <pre>// Explicit Typecasting</pre>
              <pre>double x = 10.5;</pre>
              <pre>int y = (int) x; // manual narrowing</pre>
            </motion.div>
          </div>
            {/* Image */}

      
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={NarrowingWidening}
        alt="Data Types Diagram"
        className="mt-12 w-[300px] rounded-xl shadow-lg mx-auto"
      />
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src={ExplicitImplicitImg}
        alt="Data Types Diagram"
        className="mt-12 w-[280px]  rounded-xl shadow-lg mx-auto"
      />
        </motion.div>
        
      ))}
    </div>
  );

};

export default  TypeCasting ;


// export default TypeCasting;
