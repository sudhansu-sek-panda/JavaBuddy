import React from 'react'
import ImgInterface from '../../../assets/images/interface/Interface.png'
const interfaceCard = [
{
  id:1,
  topicInterface:" An Interface has 3 meanings. ",
  definitionInterface:[
   
"✔️ It is an intermediate between the service and the consumer. ",
"✔️ It is also called 100% abstract class. ",
"✔️ It is also called as rules repository or coding contract.",
  ],
    point:[" "],
    ImgInterface: ImgInterface
},



{
  id:2,
  InterfaceNotes:[
"✔️Programmatically we create an interface by using keywod interface. ",
"✔️All the methods in an interface are automatically public and abstract. ",
"✔️Interface cannot have Constructors and instance variable. "],
 
Interfaceqns1: "Why use Java interface? ",
Interfaceans1:[" There are mainly three reasons to use interface. They are given below. ",
"✔️ It is used to achieve abstraction.  ",
"✔️ By interface, we can support the functionality of multiple inheritance.  ",
"✔️ It can be used to achieve loose coupling.  ",
],

Interfaceqns2: ["How to declare an interface? "],
Interfaeans2:[
"✔️An interface is declared by using the interface keyword.",
"✔️ It provides total abstraction; means all the methods in an interface are declared with the empty body, and all the fields are public, static and final by default.",
"✔️ A class that implements an interface must implement all the methods declared in the interface. ",
],
syntax: [
"interface <interface_name>{   ",
"    // declare constant fields    ",
"    // declare methods that abstract    ", 
"    // by default.    ",
"}  ",
],
InterfaceExample: [
 
"public interface RegulatorInf{  ",
" void increaseSpeed();  ",
" void reduceSpeed();  ",
"}  ",
"  ",
"public interface Iswitch{  ",
" void switchOn();  ",
" void switchOff();  ",
"}  ",
],

  point:[" "]
},

 {
  id:3,
  Interface3point:[
"✔️A class can inherit an interface by using keyword implements . ",
" ",
"✔️When sub class implements an interface then we have to override all the abstract methods otherwise, the sub class must be declared as abstract.",
"✔️We cannot create an object of interface but as interface can refer to any of its sub class(Up Casting). ",
 ],
 InterfacePointExamples: [
"public interface Imouse{ ",
" public void click(); ",
" public void rightClick(); ",
" public void doubleClick(); ",
"} ",
"public class CpuImpl implements Imouse{ ",
" ",
" @Override ",
" public void click() { ",
"  System.out.println('resources get selected');   ",
" } ",
" ",
" @Override ",
" public void rightClick() { ",
"  System.out.println('Display / show options');  ",
"  ",
" } ",
" ",
" @Override ",
" public void doubleClick() { ",
"  System.out.println('double click'); ",
" } ",
" ",
"} ",
"public class user{ ",
" public static void main(String[] args) { ",
"  Imouse m =new CpuImpl(); ",
"  m.click(); ",
"  m.doubleClick(); ",
"  m.doubleClick(); ",
" } ",
"} ",
" ",
],
points: [
"The class can inherit or implements multiple interfaces which is called as Multiple inheritance. "],
MultipleInheriExample:[
"public class FanImpl implements Iswitch,RegularInf { ",
" public void IncreaseSpeed() { ",
"   ",
" } ",
" public void reduceSpeed() { ",
"   ",
" } ",
" public void switchOn() { ",
"   ",
" } ",
" public void switchOff() { ",
"   ",
"   ",
" } ",
"} ",
],

point3:"The data members in an interface are automatically static and final (global Constant)  ",
example: [
"public interface Inf{ ",
" String user='scott'; ",
" String pwd='tiger'; ",
" int port='1521'; ",
"} ",
"",
"public class Project{ ",
" public static void main(String[] args) { ",
"  System.out.println(Inf.port); ",
"  System.out.println(Inf.user); ",
" } ",
"} ",
],

exampleInterface: [
"An Interface cannot inherit class , not even Object class. ",
" ",
"Once interface can inherit any number of interfaces. Using keyword extends. ",
"",
"  extends                                 implements ",
"",
"class Sub extends Parent implements I1,I2{ ",
"  ",
"}" ,
],
 },

{
  id:4,
  topicTypesInterface: "Types of Interface :",
  typesInterface: [ 
"There are 3 types of interface   ",
"✔️1. Regular Interface ",
"✔️2. Marker Interface ",
"✔️3. Functional Interface ",
  ],

topicRegularInterface: "Regular Interface: ", 
regularInterface:[
"✔️Regular Interface is an interface which contains more than one abstract method. ",
"public interface Imouse{ ",
" public void click(); ",
" public void rightClick(); ",
" public void doubleClick(); ",
"} "],
topicMarkerInterface: "Marker Interface: ",
markerInterface:[

"✔️❖ Marker interface is empty interface which does not  have any methods in it.  ",
"✔️❖ Marker interface ismainly used to indicate JVM about certain activities.  ",
"✔️❖ There are few marker interfaces available in java namely:  ",
"👍 Searializable  ",
"👍 Clonable  ",
"👍 RandomAccess  ",
"👍 EventListner  ",
],
 
 


   exampleforClonableInterface:[
"Example for Clonable interface. ",
"public class Employee implements Clonable{ ",
" public int id,salary; ",
" public String name; ",
"  public Object clone()throws CloneNotSupportedException{ ",
"   return super.clone(); ",
"  } ",
"} ",
"public class CloneTest{ ",
" public static void main(String[] args) { ",
"  Employee e1= new Employee(); ",
"  e1.id=25; ",
"  e1.name='Suresh'; ",
"  e1.salary=20000; ",
" } ",
" try { ",
"  Object o=e1.clone(); ",
"  Employee e2=(Employee)o; ",
"  System.out.println(e2.name); ",
"  System.out.println(e2.id+' '+e2.salary); ",
" } ",
" catch(Exception e) { ",
"   ",
" } ",
"} " ,],
 serializable:[
" Serializable: ",
" It is the process of or the mechanism of converting object’s state along with class information into byte stream. ",
"JVM serializes an object only if the class implements the marker interface called Serializable. ",
 ],
},

{
  id:5,
  topicFunctionalInterface: "Functional Interface: ", 
 functionalInterface:
 [
  
  
 "It is an interface which has only one abstract method in it. ",
 "This interface is used to inject the business rules so that it is considered as rule before execution Of some functionality. ",

"We can create our own functional interface , apart from that in java we do have few functional interfaces.", 
"Comparable – compareTo() ",
"Comparator – compare()  ",
"Runnable – run() ",
 ],
note:" from JDK 1.8 we can define static concrete method or default concrete method. ",
 example:[
" public interface Inf{ ",
" public static void m1() { ",
"  System.out.println('static concrete method'); ",
" } ",
" public default void m2() { ",
"  System.out.println('default concrete method'); ",
" } ",
"} ",
"Difference between abstract class and interface ",
"}"],
 }
] 


