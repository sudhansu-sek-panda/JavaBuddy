import React from 'react'

const SingleTonClassCard = [
  
 { SingletonDefinition: "A singleton class in Java is a class that allows only one instance of itself to be created during the entire lifetime of the application.",


NotePoint: [
"That instance is globally accessible via a static method.",
"Configuration settings",
"Logging",
"Database connections",
"Thread pools or caches",
],
SingleTonInJava:
"    How to Create a Singleton Class in Java ",
EagerInitialization:[
"public class Singleton {",
"    private static final Singleton instance = new Singleton(); // instance created at class loading",
"",
"    private Singleton() {} // private constructor",
"",
"    public static Singleton getInstance() {",
"        return instance;",
"    }",
"}"
],

LazyInitialization:[
"public class Singleton {",
"    private static Singleton instance;",
"",
"    private Singleton() {}",
"",
"    public static Singleton getInstance() {",
"        if (instance == null) {",
"            instance = new Singleton(); // created only when needed",
"        }",
"        return instance;",
"    }",
"}",
],

ThreadSafeLazyInitialization:[
"public class Singleton {",
"    private static Singleton instance;",
" ",
"    private Singleton() {}",
"",
"    public static synchronized Singleton getInstance() {",
"        if (instance == null) {",
"            instance = new Singleton();",
"        }",
"        return instance;",
"    }",
"}",
],
BillPughSingleton:[

"public class Singleton {",
"    private Singleton() {}",
"",
"    private static class SingletonHelper {",
"        private static final Singleton INSTANCE = new Singleton();",
"    }",
"",
"    public static Singleton getInstance() {",
"        return SingletonHelper.INSTANCE;",
"    }",
"}",
],

qnsWhyConstructor:["🧠 Why Private Constructor?",
"To prevent other classes from creating new instances using new Singleton()."],

ExampleUsage:[
"public class Main {",
"    public static void main(String[] args) {",
"        Singleton s1 = Singleton.getInstance();",
"        Singleton s2 = Singleton.getInstance();",
"",
"        System.out.println(s1 == s2); // true",
"    }",
"}",
]
},
]










const SingletonClasss = () => {
  return (

     <div className="p-6">
                                       <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Singleton Class</h1>

       {/* <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">Class in Java </h1> */}
         <div className="flex flex-col gap-8">

             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
               
               {/* // Class */}
               {SingleTonClassCard[0].SingletonDefinition && <p className="text-xl text-gray-800 dark:text-gray-300 mb-4 font-semibold">{SingleTonClassCard[0].SingletonDefinition}</p>}
                 {SingleTonClassCard[0].NotePoint && (
                 <ul className="list-disc list-inside mb-4 font-semibold text-gray-700 dark:text-gray-300">
                   {SingleTonClassCard[0].NotePoint.map((item, idx) => (
                     <li key={idx}>✔️{item}</li>
                   ))}
                 </ul>
               )}

           
               
               
                     
                {/* <img src={classCard[0].ClassSubimg} className=" ml-10 w-[50vh] h-full" alt="" />  </div> */}
                  
                                   <h2 className="text-2xl font-bold text-slate-600 mb-8 text-left">1. Eager Initialization </h2>

                 {SingleTonClassCard[0].EagerInitialization && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {SingleTonClassCard[0].EagerInitialization.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}
                              <h2 className="text-2xl font-bold text-slate-600 mb-8 text-left">2. Lazy Initialization</h2>

                 {SingleTonClassCard[0].LazyInitialization && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {SingleTonClassCard[0].LazyInitialization.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}
                              <h2 className="text-2xl font-bold text-slate-600 mb-8 text-left">3. Thread-Safe Lazy Initialization (with synchronization)</h2>
                 {SingleTonClassCard[0].ThreadSafeLazyInitialization && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {SingleTonClassCard[0].ThreadSafeLazyInitialization.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}
               <h2 className="text-2xl font-bold text-slate-600 mb-8 text-left">4. Using Bill Pugh Singleton (best practice)</h2>
                
                 {SingleTonClassCard[0].BillPughSingleton && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {SingleTonClassCard[0].BillPughSingleton.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}

                 {SingleTonClassCard[0].ExampleUsage && (
                 <div className="bg-slate-100 text-slate-600 font-mono mt-6 p-4 rounded-md overflow-x-auto text-x">
                   {SingleTonClassCard[0].ExampleUsage.map((line, idx) => (
                     <pre key={idx}>{line}</pre>
                   ))}
                 </div>
               )}
            
 


                 
 </div>
 </div>
            </div>
        
               
             
                
      
    
    
  
 
   );
}

export default SingletonClasss