import React, { useState } from "react";
interface values {
  id: number;
  closeDialogBox: () => void;
}

const EditDialogBox = (props: values) => {
  const UpdateTodo = (index: number): true => {
    console.log(index);
    return true;
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#2a2a2a] rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6 gap-4">
          <form action="" method="post">
            <div>
              <label htmlFor="title">Title</label>
              <input
                className="px-2 py-2 ml-4 m-1 bg-[#2a2a2a] border border-gray-900 rounded-lg"
                placeholder="Enter your Todo Title Here"
                value={"this is Value of Title"}
              ></input>
            </div>
            <div className="justify-center self-center">
              <label htmlFor="description" className="">
                Description
              </label>
              <textarea
                value={"this is Value of Description"}
                placeholder="Enter your Todo Description Here"
                className="px-2 py-2 ml-4 m-1 bg-[#2a2a2a] border border-gray-900 rounded-lg"
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end gap-4">
            <button
              onClick={props.closeDialogBox}
              className="px-4 py-2 border-2 border-black/85 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Discard
            </button>
            <button
              onClick={() => {
                if (UpdateTodo(props.id)) {
                  props.closeDialogBox();
                }
              }}
              className="px-4 py-2 border-2 border-black/85 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDialogBox;
