import React from 'react'
const ModifiersCard = [
  {
    id:1,
    topic:"Modifiers",
    defination:[
      "There are two types of modifiers in Java: access modifiers and non-access modifiers. ",
"The access modifiers in Java specifies the accessibility or scope of a field, method, constructor, or class. We can change the access level of fields, constructors, methods, and class by applying the access modifier on it.",
    ],
   
  },
{
  id:2,
 topic:"Access Modifiers",
    accessModifiers:[
"There are four types of Java access modifiers: ",
"1. private: The access level of a private modifier is only within the class. It cannot be accessed from outside the class. ",
"2. Default: The access level of a default modifier is only within the package. It cannot be accessed from outside the package. If you do not specify any access level, it will be the default. ",
"3. Protected: The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package. ",
"4. Public: The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package. ",
    ]
},
  {
    id:3,
    topic:"Private Modifiers",
   

 private: [
"The private access modifier is accessible only within the class:", 
"Simple example of private access modifier ",
"In this example, we have created two classes A and Simple. A class contains private data member and private method. We are accessing these private members from outside the class, so there is a compile-time error. ",
 ],
 example:[
"class A{  ", 
" private int data=40;  ", 
" private void msg(){System.out.println('Hello java');} ",  
"}   ",
" ",
"public class Simple{   ",
" public static void main(String args[]){   ",
"  A obj=new A();  ", 
"  System.out.println(obj.data);//Compile Time Error  ", 
"  obj.msg();//Compile Time Error   ",
" }   ",
"} ",
],

role: 
"Role of Private Constructor 'If you make any class constructor private, you cannot create the instance of that class from outside the class. For example: ",
example2: [
  "class A{   ",
" private A(){}//private constructor   ",
" void msg(){System.out.println('Hello java');}   ",
"}   ",
"public class Simple{   ",
" public static void main(String args[]){   ",
"  A obj=new A();//Compile Time Error   ",
" }   ",
"} ",
]  ,

note: "A class cannot be private or protected except nested class. ",
 
 
                                                                 


  },


  {

    id:4,

    topic:" Default",
    definition:
"If you don't use any modifier, it is treated as default by default. The default modifier is accessible only within package. It cannot be accessed from outside the package. It provides more accessibility than private. But, it is more restrictive than protected, and public. ",
exampDesc:
"Example of default access modifier In this example, we have created two packages pack and mypack. We are accessing the A class from outside its package, since A class is not public, so it cannot be accessed from outside the package. ",
example: [
"package pack; ",   
"class A{   ",
" void msg(){System.out.println('Hello');}  ", 
"}   ",
" ",
"package mypack;   ",
"import pack.*;   ",
"class B{   ",
" public static void main(String args[]){   ",
"  A obj = new A();//Compile Time Error   ",
"  obj.msg();//Compile Time Error   ",
" }   ",
"} ", 

],
note: 
"In the above example, the scope of class A and its method msg() is default so it cannot be accessed from outside the package. "
                                                                   
  }          ,                
 
 {
  id:5,
  topic:"Protected",
  definition:[
"The protected access modifier is accessible within package and outside the package but through inheritance only. ",

"The protected access modifier can be applied on the data member, method and constructor. It can't be applied on the class. ",

"It provides more accessibility than the default modifer.",],
exampleDesc:
"Example of protected access modifier In this example, we have created the two packages pack and mypack. The A class of pack package is public, so can be accessed from outside the package. But msg method of this package is declared as protected, so it can be accessed from outside the class only through inheritance. ",
example: [
"package pack;   ",
"public class A{   ",
" protected void msg(){System.out.println('Hello');}   ",
"}   ",
" ",
"package mypack;   ",
"import pack.*;   ",
" ",
"class B extends A{   ",
" public static void main(String args[]){   ",
"  B obj = new B();   ",
"  obj.msg();   ",
" }   ",
"}   ",
"Output:Hello ",
]
 },                                                          
 {
  id:6,
  topic:"Public",
  definition: "The public access modifier is accessible everywhere. It has the widest scope among all other modifiers. ", 
example: [
"package pack;    ",
"public class A{   ", 
" public void msg(){System.out.println('Hello');}    ",
"}   ", 
"  ",
"package mypack;    ",
"import pack.*;    ",
"  ",
"class B{    ",
" public static void main(String args[]){    ",
"  A obj = new A();    ",
"  obj.msg();    ",
" }    ",
"}  ",
"Output:Hello ",




    ]

  }
]


const Modifiers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Modifiers</h1>
      {ModifiersCard && ModifiersCard.length > 0 ? (
        <div className="flex flex-col gap-8">
          {ModifiersCard.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2>
              {/* {card.Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>} */}
              {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>}
              {card.accessModifiers && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.accessModifiers.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
              {card.private && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.private.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
              {card.example && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {card.example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
              {/* {card?.role && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.role.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )} */}
              {card.example2 && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {card.example2.map((line, idx) => (
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

export default Modifiers