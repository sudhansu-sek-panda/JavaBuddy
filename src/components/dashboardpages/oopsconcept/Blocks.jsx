import React from 'react'
const BlocksCard = [
  {
  id:1, 
 Blocktopic:"Blocks",
blockDefinition: "Blocks in Java helps to structure code and control execution flow. ",
typeOfBlocks:
[
"There are two types of Blocks that executes before main method Constructor execution.",
"1.	Static Block",
"2.	Non-Static Block - Instance Initialization Block"
],
staticBlock: "These are the blocks which will be executed before the execution of the main method.",
StaticBlockFlowControl:[
"Executes once when the class is loaded",
"Identification of all the static members from top to bottom.(1-6)",
"While identifying the variables will get memory allocation and will be given default values.",
"Initialisation and execution of variable and blocks simultaneously from top to bottom. (7-10)",
"Runs before main() method ",
],

StaticBlockExample: [
"class Example {",
"    static {",
"        System.out.println('Static Block Executed');",
"    }",
"",
"    public static void main(String[] args) {",
"        System.out.println('Main Method Executed');",
"    }",
"}",],

NonStaticBlock:" These are the blocks which will be executed everytime whenever an object is created.",

NonStaticFlowControl :[
"•	Executes every time an object is created",
"•	Runs before constructor execution",
"•	Used for common object initialization code ",
"•	Identification of non-static members from top to bottom",
"•	Execution and initialization of variables and blocks from top to bottom.",
],

NonStaticExecution:[
"	class Example {",
"	    {",
"	        System.out.println('Instance Initialization Block Executed');",
"	    }",
"	",
"	    Example() {",
"	        System.out.println('Constructor Executed');",
"	    }",
"	",
"	    public static void main(String[] args) {",
"	        Example obj1 = new Example();",
"	        Example obj2 = new Example();",
"	    }",
"	}",
"     ",
"}",
],
},
]

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