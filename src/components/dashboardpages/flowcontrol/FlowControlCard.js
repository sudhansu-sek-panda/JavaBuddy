 const FlowControlCard = [
    {
      id: 1,
      topic: "Introduction of Control Flow",
      Defination: "The flow of execution in our program is known as control flow of our code.",
      typesOfControlFlow: ["if-else", "switch-case", "for loop", "while loop", "do-while", "break", "continue", "return"]
    },
    {
      id: 2,
      topic: "If-Else Statement",
      definition: "Executes a block of code based on a condition.",
      example: [
        "int age = 18;",
        "if (age >= 18) {",
        "    System.out.println(\"You are an adult.\");",
        "} else {",
        "    System.out.println(\"You are not an adult.\");",
        "}"
      ]
    },
    {
      id: 3,
      topic: "Switch Case",
      definition: "Simplifies long else-if ladders for equality checks.",
      example: [
        "int day = 3;",
        "switch(day) {",
        "    case 1: System.out.println(\"Monday\"); break;",
        "    case 2: System.out.println(\"Tuesday\"); break;",
        "    case 3: System.out.println(\"Wednesday\"); break;",
        "    default: System.out.println(\"Invalid day\");",
        "}"
      ]
    },
    {
      id: 4,
      topic: "For Loop",
      definition: "Used to iterate a block of code a specific number of times.",
      example: [
        "for (int i = 0; i < 5; i++) {",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      id: 5,
      topic: "While Loop",
      definition: "Executes a block repeatedly as long as a condition is true.",
      example: [
        "int i = 0;",
        "while (i < 5) {",
        "    System.out.println(i);",
        "    i++;",
        "}"
      ]
    },
    {
      id: 6,
      topic: "Do-While Loop",
      definition: "Executes the block at least once before checking the condition.",
      example: [
        "int i = 0;",
        "do {",
        "    System.out.println(i);",
        "    i++;",
        "} while (i < 5);"
      ]
    },
    {
      id: 7,
      topic: "Break Statement",
      definition: "Used to exit a loop or switch block immediately.",
      example: [
        "for (int i = 0; i < 10; i++) {",
        "    if (i == 5) {",
        "        break;",
        "    }",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      id: 8,
      topic: "Continue Statement",
      definition: "Skips the current iteration and moves to the next iteration of the loop.",
      example: [
        "for (int i = 0; i < 5; i++) {",
        "    if (i == 2) {",
        "        continue;",
        "    }",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      id: 9,
      topic: "Return Statement",
      definition: "Ends the execution of the current method and optionally returns a value.",
      example: [
        "public int add(int a, int b) {",
        "    return a + b;",
        "}"
      ]
    }
  ];

  export default FlowControlCard;