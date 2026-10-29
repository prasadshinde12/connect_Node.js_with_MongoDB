import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);

  useEffect(function () {
    console.log("Called APIs");

    Promise.allSettled([
      axios.get("https://fakestoreapi.com/products"),
      axios.get("https://fakestoreapi.com/products/categories"),
    ])
      .then(function (res) {
        console.log(res);

        if (res[0].status === "fulfilled") {
          setData1(res[0].value.data);
        }

        if (res[1].status === "fulfilled") {
          setData2(res[1].value.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-sm lg:w-6xl mx-auto pt-2 pb-2 grid grid-cols-1 lg:grid-cols-[25%_75%]">
      <aside className="p-3">
        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">
            Categories
          </h2>

          <ul className="border p-2 rounded-xl border-gray-400 capitalize">
            {data2.map((value, index) => (
              <li key={index} className="py-1">{value}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">
            BRANDS
          </h2>

          <ul className="border p-2 rounded-xl border-gray-400">
            <li><a href="#brand" className="hover:text-blue-500">BEARDO</a></li>
            <li><a href="#brand" className="hover:text-blue-500">PRADA</a></li>
            <li><a href="#brand" className="hover:text-blue-500">MAID Jewellers</a></li>
            <li><a href="#brand" className="hover:text-blue-500">NIKE</a></li>
          </ul>
        </section>

        <figure className="mt-2 mb-2">
          <img
            className="w-full rounded-lg"
            src="/product1.jpg"
            alt="Promotional Banner"
          />
        </figure>
      </aside>

      <div className="p-3">
        <h2 className="uppercase text-center text-2xl pt-3 pb-3">
          UPCOMING PRODUCTS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {data1.map((value) => (
            <figure
              className="text-center mt-2 border p-3 rounded-xl flex flex-col justify-between"
              key={value.id}
            >
              <img
                className="h-40 w-full object-contain"
                src={value.image}
                alt={value.title}
              />

              <figcaption>
                <h4 className="pt-2 font-bold">
                  ${value.price}
                </h4>

                <p className="pt-2 pb-2 text-sm line-clamp-2">
                  {value.title}
                </p>

                <p className="text-sm text-gray-500 capitalize mb-2">
                  {value.category}
                </p>

                <button
                  className="bg-orange-500 p-2 rounded-lg text-white hover:bg-blue-500"
                  onClick={() => alert(value.title + " added to cart")}
                >
                  Add to Cart
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
