import { div } from 'framer-motion/client'
import React from 'react'

const MethodOverridingCard = [
  {
    id:1,
  topic:"Overriding",
  definition:  "Method Overriding means providing a new implementation of a method in a subclass that already exists in its superclass with the same name, return type, and parameters.",

  notes: [
   
"Method overriding is possible only in case of Inheritance. ",
"✅ It enables runtime polymorphism in Java (also called dynamic method dispatch)"
  ],

 
  OverRidingRules: [
    "Is A Relationship is mandatory for Method Overriding. ",
    "Parent class method should be non-static, non-private, and non-final. ",
    "There should be at least one constructor in parent class non-private and the parent class should be non-final",
    "Method signature of both parent and child class should be same. ",
    "Primitive return type cant be changed  ",
    "The return type of method must be same as declared in super class. ",
 "Method name must be same as declared in super class. ",
 "Signature must be same as declared as in super class. Logic can be different. ",
  ],
  note: "Note: we  can optionally use an annotation @Override.",
  OverrideAnnotation:[
    
"@Override annotation used to check all the rules and regulations of method overriding is strictly followed or not. If any rule missed immediately it is going to be give compile time error. ",
"It is not mandatory to use but highly recommended. ",
"It increases visibility of the code and increases correctness of the code. ",

  ],
HierarchicalOverridingInJava:[
"  class Engineer {",
"    void work() {",
"        System.out.println('Engineer works');",
"    }",
"}",
"",
"class SoftwareEngineer extends Engineer {",
"    void work() {",
"        System.out.println('SoftwareEngineer works');",
"    }",
"}",
"",
"class ElectricalEngineer extends Engineer {",
"    void work() {",
"        System.out.println('ElectricalEngineer works');",
"    }",
"}",
"",
"class CivilEngineer extends Engineer {",
"    void work() {",
"        System.out.println('CivilEngineer works');",
"    }",
"}",

],
  SameSIgnatureAndReturnType:[
"    class Parent {",
"    int meth(String s, boolean b) {",
"        return 22;",
"    }",
"}",
"",
"class Child extends Parent {",
"    @Override",
"    int meth(String x, boolean y) {",
"        return 52;",
"    }",
"}",

  ],
example: [
  "class Parent {",
"    void meth() {",
"        // Parent Logic",
"    }",
"}",
"",
"class Child extends Parent {",
"    @Override",
"    void meth() {",
"        // Child Logic",
"    }",
"",
"    public static void main(String[] args) {",
"        Child c = new Child();",
"        c.meth();",
"    }",
"}",
],
MethodOverhidingBadPractices:[
"  class Parent {",
"    int meth(String s, boolean b) {",
"        return 22;",
"    }",
"}",
"",
"class Child extends Parent {",
"    int meth(String x) {  // ⚠️ Not overriding, just overloading",
"        return 52;",
"    }",
"}",

],
MethodHiding: [

  ,
"Method Hiding in Java occurs when a subclass defines a static method with the same signature as a static method in its superclass.",

"📌 Only static methods can be hidden, not instance (non-static) methods.",
],
MethodHidingExample:[
"  class Parent {",
"    static void show() {",
"        System.out.println('Parent's static show()');",
"    }",
"}",
"",
"class Child extends Parent, {",
"    static void show() {",
"        System.out.println('Child's static show()');",
"    }",
"}",
"",
"public class Test {",
"    public static void main(String[] args) {",
"        Parent p = new Child();",
"         Child c = new Child();",
"        p.show();  // Output: Parent's static show()",
"        c.show();  // Output: Child's static show()",
"    }",
"}",

]
  }
]

const MethodOverriding  = () => {

 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Method Overriding</h1>
        <div className="flex flex-col gap-8">
            <div key={MethodOverridingCard[0].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{MethodOverridingCard[0].topic}</h2>
          
              {/* {MethodOverridingCard[0].Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{MethodOverridingCard[0].Defination}</p>} */}
              {MethodOverridingCard[0].definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{MethodOverridingCard[0].definition}</p>}
                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Rules for Method Overriding</h2>
                {MethodOverridingCard[0].OverRidingRules && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {MethodOverridingCard[0].OverRidingRules.map((item, idx) => (
                    <li key={idx}>✅{item}</li>
                  ))}
                </ul>
              )}
                                <h2 className="text-2xl font-semibold text-purple-700 mt-8 dark:text-white mb-3">Note</h2>
  {MethodOverridingCard[0].OverrideAnnotation && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {MethodOverridingCard[0].OverrideAnnotation.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {MethodOverridingCard[0].typesOfControlFlow && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {MethodOverridingCard[0].typesOfControlFlow.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {MethodOverridingCard[0].example && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverridingCard[0].example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )} 


                            <h2 className="text-2xl font-semibold text-purple-700 mt-8 dark:text-white mb-3">✅  Overriding with Same Signature and Return Type (Valid)

 {MethodOverridingCard[0].SameSIgnatureAndReturnType && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverridingCard[0].SameSIgnatureAndReturnType.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )} 

</h2>
                            <h2 className="text-2xl font-semibold text-purple-700 mt-8 dark:text-white mb-3">❌ Common Mistake: Overriding with Different Signature

</h2>
 {MethodOverridingCard[0].MethodOverhidingBadPractices && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverridingCard[0].MethodOverhidingBadPractices.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )} 

              <h2 className="text-2xl font-semibold text-purple-700 mt-8 dark:text-white mb-3">🧱 Method Hiding in Java</h2>
    {MethodOverridingCard[0].MethodHiding && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {MethodOverridingCard[0].MethodHiding.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
               {MethodOverridingCard[0].MethodHidingExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverridingCard[0].MethodHidingExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )} 
            </div>
            </div>
         
        </div>
    
   
  );
}

export default MethodOverriding 