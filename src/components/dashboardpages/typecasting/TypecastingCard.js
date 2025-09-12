import TypeCastingImg from '../../../assets/images/typecasting/typeCastingGreen.png';


const TypecastingCard = [
    {
      id: 1,
      topic: "Java typecasting",
      defination: "The process of converting one datatype value into another datatype is known as Typecasting.",
      considerablePoints: [
        "-> It is mostly applied to primitive data types (except boolean)",
        "-> The process is also called Primitive Data type casting",
        "-> There are generally two types of typecasting",
        "-> Implicit Typecasting",
        "-> Explicit Typecasting"
      ],
      TypeCastingImg: TypeCastingImg,
    },
    {
      id: 2,
      topic: "Implicit typecasting",
      defination: "When a smaller data type is converted into a bigger data type automatically by the compiler.",
      information: [
        "-> This type of typecasting is also considered as Widening and Upcasting",
        "-> There is no loss of Data",
        "-> Happens in this order",
        "byte -> short -> int -> long -> float -> double"
      ],
      question: "How can a 4-byte float hold an 8-byte long value?",
      answer: "Even though float uses 4 bytes and long uses 8 bytes, the internal capacity (range and volume) of float is larger because it supports decimal and exponential values."
    },
    {
      id: 3,
      topic: "Explicit typecasting",
      defination: "When a bigger data type is converted into a smaller data type manually by the programmer.",
      information: [
        "-> It is also called Narrowing and Downcasting.",
        "-> There may be loss of data (especially fraction or overflow values)",
        "-> This typecasting requires the use of type in brackets."
      ]
    }
  ]; 


  export default TypecastingCard;