import React from 'react'
const MethodOverloadingCard = [
 {
  id:1,
  Overloading:"Overloading",
  OverloadingTypes: [
    "Method Overloading",
    "Constructor Overloading "
  ],
},
{
id:2,
MethodOverloading: "Method Overloading",
MethodOverloadingDefinition:
["	This is a feature in Java that allows multiple methods with the same name but different parameters.",
"It helps in improving code readability and maintainability.",
"	Increases flexibility by allowing different types or numbers of arguments."
],

example:[
"void meth(Signature)",                        
"{             ----->     No.of Parameters. ",
"              ------>                           Type of Parameters. ",
"                ----->                         Sequence of Parameter. ",
"} ",],
MethodOverloadingRules: [
"✅	The methods must have the same name.",
"✅	Methods must have different parameter lists (number, type, or order of parameters).",
"✅	Return type can be different.",
"✅	Cannot overload methods solely based on return type.",
],
points:[
"In Method Overloading we don’t consider Method return type. ",
"If we have to perform only one operation, having same name of the methods increases the readability of the program. ",
"Suppose you have to perform addition of the given numbers but there can be any number of arguments, if you write the method such as a(int,int) for two parameters, and b(int,int,int) for three parameters then it may be difficult for you as well as other programmers to understand the behavior of the method because its name differs. ",
"So, we perform method overloading to figure out the program quickly.",
],
advantages: [
"  Advantage of method overloading ",
"Method overloading increases the readability of the program. ",
"To achieve compile time Polymorphism.  ",
"Method Overloading is possible in same class & even possible in case of Inheritance. ",
],
MethodOverloadingExmp1:[
" ",
"public class Website { ",
" void login(String userName,String password) { ",
"  // body / Logic ",
" } ",
"} "
],
Methodloadingexample2: [
" ",
"public class Airtel { ",
" ",
" //net banking ",
" void makePayment(String un,String pwd) { ",
"  //body / Logic ",
" } ",
" ",
" //Paytm ",
" void makePayment(long mobNo) { ",
"  //body / Logic ",
" } ",
" ",
" //credit/debit card ",
"     void makePayment(long cardNo,int cvv,String name,String    ",     
"expDate) { ",
"  //body / Logic ",
" } ",
"} ",
],

MethodDuplication:
"In a class when we have more than one method with same name and same method Signature is called as Method Duplication. ",

MethodDuplicationExample1:[
"public class Quiz { ",
" void meth(String s,double d) {        Method Duplication ",
" ",
" } ",
" void meth(String d,double s) { ",
" ",
" }} ",
" ",

"public class Test { ",
" public int meth() { ",
"  return 20; ",
" } ",
" public String meth() {          Method Duplication ",
"  return 'Spiders'; ",
" } ",
" public static void main(String[] args) { ",
"  Test t=new Test(); ",
"  t.meth();        Ambiguity / Conflict. ",
" } ",
"} ",
" ",
], 
MethodDuplicationExample2:[
"  ",
"public class Quiz {  ",
" void meth(String s) {  ",
"    ",
" }  ",
" void meth(Product p) {  ",
"    ",
" }  ",
" public static void main(String[] args) {  ",
"  Quiz q= new Quiz();  ",
"  q.meth(null);     Error //both method takes null as  ",
"                                       default value  ",
" }  ",
"}  ",],
mainMethodQns:[
 

"✅Yes, by method overloading. You can have any number of main methods in a class by method overloading. But JVM calls main() method which receives string array as arguments only.   ",
],

mainMethodOverloadingexample:[
"public class Test {   ",
" public static void main(String[] args) ",
" { ",
"  System.out.println('main with String[]'); ",
" }   ",
" public static void main(String args){ ",
"  System.out.println('main with String'); ",
" }   ",
" public static void main(){ ",
"  System.out.println('main without args'); ",
" }   ",
"} ",
]
},

{id:3,
  topic:"Constructor Overloading",
  definition:"In a class having more than one Constructor with change in Signature is called Constructor Overloading. ",
  example: [
"    public class AccountDetail { ",
" long accNumber; ",
" double balance; ",
" String name; ",
"    public AccountDetail(long accNumber, double balance, String name) { ",
"  this.accNumber = accNumber; ",
"  this.balance = balance; ",
"  this.name = name; ",
" } ",
" public AccountDetail(long accNumber) { ",
"  this.accNumber = accNumber; ",
" } ",
" public AccountDetail() { ",
" ",
" }",


  ],
example2:[

"  public static void main(String[] args) { ",
"  AccountDetail ac1=new AccountDetail(); ",
"System.out.println(ac1.accNumber+' '+ac1.name+' '+ac1.balance); ",
"      AccountDetail ac2=new AccountDetail(9886723610L); ",
"  System.out.println(ac2.accNumber+' '+ac2.name+' '+ac2.balance); ",
"  AccountDetail ac3=new ",
"AccountDetail(9886723610L,43000,'spiders'); ",
"  System.out.println(ac3.accNumber+' '+ac3.name+' '+ac3.balance); ",
" }",
" }",
]
}

]
const MethodOverloading = () => {
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8"> Overloading </h1>
        <div className="flex flex-col gap-8">
            <div key={MethodOverloadingCard[0].id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{MethodOverloadingCard[1].MethodOverloading}</h2>
              {/* {card.Defination && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{card.Defination}</p>} */}
              {MethodOverloadingCard[1].MethodOverloadingDefinition && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{MethodOverloadingCard[1].MethodOverloadingDefinition}</p>}
                            <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">Rules for Method Overloading</h2>
              {MethodOverloadingCard[1].MethodOverloadingRules && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {MethodOverloadingCard[1].MethodOverloadingRules.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {MethodOverloadingCard[1].Methodloadingexample2 && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverloadingCard[1].Methodloadingexample2.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
                            <h2 className="text-2xl font-semibold text-purple-700 mt-6 dark:text-white mb-3">Method Duplication</h2>
                                        <p className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">{MethodOverloadingCard[1].MethodDuplication}</p>

              {MethodOverloadingCard[1].MethodDuplicationExample1 && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverloadingCard[1].MethodDuplicationExample1.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
              {MethodOverloadingCard[1].MethodDuplicationExample2 && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverloadingCard[1].MethodDuplicationExample2.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
 <h2 className="text-2xl font-semibold text-purple-700 mt-8 dark:text-white mb-3">Can we overload java main() method?</h2>

 {MethodOverloadingCard[1].mainMethodQns && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {MethodOverloadingCard[1].mainMethodQns.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
                {MethodOverloadingCard[1].mainMethodOverloadingexample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {MethodOverloadingCard[1].mainMethodOverloadingexample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}

            </div>
          )

          
        </div>
    
    </div>
  );
}

export default MethodOverloading