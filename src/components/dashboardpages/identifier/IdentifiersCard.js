const IdentifiersCard = [
    {
      id: 1,
      Definations: "An identifier is the name used to identify classes,methods,variables,labels,and other user-defined elements in java . In simple terms,identifiers are  the names you give to elements in your programe",
      Rules: [
        "Java has some Strict rules for naming identifiers.it the rule is broke you will face a error",
        " Can Contain: letters(A-Z ,a-z), digits(0-9),underscore(_),and doller sign($)",
        " Can not start with a digit",
        " Can not use java reserve keywords (e.g,int,class,public,etc)",
        " Can be of any length",
        " Java is case-sensitive(name and Name are different).",
        " Unicode characters are allowed (but avoid using them unless necessary ).",
        " No spaces allowed in identifiers."
      ]
    },
    {
      id: 2,
      heading: " Valid and Invalid Identifiers",
      Valid_Identifiers: [
        " int age;",
        " byte b1;",
        " String firstName;",        
        " String studentName;",
        " char grade;",
        " char classA;",
        " double double_salary;",
        " float $bonous;",
        " boolean isValid;"
      ],
      InValid_Identifiers: [
        " int 1stNumber ",
        " String full Name ",
        " float class "
      ]

    },
    {
      id: 3,
      instructions: [
        "According to realife use case identifiers have some prescribed and mandatorial rules .",
        " -> Identifiers can not have Space .",
        " -> Identifiers can not have special charcters except $ and _(underscore) .",
        " -> Identifiers must not be java keyword .",
        " -> Identifiers must not start with Numbers, but it can have numbers .,"
      ],
      programes: [
        "class Alia Bhata { ❌",
        "}",
        " class AliaBhata { ✅",
        "}",
        "class Alia_bhat ✅{",
        "}",
        "class white.Board ❌{",
        "}",
        "class static { ❌",
        "}",
        "class 2Bahuballi { ❌",
        "}",
        "class Bahubali { ✅",
        "}",
        "-> class name must be in camel case .",
        "-> class name must be singular",
        "-> class name must be Noun"
      ]
    }
  ]; 

  export default IdentifiersCard;