import React from 'react'
import SingleInheritance from '../../../assets/images/Inheritance/SIngleLevelInheritance.png'
import MultiLevelInheritance from '../../../assets/images/Inheritance/MultiLevelInheritanceJava.png'
import HierarchicalInheritance from '../../../assets/images/Inheritance/HierarchicalInheritanceJava.png'
import MultiplInheritance from '../../../assets/images/Inheritance/MultiLevelInheritance.png'
import MultipleInheritance from '../../../assets/images/Inheritance/MultipuleInheritance.png'
import HybridInheritanceImg from '../../../assets/images/Inheritance/HybridInheritanceJava.png'
import TypesOfInheritance from '../../../assets/images/Inheritance/TypesOfInheritance.png'
const InheritanceCard = [
  {
    id: 1,
    TopicInheritance: "What is Inheritance?",
    InheritanceDefinition:
      "Inheritance is a process of acquiring the properties or members(States & Behavior) of one class into another class. ",
    point1:
      "Inheritance represents the IS-A relationship which is also known as a parent-child relationship. ",
      Inheritanceqns1: "Why Inheritance?",
    InheritanceUses: [
      "Code reusability.",
      "We can avoid code redundancy.",
      " We can achieve Generalization.",
      "We can indirectly achieve Polymorphis",
    ],
    Inheritanceqns2: "Common Terms",
    points2: [
      "The class which has common states and behaviors are called parent class / super / base class. ",
      "The class that inherits the super class is called sub / child / derived class. ",
    "Using Subclass reference we can access all the herited variables and methods and also subclass     specific variables of methods. "
    ],
    
  },
  {
    id:2,
    topicTypesInheritance:"Types of Inheritance",
     Inheritancetypes:[
      " Single inheritance ",
      "Multilevel inheritance ",
      "Hierarchical inheritance",
      "Multiple inheritance ",
      " Hybrid inheritance"
    ],
  },
{
  id:3,
  topicSingleInheritance: "Single level Inheritance : ",
  definitionSingleInheritance:[
    "Single level inheritance is a type of inheritance in which a subclass inherits the properties and behaviors of a single superclass. "," In this case, the subclass can access all the public and protected members of the superclass.",],
  SingleInheritanceExample: [
    "class Animal{ ",
    "void eat() { System.out.println('eating...'); }","}",
    "class Dog extends Animal{  ",
     "void bark(){System.out.println('barking...');}   ",
    "}",
    "class TestInheritance{  ",
    "public static void main(String args[]){   ",
    "Dog d=new Dog(); ",
    "d.bark();   ",
    "d.eat();  " ,
    " }} "

  ],
   SingleInheritance: SingleInheritance

},
{
  id:4 ,
  topicMultiLevel:"Multi level Inheritance ",
  definitionMultiLevel: [
    "Multi level inheritance is a type of inheritance in which a subclass inherits the properties and behaviors of a superclass, and then that subclass can be further extended by another subclass. ",
    "In this case, the subclass can access all the public and protected members of its superclass and also the members of its own class.",
  ],
  exampleMultiLevel: [
   "class Animal{   ",
  "void eat(){System.out.println('eating...'');}   ",
  "}   ",
  "class Dog extends Animal{   ",
  "void bark(){System.out.println('barking...');}   ",
  "}   ",
  "class BabyDog extends Dog{   ",
  "void weep(){System.out.println('weeping...');}  ", 
  "}   ",
"  class TestInheritance2{ ",  
"public static void main(String args[]){   ",
"BabyDog d=new BabyDog();   ",
"d.weep();   ",
"d.bark(); ",  
"d.eat(); ",  
"} ",
"}",
  ],
  MultiLevelInheritance:MultiLevelInheritance
},

{
  id:5,
  topicHierarchical:"Hierarchical Inheritance ",
 definitionHierarchical: [
    "Hierarchical inheritance is a type of inheritance in which multiple subclasses inherit the properties and behaviors of a single superclass. ",
    "In this case, each subclass can access all the public and protected members of the superclass and can also have its own specific members.",
  ],
  exampleHierarchical:[
"    class Animal{  ", 
"void eat(){System.out.println('eating...');}",  
"}   ",
"class Dog extends Animal{",   
"void bark(){System.out.println('barking...');}   ",
"}   ",
"class Cat extends Animal{   ",
"void meow(){System.out.println('meowing...');}   ",
"}   ",
"class TestInheritance3{  ", 
"public static void main(String args[]){  ", 
"Cat c=new Cat();   ",
"c.meow();   ",
"c.eat();  ", 

"} ",
"} "
  ],
  HierarchicalInheritance:HierarchicalInheritance

},
{id:6,
 points:[ "final class cannot have a subclass i.e., Final class cannot be extended. ",
"final variable & final method can be inherited but private method and private variable cannot be inherited "
 ],
 example:[
  "class Father { ",
  " long money=1000000L; ",
"  private String girlFriend='Katrina'; ",
" void doYoga() { ",
"  System.out.println('yoga'); ",
" } ",
" private void smoke() { ",
"  System.out.println('Smoke');}} ",
"class Son extends Father{ ",
" public static void main(String[] args) { ",
"  Son s= new Son(); ",
"  s.doYoga(); ",
"  s.smoke();    The method smoke() from the type Father is not visible  ",
"   } ",
"} "
 ]
},
{
  id:7,
  topicHybrid: "Hybrid Inheritance",
  definitionHybrid: [
    "Hybrid inheritance is a combination of two or more types of inheritance, such as single-level, multi-level, hierarchical, and multiple inheritance. ",
    "In this case, the subclass can access all the public and protected members of its superclass and can also have its own specific members.",
  ],

  hybridExample: "",
  
},
{
  id:8,
  topicMultipleInheritance: "Multiple Inheritance",
  definitionMultipleInheritance: [
    "Multiple inheritance is a type of inheritance in which a subclass can inherit properties and behaviors from multiple superclasses. ",
    "In this case, the subclass can access all the public and protected members of its superclasses and can also have its own specific members.",
  ],    
  IssuesWIthMultipleInheritance: [
"Diamond Problem: When two or more superclasses have a method with the same name, the subclass may not know which method to inherit. ",    
"all classes inherit toString() from Object, and when multiple subclasses override it, the most specific class's version is called, which can cause confusion in deep inheritance hierarchies." ,
" The super.method() call in inheritance can cause confusion when multiple classes override the same method, because super always refers to the immediate parent, not necessarily the version you expect in a deep hierarchy." ],
solutionMultipleInheritance: ["Java avoids multiple inheritance with classes to prevent ambiguity. But it solves this using Interfaces, where a class can implement multiple interfaces without ambiguity."],
  MultipleInheritanceUsingInterface: "", 
}

];


