import React from "react";
import ClassImg from '../../../assets/images/class/classObject.webp'
import ComponentClass from '../../../assets/images/class/classPlane.png'
import KeyImg from '../../../assets/images/class/ReservedWords.png'
import ObjectImg from '../../../assets/images/objects/Object.png'
const classCard = [
  {
id:1, 
topicClass: ["🧠Class"],
classDefinition:[ "A class is a blueprint for creating objects. It defines properties and behaviours that its objects will have. Classes are fundamental to Java's Object-Oriented Programming paradigm."],
NotePoint1: [
  "We cannot create an Object without a Class. Hence to create n number of objects we require class.  ",
  "Multiple Objects created using same class is called as Similar Object or Identical Object. ",
  "Every Object work independently i.e.., if one Object is modified or destroyed then it does not affect another Object. "
],
ClassImg:ClassImg,
ClassSubtopic1:"Components of a Class",
ClassSubimg:ComponentClass,
classComponents:[

"•	 Fields ",
"•	Methods ",
"•	 Constructors ",
"   Blocks ",
"•	NestedClass ",
"•	main() Method (Optional) ",

],
classExample:[

"class ClassName {  ", 
" ",
"   // Fields (Variables)",
"   int value;",
" ",
"   // Constructor ",
"   ClassName(int v) {",
"    value = v;",
"   }",
" ",

"   // Methods ",
"   void display() {",
"     System.out.println('Value: ' + value);",
"   }",
" ",
"   // Nested Class ",
"   static class NestedClass {",
"     void show() {",
"         System.out.println('Inside Static Nested Class');",
"        }",
"     }",
" ",
"   // Main method (optional)",
"    public static void main(String[] args) {",
"      ClassName obj = new ClassName(10);",
"      obj.display();",
"      ClassName.NestedClass ob = new ClassName.NestedClass();",
"      ob.show();",
"     }",
" ",
"}",
]
// expimg:ClassExample
  },
{
  id:2,
  keywordTopic:[" 📦Keywords or Reserved Words : "],
   keywordPoint1: ["✅  In Java, a keyword is a reserved word that has a predefined meaning in the language and cannot be used as a variable name, class name, method name, or identifier."," ✅  These words are part of the syntax and are used to perform specific operations."],
  keywordImg:KeyImg,
}
,
{
  id:3, 
  ObjectTopic:[ "👯Object"],
  ObjectPoint1:["Object is Real world Physical entity with States and Behavior. ",
  
    " An object in Java is an instance of a class that contains variables (state) and methods (behavior) that define what the object knows and what it can do. "
  ],
  ObjectSubtopic1: "🟦State",
  
  ObjectPoint2:[ "State represents the data or attributes of an object.",
"State is also called as Data Member or Instance Variable.",
"The state defines the current condition or information about the object.",
    
  ],
  ObjectSubtopic2: "🟩Behaviour",
  ObjectPoint3:[

    "Behavior of an Object represents Action / Work performed by an Object. ",
    "It is also called as Method or Function.",

    ],

 ObjectCreation:[
    "To create an Object we require Class. ",
    "An Object is created using new keyword followed by Class Name and Parenthesis. ",
    "Syntax : ClassName objectName = new ClassName();",

  ]
},


 {
id: 4,
topic: ["🤝Relationships"],
subtopic1:"🔗Association",
  subdefinition: [
    "Association is one of the concept of Object Orientation which is also called as Has – A Relationship . ", "It is a process of one or multiple Objects getting associated with another Object."
  ],
  types:[
    "Composition",
    "🪢Aggregation"
  ]
 
 },
 {id: 5,
  topic:["Composition"]
 },

 {
id:6,
topicClassLoading:["🔄Class Loading"],
classLoadingDefinition: "Class Loading is the process of loading the .class file (Byte Code) from Hard disk memory to JVM Memory ",
ClassLoadingPoint1: ["A class gets loaded only once.", "JVM uses Class Loader to load .class file ."],
classLoadingExample:[ "class Project{ ",
"void display() { ",
"System.out.println('Project display')", 
"}",
"public static void main(String[] args){",
"System.out.println('Main Starts');", 
"Project p = new Project();",
"p.dispaly();",
"System.out.println('Main ends');",
],
steps:[
  "Compilation",
  "Class Loading",
  "Execution"
]



 }



]




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
              <img src={classCard[1].keywordImg} alt="" />
                {/* {classCard[0].types && (
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

            <img src={classCard[0].ClassImg} className='mt-8' alt="" />
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
