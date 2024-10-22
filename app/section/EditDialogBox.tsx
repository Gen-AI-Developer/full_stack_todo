import React, { useState } from "react";
interface values {
  isOpen: Boolean;
  isClosed: Boolean;
}

const EditDialogBox = (props: values) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Dialog Title</h2>
            <p className="mb-4">
              This is the content of the dialog. You can put any HTML here.
            </p>
            <div className="flex justify-end">
              <button
                onClick={props.isOpen}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDialogBox;
