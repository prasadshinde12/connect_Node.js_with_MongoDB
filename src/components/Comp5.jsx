import { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function Comp5() {
  let x1 = useRef(null);
  let x2 = useRef(null);
  let x3 = useRef(null);

  let [msg, setMsg] = useState("");
  let navigate = useNavigate();

  function addData(e) {
    e.preventDefault();

    let name = x1.current.value.trim();
    let age = x2.current.value.trim();
    let place = x3.current.value.trim();

    if (name === "" || age === "" || place === "") {
      setMsg("Please enter all fields!");
      return;
    }

    axios
      .post("http://localhost:4003/users", {
        name: name,
        age: Number(age),
        place: place,
      })
      .then(function (res) {
        console.log(res);
        setMsg("Data inserted successfully in MongoDB!");
        x1.current.value = "";
        x2.current.value = "";
        x3.current.value = "";

        // Automatically navigate to Comp4 after 1.5 seconds to see the new data
        setTimeout(() => {
          navigate("/comp4");
        }, 1500);
      })
      .catch(function (err) {
        console.log(err);
        setMsg("Error inserting data: " + (err.response?.data?.error || err.message));
      });
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl font-bold mb-6">
        Insert User Data into MongoDB
      </h1>

      <form
        onSubmit={addData}
        className="max-w-md mx-auto border border-gray-300 p-6 rounded-xl shadow-md bg-white"
      >
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            ref={x1}
            placeholder="Enter Name"
            className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Age:</label>
          <input
            type="number"
            ref={x2}
            placeholder="Enter Age"
            className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Place:</label>
          <input
            type="text"
            ref={x3}
            placeholder="Enter Place"
            className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-2 rounded-lg transition"
        >
          Insert User
        </button>

        {msg && (
          <p
            className={`mt-4 text-center font-semibold ${
              msg.includes("Error") ? "text-red-600" : "text-green-600"
            }`}
          >
            {msg}
          </p>
        )}

        <div className="mt-4 text-center">
          <Link to="/comp4" className="text-blue-600 hover:underline text-sm font-medium">
            &larr; View all users in Comp4
          </Link>
        </div>
      </form>
    </div>
  );
}
