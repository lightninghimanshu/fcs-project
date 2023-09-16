"use client";
import { useState } from "react";
export default function Page() {

  const [property, setProperty] = useState([
    {
      id: 1,
      name: "Property 1",
      price: 100,
      rating: 4,
      popularity: 100,
    },
    {
      id: 2,
      name: "Property 2",
      price: 200,
      rating: 3,
      popularity: 200,
    },
    {
      id: 3,
      name: "Property 3",
      price: 300,
      rating: 2,
      popularity: 300,
    },

  ]);

  return (
    <main>
      <div className="flex flex-col items-center justify-center py-2">
        <p className="text-2xl">Welcome to Buying Platform</p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-row items-center justify-center py-2 gap-5">
          <p className="text-xl"> Search</p>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search.."
            className="p-2 bg-black	"
          ></input>
          <button>Search</button>
          <p className="text-xl"> Sort</p>
          <select name="sort" id="sort" className="p-2 bg-black">
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>
          <button>Sort</button>
        </div>
        <div className="flex flex-col items-center justify-center py-10 gap-5">
          {
            property.map((item) => (
              <div className="flex flex-row justify-center py-2 px-5 gap-5 border-2 border-white">
                <p className="text-xl">{item.name}</p>
                <p className="text-xl">{item.price}</p>
                <p className="text-xl">{item.rating}</p>
                <p className="text-xl">{item.popularity}</p>
                <button>Buy</button>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
