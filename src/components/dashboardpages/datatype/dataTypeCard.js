const dataTypeCard = [
  {
    id: 1,
    topic: 'Data Types',
    definition: "Data type defines which type of data a variable can hold or store in its memory location.",
    types: 'Java has two categories of data types: primitive and Non-Primitive (Reference Type)',
   
  },
  {
    id: 2, 
    topic: 'Primitive data types',
    definition: ['These are the fundamental building blocks that store simple values directly in memory.',
      ' Java has 8 primitive data types:'],
     primitiveTypes: [
      'byte - for small integers (8 bits)',
      'short - for medium integers (16 bits)',
      'int - for integers',
      'long - for large integers (64 bits)',
      'float - for single-precision floating-point numbers',
      'double - for floating-point numbers',
      'char - for characters',
      'boolean - for true/false values'
    ],
   
  },
  {
    id: 3,
    topic: 'Reference data types', 
    definition:[
      'These store memory addresses of objects rather than actual values.',
      'They can hold complex data structures and user-defined types.',
    ],

     referenceTypes: [

      'String - for sequences of characters',
      'Arrays - for collections of elements',
      "	Class: User-defined blueprint for objects",
      'Interface: Defines a contract for classes to implement',
	    "  Interface: Defines a contract for classes to implement",
  	  "  Object: Super Parent of all classes in Java, representing an instance of a class",
      "Enum : A special data type that enables a variable to be a set of predefined constants",
    ]
  }
]

export default dataTypeCard;