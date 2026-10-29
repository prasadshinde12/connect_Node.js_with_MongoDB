/*
Props value cannot be changed.
Props values are only for read-only purpose and use them.
Props data comes from object
So when we want changeable data in component we will go for state variable
State variable are 100% mutable
*/

import { useState } from "react";

export default function Comp2(props) {
  let [count, setCount] = useState(100);
  let [brands, setBrands] = useState(["Apple", "Samsung", "OnePlus"]);
  let [name, setName] = useState("Prasad");
  let [info, setInfo] = useState({ place: "Pune" });
  let [userName, setUserName] = useState("root");

  function myFunction() {
    setCount(200);
  }

  function myFunction1() {
    setUserName("Prasad");
  }

  function myFunction2() {
    setCount(count + 1);
  }

  function myFunction3() {
    setBrands(["Panasonic", "Xiaomi"]);
    setName("Prasad");
    setInfo({ place: "Pune" });
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl font-bold mb-4">Props vs State</h1>

      <div className="border p-4 my-3 rounded">
        <h2 className="font-semibold text-lg">Props:</h2>
        <p>Prop 1: {props.p1}</p>
        <p>Prop 2: {props.p2}</p>
      </div>

      <div className="border p-4 my-3 rounded">
        <h2 className="font-semibold text-lg">State Variables:</h2>
        <p className="mt-2">UserName: {userName}</p>
        <button onClick={myFunction1} className="border p-2 my-2 mr-2 rounded bg-gray-100 hover:bg-gray-200">
          Update UserName
        </button>

        <p className="mt-2">Count: {count}</p>
        <button onClick={myFunction} className="border p-2 my-2 mr-2 rounded bg-gray-100 hover:bg-gray-200">
          Set Count to 200
        </button>
        <button onClick={myFunction2} className="border p-2 my-2 rounded bg-gray-100 hover:bg-gray-200">
          Increment Count (+1)
        </button>

        <p className="mt-2">Brands: {brands.join(", ")}</p>
        <p>Full Name: {name}</p>
        <p>User Place: {info.place}</p>
        <button onClick={myFunction3} className="border p-2 my-2 rounded bg-gray-100 hover:bg-gray-200">
          Update Brands & Info
        </button>
      </div>
    </div>
  );
}
