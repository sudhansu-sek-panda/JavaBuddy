import React from 'react'
import { BlocksCard } from './oops';

const Blocks = () => {
  
  
  return (
     <div className="p-6">
                     <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">{BlocksCard[0].Blocktopic}</h1>

         <div className="flex flex-col gap-8">
             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
    
               {BlocksCard[0].blockDefinition && <p className="text-xl text-gray-800 dark:text-gray-300 mb-4 font-semibold">{BlocksCard[0].blockDefinition}</p>}

               
               
                
                    {BlocksCard[0].typeOfBlocks && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {BlocksCard[0].typeOfBlocks.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️ {item}</li>
                   ))}
                 </ul>
               )}

               
          <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left"> Flow Control</h1>
 {BlocksCard[0].StaticBlockFlowControl && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {BlocksCard[0].StaticBlockFlowControl.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                   ))}
                 </ul>
               )}
                 {BlocksCard[0].StaticBlockExample && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {BlocksCard[0].StaticBlockExample.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}
                         <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left"> Flow Control</h1>

                  {BlocksCard[0].NonStaticFlowControl && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {BlocksCard[0].NonStaticFlowControl.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                   ))}
                 </ul>
               )}

                 {BlocksCard[0].NonStaticExecution && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {BlocksCard[0].NonStaticExecution.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}
            
 
                
                
       
     </div> 
     </div> 
     </div> 
  
 
   );


}

export default Blocks