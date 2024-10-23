import React, { useState } from "react";
import EditDialogBox from "./EditDialogBox";
interface TodoElements {
  id: number;
  title: string;
  description: string;
  createat: string;
}
const TodoElement = (props: TodoElements) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <>
      <section className="">
        <div className="flex flex-col bg-[#2a2a2a] border-[#3a3a3a]  shadow rounded-lg p-2 m-2 w-full">
          <div className="bg-[#2a2a2a] border-[#3a3a3a] mb-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="text-3xl font-bold flex items-center gap-2">
                {props.title}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mt-2">{props.description}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mt-2">{props.createat}</p>
            </div>
            <div className="flex gap-2 font-semibold mt-4">
              <button
                onClick={openDialog}
                className="text-white border-2 border-black/85 text-center font-extrabold rounded px-3 py-2 bg-blue-500 w-1/2"
              >
                Edit
              </button>
              {isOpen && (
                <EditDialogBox
                  key={props.id}
                  id={props.id}
                  closeDialogBox={closeDialog}
                />
              )}
              <div className="text-white border-2 border-black/85 text-center font-extrabold rounded px-3 py-2 bg-red-500 w-1/2">
                Delete
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoElement;
