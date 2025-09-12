import React from 'react'
      import { EncapsulationCard } from './oops';
const Encapsulation = () => {
 
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">💊Encapsulation</h1>
      {EncapsulationCard && EncapsulationCard.length > 0 ? (
        <div className="flex flex-col gap-8">
          {EncapsulationCard.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2> */}
              {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>}
              {/* {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>} */}
              <h2 className="text-2xl  mt-6 font-semibold text-purple-700 dark:text-white mb-3">✅Advantages</h2>
              {card.advantages && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.advantages.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                            <h2 className="text-2xl mt-6 font-semibold text-purple-700 dark:text-white mb-3">📋Specifications</h2>

              {card.specifications && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.specifications.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
              
              {card.example && (
                <div className="bg-slate-100 text-slate-600  font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {card.example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
                            <h2 className="text-2xl mt-6 font-semibold text-slate-700 dark:text-white mb-3">✅{card.SecondExample}</h2>

              {card.exampleTwo && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {card.exampleTwo.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
                            <h2 mt-6 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">✅{card.thirdExample}</h2>

              {card.exampleThree && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {card.exampleThree.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-semibold">No data available in FlowControlCard. Please check your data import or initialization.</p>
      )}
    </div>
  );
}

export default Encapsulation