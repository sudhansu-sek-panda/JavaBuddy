import React from 'react';
import FlowControlCard from './FlowControlCard.js';
const FlowControl = () => {
 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Flow Control in Java</h1>
      {FlowControlCard && FlowControlCard.length > 0 ? (
        <div className="flex flex-col gap-8">
          {FlowControlCard.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2>
              {card.Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>}
              {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>}
              {card.typesOfControlFlow && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.typesOfControlFlow.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {card.example && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.example.map((line, idx) => (
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
};

export default FlowControl;
