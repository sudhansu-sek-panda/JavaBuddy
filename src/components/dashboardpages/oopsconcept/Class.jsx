import React from "react";
import ObjectImg from '../../../assets/images/objects/Object.png'
import diagramKeyword from '../../../assets/images/class/diagramKeywordsGradient.png'

import { classCard } from "./oops";





const Class = () => {



  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Class in Java </h1> */}
        <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              
              {/* // Class */}
              <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left">{classCard[0].topicClass}</h1>
              {classCard[0].classDefinition && <p className="text-xl text-gray-800 dark:text-gray-300 mb-4 font-semibold">{classCard[0].classDefinition}</p>}
              
              
                               <h1 className="text-2xl font-bold text-slate-600 mt-8 mb-8 text-left">{classCard[0].ClassSubtopic1} </h1>
              <div>
                <div className="flex justify-center items-center w-full h-[60vh]">
                <div className="w-[50%] h-full">              <img src={classCard[0].ClassSubimg} className=" ml-10 w-[50vh] h-full" alt="" />  </div>
                <div className="w-[50%] h-full">
                   {classCard[0].classComponents && (
                <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                  {classCard[0].classComponents.map((item, idx) => (
                    <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                  ))}
                </ul>
              )}
               </div>
                </div>
                {classCard[0].classExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {classCard[0].classExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
           

               
                </div>
                </div>
                           
                  {/* <p className="mb-4 font-semibold text-gray-700 dark:text-gray-300">{classCard.subdefinition}</p>
             */}
            
{/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{.subtopic1}</h2> */}
              {/* {.Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{.Defination}</p>} */}
              
            
                            {/* <img src={.expimg} alt="" /> */}

 <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              
                {/* // 📦Keywords */}

              <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left">{classCard[1].keywordTopic}</h1>
              {classCard[1].keywordPoint1 && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {classCard[1].keywordPoint1.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

             <div className="flex flex-col items-center justify-center">
               <img src={diagramKeyword} className="mt-8 h-[200px]" alt="" />
              <img src= {classCard[1].keywordImg} className="  mt-12 text-center " alt="" />
              </div>
                {/* {classCard[0].types && (
             </div>
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  {classCard[0].types.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )} */}
               {/* 
              */}

        </div>
      
    </div> 
             
   {/* // Object */}
    <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                   <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left">{classCard[2].ObjectTopic}</h1>
                  
                  {classCard[2].ObjectPoint1 && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {classCard[2].ObjectPoint1.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
              <h1 className="text-2xl font-bold mt-8 text-slate-600 mb-4 text-left">{classCard[2].ObjectSubtopic1} </h1>
               {classCard[2].ObjectPoint2 && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  {classCard[2].ObjectPoint2.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )} 
              
              <h1 className="text-2xl font-bold text-slate-600 mt-8 mb-4 text-left">{classCard[2].ObjectSubtopic2} </h1>
               {classCard[2].ObjectPoint3 && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {classCard[2].ObjectPoint3.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}

            <img src={classCard[0].ClassImg} className='mt-8 w-[100%]' alt="" />
             <h1 className="text-2xl font-bold mt-8 text-slate-600 mb-4 text-left">Object Creation </h1>
               {classCard[2].ObjectCreation && (
                <ul className="list-disc list-inside mb-4 font-semibold  text-gray-700 dark:text-gray-300">
                  {classCard[2].ObjectCreation.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
        <img src={ObjectImg} className='mt-8' alt="" />

              <h1 className="text-2xl font-bold mt-8 text-slate-600 mb-4 text-left">Note </h1>
               {classCard[0].NotePoint1 && (
                <ul className="list-disc list-inside mb-4 font-semibold  text-gray-700 dark:text-gray-300">
                  {classCard[0].NotePoint1.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
             
        </div>
      
    </div> 
    {/* // CLass Loading */}
     <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">

 <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left">{classCard[5].topicClassLoading}</h1>
              {classCard[5].classLoadingDefinition && <p className="text-xl text-gray-800 dark:text-gray-300 mb-4 font-semibold">{classCard[5].classLoadingDefinition}</p>}
 {classCard[5].ClassLoadingPoint1 && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {classCard[5].ClassLoadingPoint1.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
             
            </div>
        </div>
       </div>
    </div> 
 

  );
}

export default Class;
