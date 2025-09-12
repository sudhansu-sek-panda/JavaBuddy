 const variableCard = [
    {
      id: 1,
      Topic: "Basic idea about Variable",
      Defination: [
        "Variable is a name or reference to memory allocation where we are going to store our data.",
        "(It is like a container in our kitchen where we store items for efficient use, in programming we call these containers variables.)",
        "Data can be values and objects."
      ],
      Parts: ["There are two parts of a variable:", "-> Declaration", "-> Initialization"],
      Declaration: ["Declaration is mandatory whereas initialization is optional.", "If not initialized, JVM provides default values according to data type."] ,
      Type: ["Categorized based on where we declare the variable:", "1-> Static variable", "2-> Nonstatic variable", "3-> Local variable"],
      Example: ["int age = 25;", "String name = \"Rupesh\";"]
    },
    {
      id: 2,
      Topic: "Static variable",
      Defination: "Variables whose values do not differ from one object to another.",
      about: ["-> Same value for all objects of the class.", "-> Only one copy is created and shared among all objects.", "-> Also called Class Variables."],
      Declaration: ["-> Declared inside the class with 'static' keyword, outside methods or constructors."],
      HowToUse: ["Three ways to access static variables:", "1-> Using class name (recommended)", "2-> Using object reference", "3-> Directly by variable name"],
      storage: "Stored in Method Area (Class Area).",
      MemoryAllocation: ["Allocated once when the class is loaded by JVM."],
      Example: ["static int count = 0;", "System.out.println(ClassName.count);"]
    },
    {
      id: 3,
      Topic: "Nonstatic variable",
      Defination: "Variables whose values differ from one object to another.",
      about: ["-> Every object has a separate copy.", "-> Holds its own data and reference.", "-> Also called Instance Variables."],
      Declaration: ["-> Declared inside the class but outside methods or constructors."] ,
      HowToUse: ["Accessed using object reference only."] ,
      storage: "Stored in Heap Area.",
      MemoryAllocation: ["Memory allocated after object creation inside the object.", "Two non-static variable names cannot be the same."] ,
      Example: ["int rollNumber = 5;", "System.out.println(objectName.rollNumber);"]
    },
    {
      id: 4,
      Topic: "Local variable",
      Defination: "Variables declared inside a method, block, or constructor.",
      about: ["-> Created when the method is called and destroyed after it finishes.", "-> Not accessible outside the method."] ,
      Notes: ["-> Also called temporary variables.", "-> Must be initialized before use.", "-> Stored in Stack area.", "-> JVM does not provide default values."] ,
      storage: "Stored in method's stack area and removed automatically after execution.",
      Example: ["public void show() {", "  int temp = 10;", "  System.out.println(temp);", "}"]
    }
  ];

  export default variableCard;