const Interface = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">🧩Interface</h1>
         <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              {interfaceCard[0].topicInterface && <p className="text-gray-800 dark:text-gray-300 mb-4 font-semibold">{interfaceCard[0].topicInterface}</p>}
                {interfaceCard[0].definitionInterface && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[0].definitionInterface.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
                {interfaceCard[1].InterfaceNotes && (
                <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[1].InterfaceNotes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
<h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{interfaceCard[1].Interfaceqns1}</h2>
  {interfaceCard[1].Interfaceans1 && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[1].Interfaceans1.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
<h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{interfaceCard[1].Interfaceqns2}</h2>
  {interfaceCard[1].Interfaeans2 && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[1].Interfaeans2.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {interfaceCard[1].InterfaceExample && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {interfaceCard[1].InterfaceExample.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
  {interfaceCard[2].Interface3point && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[2].Interface3point.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {interfaceCard[2].InterfacePointExamples && (
                <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                  {interfaceCard[2].InterfacePointExamples.map((line, idx) => (
                    <pre key={idx}>{line}</pre>
                  ))}
                </div>
              )}
   <img src={interfaceCard[3].topicTypesInterface} alt="" />
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{interfaceCard[3].topicTypesInterface}</h2>
  {interfaceCard[3].typesInterface && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[3].typesInterface.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{interfaceCard[3].topicRegularInterface}</h2>
  {interfaceCard[3].regularInterface && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[3].regularInterface.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{interfaceCard[3].topicMarkerInterface}</h2>
  {interfaceCard[3].markerInterface && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[3].markerInterface.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
                                  <h2 className="text-2xl font-semibold text-purple-700 dark:text-white mb-3">{interfaceCard[4].topicFunctionalInterface}</h2>
  {interfaceCard[4].functionalInterface && (
                <ul className="list-none list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                  {interfaceCard[4].functionalInterface.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
</div></div>
      
    </div>
  );
};

export default Interface;