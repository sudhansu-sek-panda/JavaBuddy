import React from 'react'

const AbstractionCard = [
{id: 1,
  topic: "Abstract Method",
    defination:"It is an incomplete Method which has only method declaration and without method implementation. " ,
  rules:[
    "Abstract method should be terminated with semicolen. ",
    "Abstract method must be declared by using keyword ‘abstract’. ",
    "Abstract method is just any other Concrete method which can have any written type or any signature but just that it cannot have body / implementation. ",
    "Abstract method must be declared either in an abstract class or in an interface. "
  ],
  example: [
    "abstract void meth(); ",
    "abstract int add(int x, int y); "
  ],
  questionOne: "Can we Overload abstract method? ",
  questionOneAns: "✅✔️Yes we can.. ",
  questionTwo:" Can we Override abstract method?",
  questionTwoAns:"✅✔️Yes,we have to… ",
  
},
{
  id:2,
  topic:"Abstract Class",
  defination:"It is an incomplete class which may have both abstract as we as concrete methods. ",
  rules:[
    "An abstract class must be declared with an abstract keyword. ",
    "It can have abstract and non-abstract methods. ",
    "It cannot be instantiated. ",
    "It can have constructors and static methods also.",
    "It can have final methods which will force the subclass not to change the body of the method. ",

  ]
},
{
id:3,
  topic:"⚔️ Difference between abstract class and concrete class." 
},
{id:4,
  topic:"🔗 Similarities between abstract class and concrete class. ",
  points:[
    "Both are classes and both are data types.",
    "Both can have instance variable and constructors. ",
    "Both can have main method. ",
    "Both can inherit any super class if not object class. "
  ],
  examples: [
    "abstract class Bike{",
    "abstract void run(); ",
    "}   ",
    "class Honda4 extends Bike{ ",
    "void run(){ ",
    "System.out.println('running safely'); ",
    "}",
    "public static void main(String args[]){",
    "Bike obj = new Honda4(); ",
    "obj.run(); ",
    "     }",
    "}",
      "abstract class Bike{ ",
      "Bike(){ ",
      "System.out.println('bike is created'); ",
    "} ",
    "abstract void run(); ",
    "void changeGear(){ ",
    "System.out.println('gear changed');",
    "}",
    "}",
    "//Creating a Child class which inherits Abstract class   ",
    "class Honda extends Bike{ ",
    "void run(){ ",
    "  System.out.println('running safely..'); ",
    "}",
    "}",
    "//Creating a Test class which calls abstract and nonabstract methods",
    "class TestAbstraction2{   ",
    "public static void main(String args[]){  ",
    "Bike obj = new Honda();  ",
    "obj.run();",
    "obj.changeGear();",
      "}",
    "}",
  ],

},
{id:5,
  topic:"When sub class inherits super abstract class then  have to override the inherited abstract method . therwise the subclass should also be declared as bstract . and we cannot create an object of that class. ",
example:[
  "public abstract class Keyboard{",
"int price; ",
"String brand; ",
"public Keyboard() { ",
" ",
"}",
"public Keyboard(int p, Sting b) { ",
"this.price=p; ",
"this.brand=b; ",
"}",
"public void pressJ() { ",
"System.out.println('prints J');",
"}",
"public void pressQ() { ",
"System.out.println('prints Q');",
"}",
"public abstract void pressEnter();",
"}",
"public class Image extends Keyboard{",
"@Override ",
"public void pressEnter() { ",
"System.out.println('image gets open'); ",
"}",
"}",
"public class NotePad extends Keyboard{ ",
" ",
"@Override",
"public void pressEnter() { ",
"System.out.println('Control goes to next line'); ",
"}",
"public abstract class MusicFile extends Keyboard{",
"}",
"public class Test{ ",
" public static void main(String[] args) { ",
"Keyboard kb=new Keyboard() //error",
"}",
"}"
],


},
{
  id:6, 
  topic: "We cannot create an Object of abstract class. ut an abstract class can be used to referred to any of ts subclass Object(Up-Casting) ",
    example:[
  "public class Test{ ",
  " public static void main(String[] args) { ",
  " Keyboard kb=new Image(); ",
"kb.pressEnter(); ",
"kb.PressJ(); ",
"kb.pressQ(); ",
"}",
"}"
]
}

]

const Abstraction = () => {
return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">🌀Abstraction</h1>
      {AbstractionCard && AbstractionCard.length > 0 ? (
        <div className="flex flex-col gap-8">
          {AbstractionCard.map((card) => (
            <div key={card.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2> */}
                            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{card.topic}</h2>

              {card.defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.defination}</p>}
              {/* {card.definition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.definition}</p>} */}
              {card?.rules && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {card.rules.map((item, idx) => (
                    <li key={idx}>✔️{item}</li>
                  ))}
                </ul>
              )}
                            {/* <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">📋Specifications</h2> */}

          
              
              {card.example && (
                <div className="bg-gray-900 text-green-200 font-mono p-4 rounded-md overflow-x-auto text-sm">
                  {card.example.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
           
                            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">{card.questionOne}</h2>
                            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">{card.questionOneAns}</h2>
                            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">{card.questionTwo}</h2>
                            <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">{card.questionTwoAns}</h2>

            
                            {/* <h2 className="text-2xl font-semibold text-slate-700 dark:text-white mb-3">✅{card.thirdExample}</h2> */}

            
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-semibold">No data available in FlowControlCard. Please check your data import or initialization.</p>
      )}
    </div>
  );
}

export default Abstraction