import { useState, useEffect } from "react";

export default function Comp3() {
  const [count, setCount] = useState(100);
  const [name, setName] = useState("Pranil");
  const [age, setAge] = useState(23);

  /*
  1) This will be called on component mount as well as whenever there is a change in state variable.
  
  2) If you want to execute useEffect only once on mount, pass [] as second argument:
     useEffect(() => { ... }, []);

  3) If you return a cleanup function, it runs before unmount/re-run:
     useEffect(() => {
       return () => { console.log("Cleaned up"); };
     }, []);

  4) If you pass dependencies, it runs when those dependencies change:
     useEffect(() => { ... }, [name, age]);
  */

  useEffect(function () {
    console.log("Use Effect Hook Called", count, name, age);
  });

  function myFunction() {
    setCount(count + 1);
  }

  function myFunction2() {
    setName("Pranil Updated");
  }

  function myFunction3() {
    setAge(age + 1);
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl font-bold mb-4">Use Effect</h1>

      <p className="my-1">Name: {name}</p>
      <p className="my-1">Age: {age}</p>
      <p className="my-1">Count: {count}</p>

      <div className="mt-4 flex gap-2">
        <button onClick={myFunction} className="border p-2 rounded bg-gray-100 hover:bg-gray-200">
          Update Count
        </button>
        <button onClick={myFunction2} className="border p-2 rounded bg-gray-100 hover:bg-gray-200">
          Update Name
        </button>
        <button onClick={myFunction3} className="border p-2 rounded bg-gray-100 hover:bg-gray-200">
          Update Age
        </button>
      </div>
    </div>
  );
}
