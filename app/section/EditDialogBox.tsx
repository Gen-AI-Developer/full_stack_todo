import React, { useState } from "react";
interface values {
  id: number;
}

const EditDialogBox = (props: values) => {
  const [, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const UpdateTodo = (index: number) => {
    console.log(index);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#2a2a2a] rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
          <p className="mb-4">
            This is the content of the dialog. You can put any HTML here.
            {props.id}
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={closeDialog}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Discard
            </button>
            <button
              onClick={() => {
                UpdateTodo(props.id);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
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