const Inheritance = () => {
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">🧬Inheritance</h1>
{/* Topic Inheritance */}
        <div className="flex flex-col gap-8">
            <div key={InheritanceCard[0].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[0].TopicInheritance}</h2>

              {InheritanceCard[0].InheritanceDefinition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{InheritanceCard[0].InheritanceDefinition}</p>}
              {/* {InheritanceCard[0].definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{InheritanceCard[0].definition}</p>} */}
                            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[0].Inheritanceqns1}</h2>

              {InheritanceCard[0].InheritanceUses && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[0].InheritanceUses.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[0].qns2}</h2>
           <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Note Point</h2>

              {InheritanceCard[0].points2 && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[0].points2.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}


              {InheritanceCard[0].points && (
                <ul className=" list-inside mb-4 font-semibold text-gray-700 list-none dark:text-gray-300">
                  {InheritanceCard[0].points.map((item, idx) => (
                    <li key={idx}>☑️✔️{item}</li>
                  ))}
                </ul>
              )}
             
                            <img src={InheritanceCard[0].SingleInheritance} alt="" />

            </div>
        
        </div>
     {/* Types of Inheritance */}
 <div className="flex flex-col gap-8 mt-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[1].topicTypesInheritance}</h2>
                      <div className='flex items-center justify-center mb-4'>
                         <div className='w-[50%] h-[390px]'>
                           {InheritanceCard[1].Inheritancetypes && (
                <ul className="list-none list-inside mb-4  font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[1].Inheritancetypes.map((item, idx) => (
                    <li key={idx} className='p-6 text-[20px]'>✔️✔️{item}</li>
                  ))}
                </ul>
              )}
                         </div>
                         <div className='w-[50%] h-[390px]'> <img src={TypesOfInheritance} className='' alt="" />
