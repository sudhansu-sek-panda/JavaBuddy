import React from 'react'
import { ConstructorCard } from './oops';

const Constructors = () => {
return (
    <div className="p-6">

      <h1 className="text-3xl text-center font-bold text-purple-700 mb-8">Constructor</h1>
        <div className="flex flex-col gap-8">
 
            <div key={ConstructorCard[0].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3"></h2> */}
              {/* {ConstructorCard[0].Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{ConstructorCard[0].Defination}</p>} */}
              {ConstructorCard[0].definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{ConstructorCard[0].definition}</p>}
              {ConstructorCard[0].points && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {ConstructorCard[0].points.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
 <h1 className="text-3xl text-left font-bold text-purple-700 mb-8">Constructor Rules</h1>

              {ConstructorCard[0].ConstructorRules && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {ConstructorCard[0].ConstructorRules.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
       <h1 className="text-3xl text-left font-bold text-purple-700 mb-8">Types of Constructor</h1>
 {ConstructorCard[0].CoonstructorTypes && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {ConstructorCard[0].CoonstructorTypes.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
               <h1 className="text-3xl text-left font-bold text-purple-700 mb-8">Default Constructor</h1>
              {ConstructorCard[0].types && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {ConstructorCard[0].types.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
            {ConstructorCard[0].parameterConstructorExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {ConstructorCard[0].parameterConstructorExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
              
              {ConstructorCard[0].defaultConstructorNote && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {ConstructorCard[0].defaultConstructorNote.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}

         <h1 className="text-3xl text-left font-bold text-purple-700 mb-8"> Custom / Parameterized Constructor </h1>
    {ConstructorCard[0].parameterConstructorExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {ConstructorCard[0].parameterConstructorExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
            </div>
        </div>
      
    </div>
  );
}

export default Constructors