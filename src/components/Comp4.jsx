import { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
  let [data, setData] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl font-bold mb-4">
        Data From MongoDB
      </h1>

      <table className="w-full border-collapse border border-gray-400 text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Sr. No</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Place</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((value, index) => (
              <tr key={value._id || index} className="hover:bg-gray-100">
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2 font-medium">{value.name}</td>
                <td className="border border-gray-400 p-2">{value.place}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-gray-400 p-4 text-gray-500">
                Loading data from MongoDB...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
