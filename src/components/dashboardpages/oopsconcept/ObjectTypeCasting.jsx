import React from 'react'


const ObjectTypeCastingCard = [
  { 
ObjectTypeCasting:[
"Object type casting is the process of converting an object from one type to another type object in Java.",
"It is used to handle polymorphism, inheritance, and object reference conversions.",
"It is otherwise known as Non-Primitive Type Casting.",
"While performing object type casting no new object will be created just the reference will point towards the same old object.",
"We will perform object type casting in order to use the content of one class object in another class without re-defining it.",
],

TypesofObjectTypeCasting:[
    " Upcasting (Widening)",
    " Downcasting (Narrowing)"
],



Upcasting:[
"✔ Converting a child class object to a parent class type",
"✔ Implicit (no explicit cast required)",
"✔ Helps achieve runtime polymorphism",
"✔ Safe conversion because the child class object already contains the properties of the parent class"],
UpcastingExample:[
"class Parent {",
"    void show() {",
"        System.out.println('Parent method');",
"    }",
"}",
"",
"class Child extends Parent {",
"    void display() {",
"        System.out.println('Child method');",
"    }",
"}",
"",
"public class Main {",
"    public static void main(String[] args) {",
"        Parent obj = new Child(); // Upcasting (Implicit)",
"        obj.show(); // Can only access Parent's method",
"    }",
"}",],

Downcasting:[
"✔ Converting a parent class reference back to a child class type",
"✔ Explicit (requires manual cast)     ",
"✔ Used when additional child-specific functionality is needed     ",
"✔ Unsafe conversion unless checked via instanceof before casting"],

DowncastingExample:[
"class Parent {",
"    void show() {",
"        System.out.println('Parent method');",
"    }",
"}",
"",
"class Child extends Parent {",
"    void display() {",
"        System.out.println('Child method');",
"    }",
"}",
"",
"public class Main {",
"    public static void main(String[] args) {",
"        Parent obj = new Child(); // Upcasting",
"        Child childObj = (Child) obj; // Downcasting (Explicit)",
"        childObj.display(); // Accessing Child's method",
"    }",
"}",],
SafeDowncastingusinginstanceof:[
"✔ Safe Downcasting using instanceof",
"if (obj instanceof Child) {",
"    Child childObj = (Child) obj;",
"    childObj.display();",
"}",]
,
RulesforObjectTypeCasting:[
"✔ Upcasting is implicit, but downcasting requires explicit casting",
"✔ Always use instanceof before downcasting to prevent ClassCastException",
"✔ Cannot cast unrelated classes",
"✔ Primitive types require different casting methods (int → double, etc.)",
],
CommonErrors:[
"❌ Trying to downcast an object that is not actually the subclass",
"❌ Forgetting to check instanceof before downcasting",
"❌ Using incorrect syntax for explicit type conversion",]
 



  }
]
const ObjectTypeCasting = () => {
  return (
     <div className="p-6">
                     <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Object Type Casting</h1>

         <div className="flex flex-col gap-8">
             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
    
               {/* {ObjectTypeCastingCard[0].blockDefinition && <p className="text-xl text-gray-800 dark:text-gray-300 mb-4 font-semibold">{ObjectTypeCastingCard[0].blockDefinition}</p>} */}

               
               
                
                    {ObjectTypeCastingCard[0].ObjectTypeCasting && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {ObjectTypeCastingCard[0].ObjectTypeCasting.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                   ))}
                 </ul>
               )}

               
          <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left"> Types of Object Casting</h1>
 {ObjectTypeCastingCard[0].TypesofObjectTypeCasting && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {ObjectTypeCastingCard[0].TypesofObjectTypeCasting.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                   ))}
                 </ul>
               )}
          <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left"> Upcasting</h1>
               
 {ObjectTypeCastingCard[0].Upcasting && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {ObjectTypeCastingCard[0].Upcasting.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                   ))}
                 </ul>
               )}
                         <h1 className="text-3xl font-bold text-purple-700 mb-8 text-left"> Downcasting</h1>

 {ObjectTypeCastingCard[0].Downcasting && (
                 <ul className="list-none  mb-2 p-8 pb-6 pt-2 font-semibold text-gray-600 dark:text-gray-300">
                   {ObjectTypeCastingCard[0].Downcasting.map((item, idx) => (
                     <li className="p-2 ms-8 text-2xl" key={idx}> ✔️{item}</li>
                   ))}
                 </ul>
               )}

                 {ObjectTypeCastingCard[0].DowncastingExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {ObjectTypeCastingCard[0].DowncastingExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
               </div>
               </div>
               </div>
  )
}

export default ObjectTypeCasting