</div>
                        </div>            
              
</div></div>
     {/* Single Level Inheritance */}
  <div className="flex flex-col gap-8 mt-8">
            <div key={InheritanceCard[2].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[2].topicSingleInheritance}</h2>
                                  {InheritanceCard[2].definitionSingleInheritance && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[2].definitionSingleInheritance.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                                  <img src={InheritanceCard[2].SingleInheritance} alt="" />
                                  {InheritanceCard[2].SingleInheritanceExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-12 p-4 rounded-md overflow-x-auto text-x">
                  {InheritanceCard[2].SingleInheritanceExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
</div></div>
{/* Multilevel Inheritance */}
 <div className="flex flex-col gap-8 mt-8">
            <div key={InheritanceCard[3].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[3].topicMultiLevel}</h2>
                                    {InheritanceCard[3].definitionMultiLevel && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[3].definitionMultiLevel.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                                  <img src={InheritanceCard[3].MultiLevelInheritance} alt="" />
                                  {InheritanceCard[3].exampleMultiLevel && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {InheritanceCard[3].exampleMultiLevel.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
            
</div></div>
     {/* Hierarchical Level Inheritance */}
      <div className="flex flex-col gap-8 mt-8">
            <div key={InheritanceCard[4].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{InheritanceCard[4].topicHierarchical}</h2>
                                                 {InheritanceCard[4].definitionHierarchical && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[4].definitionHierarchical.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                                  <img src={InheritanceCard[4].HierarchicalInheritance} alt="" />
                                   
                     

                 {InheritanceCard[4].exampleHierarchical && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-12 p-4 rounded-md overflow-x-auto text-x">
                  {InheritanceCard[4].exampleHierarchical.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}

</div></div>
 {/* Multiple Inheritance */}
  <div className="flex flex-col gap-8 mt-8">
            <div key={InheritanceCard[6].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Multiple Inheritance</h2>
                                         
                                                 {InheritanceCard[7].definitionMultipleInheritance && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[7].definitionMultipleInheritance.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                                   <img src={MultipleInheritance} alt="" />
                                                          <h2 className="text-2xl font-semibold text-purple-700 mt-8 dark:text-white mb-3">Issues with Multiple Inheritance</h2>
                     {InheritanceCard[7].IssuesWIthMultipleInheritance && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[7].IssuesWIthMultipleInheritance.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                        
                                {/*   {InheritanceCard[4].exampleHierarchical && ( */}
                {/* <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x"> */}
                  {/* {InheritanceCard[4].exampleHierarchical.map((line, idx) => ( */}
                     {/* <pre key={idx}>{line}</pre> */}
                   {/* ))} */}
                {/* </div> */}
              {/* )} */}
               {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Issues in Inheritance</h2>
   <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Issues table</h2>
   <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Over Loading and Hiding and Over Riding issues in Inheritance</h2> */}
  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Solution to Multiple Inheritance</h2>
   {InheritanceCard[7].solutionMultipleInheritance && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[7].solutionMultipleInheritance.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )} 
              </div></div>
     {/* Hybrid Inheritance */}
      <div className="flex flex-col gap-8 mt-8 ">
            <div key={InheritanceCard[7].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500 ">
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">


                                    {InheritanceCard[6].topicHybrid}</h2>

                                        {InheritanceCard[6].IssuesWIthMultipleInheritance && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[6].definitionHybrid.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}    
               {InheritanceCard[6].definitionHybrid && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {InheritanceCard[6].definitionHybrid.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}   

                                  <img src={HybridInheritanceImg} alt="" />
                                {/*   {InheritanceCard[4].exampleHierarchical && ( */}
                {/* <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x"> */}
                  {/* {InheritanceCard[4].exampleHierarchical.map((line, idx) => ( */}
                     {/* <pre key={idx}>{line}</pre> */}
                   {/* ))} */}
                {/* </div> */}
              {/* )} */}
               {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Issues in Inheritance</h2>
   <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Issues table</h2>
   <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Over Loading and Hiding and Over Riding issues in Inheritance</h2> */}

              </div></div>
   
  
    </div>
  );
}

export default Inheritance