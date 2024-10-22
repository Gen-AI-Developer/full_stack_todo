import React, { useState } from "react";
interface TodoElements {
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
        <div className="flex flex-col bg-[#2a2a2a] border-[#3a3a3a]  shadow shadow-gray-500 rounded-md p-2 m-2 w-full">
          <div className="bg-[#2a2a2a] border-[#3a3a3a] mb-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="text-3xl font-bold flex items-center gap-2">
                {props.title}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">{props.description}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">{props.createat}</p>
            </div>
            <div className="flex gap-2 font-semibold mt-4">
              <button
                onClick={openDialog}
                className="text-white border-2 border-black/85 text-center font-extrabold rounded px-3 py-2 bg-blue-500 w-1/2"
              >
                Edit
              </button>
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                  <div className="bg-[#2a2a2a] rounded-lg shadow-xl max-w-md w-full">
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">
                        Dialog Title
                      </h2>
                      <p className="mb-4">
                        This is the content of the dialog. You can put any HTML
                        here.
                      </p>
                      <div className="flex justify-end gap-4">
                        <button
                          onClick={closeDialog}
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                        >
                          Discard
                        </button>
                        <button
                          onClick={() => {}}
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
