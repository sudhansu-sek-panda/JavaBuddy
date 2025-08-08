import React from 'react'
const ConstructorCard = [{
id:1,
topic:"Constructor",
definition: " Constructor is one of the member of class. A constructor is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory. ",
points: [
"It is a special type of method which is used to initialize the object. ",
"Every time an object is created using the new() keyword, at least one constructor is called. ",
"It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default. ",
"Note: It is called constructor because it constructs the values at the time of object creation. It is not necessary to write a constructor for a class. It is because java compiler creates a default constructor if your class doesn't have any. ",
"Then whole purpose of constructor is to initialize variables at the time of Object creation."

],
ConstructorRules:[ "1. Constructor name must be the same as its class name", "2. A Constructor must have no explicit return type ",
"3. A Java constructor cannot be abstract, static, final, and synchronized" ],
CoonstructorTypes: [
 " Default constructor (no-arg constructor) ",
 "Parameterized constructor" 
],
defaultConstructor:"Default Constructor",
DefaultConstructorExamples:[
  "Developer view : ",
"public class Mobile { ",
 "int price;" ,
 "String color; ",
 "public static void main(String[] args) { ",
  "Mobile m=new Mobile(); ",
  "m.price=15000; ",
 " System.out.println(m.price); ",
 "} ",
"}" ,

"Compiler view : ",
"public class Mobile { ",
" int price; ",
" String color; ",
" public Mobile() { ",
" ",
" } ",
" public static void main(String[] args) { ",
"  Mobile m=new Mobile(); ",
"  m.price=15000; ",
"  System.out.println(m.price); ",
" } ",
"}",


],
defaultConstructorNote: [
 "Default Constructor is type of Constructor which is created by the compiler. ", 
"Default Constructor will always be non-parameterized. ",
"Default constructor is created only if there is no custom constructors. ",
"Default Constructor is used or created in order to assign default values to the states present in class."

],

parametrisedConstructor: "Custom / Parameterized Constructor : ",
parameterisedConstructorRules: [
"  Any Constructor which is created by the user or by the developer is called as Custom / Parameterized Constructor. ",
" Custom / Parameterized Constructor must be same as that of the class name. ",
" Custom / Parameterized Constructor can be parameterized or non parameterized. ",
" In a class there can be either Custom constructor or default Constructor but not both. ",
" Custom Constructor is needed in order to assign dynamic values or user defined values to the states present in the object. ",
],
parameterConstructorExample: [
"public class Mobile { ",
" int price; ",
" String color; ",
" public Mobile(int p,String c) { ",
"  price=p; ",
"  color =c; ",
" } ",
" public static void main(String[] args) { ",
"  Mobile m1=new Mobile(15000,'Samsung'); ",
"  Mobile m2=new Mobile(12000,'Real-Me'); ",
"  System.out.println(m1.price); ",
"  System.out.println(m1.color); ",
"  System.out.println(m2.price); ",
"  System.out.println(m2.color); ",
" } ",
"}",


],
paraConsExample2: [
"When Global & Local variable has same name………… ",
"public class Mobile { ",
" int price; ",
" String color; ",
" public Mobile(int price,String color) { ",
"  this.price=price; ",
"  this.color =color; ",
" } ",
" public static void main(String[] args) { ",
"  Mobile m1=new Mobile(15000,'Samsung'); ",
"  Mobile m2=new Mobile(12000,'Real-Me'); ",
"  System.out.println(m1.price); ",
"  System.out.println(m1.color); ",
"  System.out.println(m2.price); ",
"  System.out.println(m2.color); ",
" } ",
"} ",

],
difference:"difference"
}

]
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