import React from 'react'
import MethodImg from '../../../assets/images/method/Method.jpg'
const cardMethods = [
  {id:1,
    MethodTopic:"Methods in Java  ",
    MethodDefinition:["A method is a block of code that performs a specific task."," It is used to define behaviour in a class and can be called multiple times to reuse the functionality, making programs more efficient and organized. "],
  
  point:" ☑️ Methods are time savers and help us to reuse the code without retyping the code. ",
  MethodRules:[

"Methods must have either return type or void but not both. ",
"Void method cannot return any data. ",
" A method can have only one return type or only one return statement. ",
"Return type of method and the returning value must match.",
"Inside a method , return statement must be the last executable statement. "
  ],

  methodSyntax:[

"A method in Java consists of a declaration and implementation",
"	Declaration (Method Signature) includes access modifiers, return type, method name, and parameters.",
// "	public int add(int a, int b);
"	Implementation (Method Body) Contains the logic inside {} brackets.",



// "Example: 
// o	public int add(int a, int b) {
// o	    return a + b;
// o	}

  ],
  MethodImg:MethodImg,
  MethodExample:[
    "int meth( ) {"   ,                      
    "return 40;      ",                      
"}"  ,



  " ",
  
"String meth( ) {  ",                     
"String s=”Beast”; ",
"return s;       ",                           
"}    "

],


},

{
id:2,
ArgumentsInMethods:[
 "Method argument is known as the input to the method."," There are 2 types of method based on the argument."
 
],
NoArgumentMethod:[
"	With No Argument Method:	No parameters in the method declaration. ",
"	void greet() { System.out.println('Hello!'); }"

],

ParameterisedMethod:[
"Parameterised Method: It accepts arguments to process data. ",
"	void greet(String name) { System.out.println('Hello, ' + name + '!'); } ",
"It takes Primitive types as Argument (byte, short, int, char, float, double, long, boolean )  as well as passes objects as arguments. "

]
},

{
  id:3,
  returntype:[
    "It is the output to the method.",
"There are 3 types of return type."

  ] ,
  noReturnType:[
    "Void (No Return Value):	Performs operations but does not return anything." ,
"void printMessage() { System.out.println('Hello!'); }"

  ],
  primitiveReturnType:[
"	Returns basic values like int, double, boolean. ",
"	int getNumber() { return 10; }"

  ],
  nonPrimitiveReturnType:[
"	Returns objects, arrays, or collections. ",
"	String getName() { return 'John'; }"

  ]

},
{
  id:4,
  topic:"Categories of Methods",
 types:["Abstract Method.","Concrete Method."],
  points:[
"   An Abstract Method is a Method which has only Method Declaration , But no method implementation. ",
"Abstract Method must be terminated with semicolon. ",
"Abstract method must be declared by using keyword called abstract. ",
"Abstract method cannot have body. ",
"A Concrete Method is a method which has both declaration as well as implementation",
  ],
example:[

    "void meth()",
    "{",
    "// body/ logic/ implementation",
    "}",
    "abstract void meth();"
  ]
}

]


const Methods = () => {
  return (
    <div className="p-6">
      {/* //<h1 className="text-3xl font-bold text-purple-700 mb-8">{cardMethods[0].topic}</h1> */}
     
        <div className="flex flex-col gap-8">
        
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{cardMethods[0].MethodTopic}</h2>
              {/* {card.Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>} */}
             {cardMethods[0].MethodDefinition && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[0].MethodDefinition.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )} 
                            <h2 className="mt-6 text-2xl font-semibold text-purple-700 dark:text-white mb-3">Method Syntax</h2>

              {cardMethods[0].methodSyntax && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[0].methodSyntax.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}      
              


              <img className="mt-4" src={cardMethods[0].MethodImg} alt="" />

              {/* Method Argument */}
                                                                      <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Method Argument</h2>
                                                                       {cardMethods[1].ArgumentsInMethods && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[1].ArgumentsInMethods.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                {cardMethods[1].NoArgumentMethod && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[1].NoArgumentMethod.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}

               {cardMethods[1].ParameterisedMethod && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[1].ParameterisedMethod.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}

                                          <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Rules for Method Argument</h2>


              {/* Method Return Type */}
                                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3"> Method Return Type</h2>
{cardMethods[2].returntype && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[2].returntype.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
{cardMethods[2].noReturnType && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[2].noReturnType.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
{cardMethods[2].primitiveReturnType && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[2].primitiveReturnType.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
{cardMethods[2].nonPrimitiveReturnType && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[2].nonPrimitiveReturnType.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}

              {/* Rules for method Return Type */}
                                          <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Rules for Method Return Type</h2>

              {cardMethods[0].MethodRules && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {cardMethods[0].MethodRules.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
              
              {/* {cardMethods[0].MethodExample && (
                <div className="bg-slate-100 text-slate-600 font-mono p-4 rounded-md overflow-x-auto text-x">
                  {cardMethods[0].MethodExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )} */}


             
            </div>
          
        </div>
    
    </div>
  );
}

export default Methods