"use client";
import React, { useEffect, useState } from "react";
import TodoElement from "./TodoElement";
interface TodoElements {
  id: number;
  title: string;
  description: string;
  createAt: string;
  iscompleted: boolean;
}
const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/crud"); // Replace with your API URL
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs once on component mount

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] text-white p-4 md:p-6 lg:p-8">
        <div className="flex w-full justify-center">
          <div className="p-1 font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col justify-center items-center ">
        <div className="md:grid md:grid-cols-2 gap-4">
          {data.map((item: TodoElements, index) => (
            <TodoElement
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              createat={item.createAt}
              iscompleted={item.iscompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
