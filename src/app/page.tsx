"use client";
import Image from "next/image";
import imageBg from "../../public/images/flutes-and-vegetables-bg.webp";
import { fruitesAndVegetables } from "./libs/fruitesAndVegetables";
import { useState } from "react";

const MOCK_DATA = fruitesAndVegetables;

export default function Home() {
  const [fruits, setFruits] = useState<defineTypeOfObjectProps[]>([]);
  const [vegetables, setVegetables] = useState<defineTypeOfObjectProps[]>([]);
  const [allObject, setAllObject] =
    useState<defineTypeOfObjectProps[]>(MOCK_DATA);

  interface defineTypeOfObjectProps {
    type: string;
    name: string;
  }

  const defineTypeOfObject = ({ type, name }: defineTypeOfObjectProps) => {
    if (type === "Fruit") {
      setFruits([{ type, name }, ...fruits]);
      setAllObject(allObject.filter((item) => item.name !== name));
    } else if (type === "Vegetable") {
      setVegetables([{ type, name }, ...vegetables]);
      setAllObject(allObject.filter((item) => item.name !== name));
    } else {
      window.alert("Sorry! there is an error when define the type of object.");
    }
  };

  const ClearFruitsData = () => {
    setAllObject(allObject.concat(fruits));
    setFruits([]);
  };

  const ClearVegetablesData = () => {
    setAllObject(allObject.concat(vegetables));
    setVegetables([]);
  };

  return (
    <main className="relative min-h-screen px-[1.25em] py-[60px] lg:px-24">
      <Image
        src={imageBg}
        alt={"fruits and vegetables"}
        fill
        className="object-cover z-[-1] blur"
      />
      <div className="relative">
        <h1 className="protest-riot-regular text-center">
          Is it <span className="text-orange-500 md:text-7xl">fruits</span> or{" "}
          <span className="text-green-900 md:text-7xl">vegetable?</span>
        </h1>
      </div>

      <div className="max-w-[800px] mx-auto flex flex-wrap mt-[60px] gap-6 justify-center">
        {allObject
          ? allObject.map((item) => {
              return (
                <button
                  onClick={() => {
                    defineTypeOfObject(item);
                  }}
                  key={item.name}
                  className="bg-green-900 text-white px-6 py-2 rounded-[30px] hover:bg-green-700"
                >
                  {item.name}
                </button>
              );
            })
          : null}
      </div>

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
        <div className="relative bg-orange-500 w-full min-h-[350px] rounded-[30px] shadow-lg p-6">
          <h2 className="protest-riot-regular text-center text-white">
            Fruits
          </h2>
          <hr />
          <div className="mt-[32px] flex flex-wrap gap-2">
            {fruits
              ? fruits.map((item) => {
                  return (
                    <button
                      key={item.name}
                      className="bg-orange-300 px-6 py-2 rounded-[30px] text-white hover:bg-orange-400"
                    >
                      {item.name}
                    </button>
                  );
                })
              : null}
          </div>
          {fruits.length !== 0 && (
            <div className="absolute bottom-6 left-6">
              <button
                onClick={ClearFruitsData}
                className="text-white py-2 px-6 rounded-[30px] border-[1px] border-white hover:bg-white hover:text-orange-500"
              >
                Clear
              </button>
            </div>
          )}
        </div>
        <div className="relative bg-green-900 w-full min-h-[350px] rounded-[30px] shadow-lg p-6">
          <h2 className="protest-riot-regular text-center text-white">
            Vegetable
          </h2>
          <hr />
          <div className="mt-[32px] flex flex-wrap gap-2">
            {vegetables
              ? vegetables.map((item) => {
                  return (
                    <button
                      key={item.name}
                      className="bg-green-500 px-6 py-2 rounded-[30px] text-white hover:bg-green-600"
                    >
                      {item.name}
                    </button>
                  );
                })
              : null}
          </div>
          {vegetables.length !== 0 && (
            <div className="absolute bottom-6 left-6">
              <button
                onClick={ClearVegetablesData}
                className="text-white py-2 px-6 rounded-[30px] border-[1px] border-white hover:bg-white hover:text-orange-500"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
