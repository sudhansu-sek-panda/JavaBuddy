import ClassImg from '../../../assets/images/class/ObjectClassExample.png'
import ComponentClass from '../../../assets/images/class/classPlane.png'
import KeyImg from '../../../assets/images/class/ReservedWords.png'


// Abstraction Card
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


export {AbstractionCard};

// Blocks Card
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

export {BlocksCard};

// Class Card
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
  keywordTopic:[" 📦 Reserved Words : "],
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

export {classCard}; 

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

export {ConstructorCard}; 

 const EncapsulationCard = [
    {
      id: 1,
      topic: "Encapsulation",
      definition: "It is the process of binding or wrapping up of data members along with its’s data handler methods i.e.., getters & setters ",
      advantages: [
        "We can protect the data from unauthorized access.",
        "We can perform data validation.",
        "We can make the data readonly of writeonly.",
        
      ],
      specifications: [
        "The bean class must be public non abstract class.",
        "We can perform data validation. ",
        "We can make the data readonly or writeonly."
      ],
      example: [
        "public class Student{",
        "     private int age;",
        "     private double perc; ",
        "     public int getAge() { ",
        "     return age; ",
        "     }",
        "     public void setAge(int age) { ",
        "     this.age = age; ",
        "     }",
        "     public double getPerc() { ",
        "     return perc;",
        "     }",
        "     public void setPerc(double perc) { ",
        "     this.perc = perc;",
        "     }",
        "     public void study()// business behavior",
        "     { ",
        "      ",
         "    }",
         "    public void doHomeWork() // business behavior ",
         "}}",
         "  ",
         "public class Test{ ",
         "    public static void main(String[] args) {",
         "        Student s=new Student(); ",
         "        s.setAge(40);",
         "        System.out.println(s.getAge());",
         "        s.setPerc(66.8);",
         "        System.out.println(s.getPerc());",
         "     }",
         "}"
      ],
      SecondExample:        "To make Data write only:",
      exampleTwo:[
        "class User{ ",
        "     public void setName(String name) { ",
        "     this.name=name;",
        "         }",
        "}"
      ],
      thirdExample: "To make Data Read only:",
      exampleThree: [
        "public class Mobile{ ",
        "     private final String make='India';",
        "     public void getMake() { ",
        "           return make; ",
        "      }",
        "}"
      ]
      
    },


  ] 
  export {EncapsulationCard};