import React from 'react';
import OperatorCard from './OperatorCard.js';
const Operators = () => {
 

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Operators in Java</h1>

      <div className="flex flex-col gap-8">
        {OperatorCard.map((card) => (
          <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">
              {card.Topic}
            </h2>

            {card.Defination && (
              Array.isArray(card.Defination) ? (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.Defination.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">
                  {card.Defination}
                </p>
              )
            )}

            {Object.entries(card).map(([key, value]) => {
              if (['id', 'Topic', 'Defination'].includes(key)) return null;

              return (
                <div key={key} className="mb-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())}
                  </h3>
                  {key === 'Example' ? (
                    <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                      {value.map((item, idx) => (
                        <pre key={idx}>{item}</pre>
                      ))}
                    </div>
                  ) : Array.isArray(value) ? (
                    <ul className="space-y-1 list-disc list-inside font-semibold text-gray-700 dark:text-gray-300">
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      {value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operators;
