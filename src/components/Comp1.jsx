import { useRef } from "react";

export default function Comp1() {
  let x1 = useRef(null);
  let x2 = useRef(null);
  let x3 = useRef(null);

  function myFunction(operation) {
    let data1 = x1.current.value;
    let data2 = x2.current.value;

    if (data1 === "" || data2 === "") {
      x3.current.innerHTML = "All Values are Required";
    } else {
      data1 = Number(data1);
      data2 = Number(data2);

      if (operation === "add") {
        x3.current.innerHTML = "Result: " + (data1 + data2);
      } else if (operation === "subtract") {
        x3.current.innerHTML = "Result: " + (data1 - data2);
      } else if (operation === "multiply") {
        x3.current.innerHTML = "Result: " + (data1 * data2);
      } else if (operation === "divide") {
        if (data2 === 0) {
          x3.current.innerHTML = "Cannot divide by zero";
        } else {
          x3.current.innerHTML = "Result: " + (data1 / data2);
        }
      }
    }
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl font-bold mb-4">
        Reference Variable Calculator
      </h1>

      <input
        type="number"
        className="border p-2 m-2 rounded"
        placeholder="Enter first number"
        ref={x1}
      />
      <br />

      <input
        type="number"
        className="border p-2 m-2 rounded"
        placeholder="Enter second number"
        ref={x2}
      />
      <br />

      <button onClick={() => myFunction("add")} className="border p-2 m-2 rounded bg-gray-100 hover:bg-gray-200">
        Add (+)
      </button>

      <button onClick={() => myFunction("subtract")} className="border p-2 m-2 rounded bg-gray-100 hover:bg-gray-200">
        Subtract (-)
      </button>

      <button onClick={() => myFunction("multiply")} className="border p-2 m-2 rounded bg-gray-100 hover:bg-gray-200">
        Multiply (×)
      </button>

      <button onClick={() => myFunction("divide")} className="border p-2 m-2 rounded bg-gray-100 hover:bg-gray-200">
        Divide (÷)
      </button>

      <p ref={x3} className="text-xl font-bold mt-4"></p>
    </div>
  );
}
