 const OperatorCard = [
    {
      id: 1,
      Topic: "Introduction to Operators",
      Defination: [
        "Operators are special symbols that perform operations on operands.",
        "They are used to perform actions such as arithmetic, comparison, and logical operations in Java.",
        "Operators help build expressions that are essential for business logic in Java programming."
      ],
      Types: "There are three categories of operators based on the number of operands used.",
      typesOfOperator: [
        "Unary Operator",
        "Binary Operator",
        "Ternary Operator"
      ],
      Example: [
        "int a = 10;",
        "int b = 20;",
        "int sum = a + b; // Using binary addition operator",
        "a++; // Using unary increment operator",
        "int max = (a > b) ? a : b; // Using ternary operator"
      ]
    },
    {
      id: 2,
      Topic: "Unary Operator",
      Defination: "Operators that work with a single operand.",
      UnaryOperator: [
        "Increment Operator (++x, x++)",
        "Decrement Operator (--x, x--)",
        "Bitwise Complement (~x)",
        "Boolean Complement (!x)"
      ],
      Example: [
        "int x = 5;",
        "int y = ++x; // Pre-increment",
        "int z = x--; // Post-decrement"
      ]
    },
    {
      id: 3,
      Topic: "Binary Operator",
      Defination: "Operators that require two operands to perform operations.",
      BinaryOperator: [
        "Arithmetic Operators (+, -, *, /, %)",
        "Relational Operators (<, >, <=, >=)",
        "Equality Operators (==, !=)",
        "Bitwise Operators (&, |, ^)",
        "Logical Operators (&&, ||)",
        "Assignment Operator (=)",
        "String Concatenation (+)"
      ],
      Example: [
        "int a = 15, b = 4;",
        "int result = a / b; // Using division operator",
        "boolean isEqual = (a == b); // Using equality operator"
      ]
    },
    {
      id: 4,
      Topic: "Ternary Operator",
      Defination: "Operator that uses three operands and is used for conditional evaluations.",
      ConditionalOperatorInformation: [
        "Syntax: condition ? expression1 : expression2",
        "If the condition is true, expression1 is executed; otherwise, expression2 is executed."
      ],
      Example: [
        "int age = 18;",
        "String eligibility = (age >= 18) ? \"Eligible\" : \"Not Eligible\";"
      ]
    }
  ];

  export default OperatorCard; 