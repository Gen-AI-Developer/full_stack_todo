import React, { useState } from "react";
interface values {
  id: number;
  closeDialogBox: () => void;
}

const EditDialogBox = (props: values) => {
  const [title, setTitle] = useState("This is Value of Title");
  const [description, setDescription] = useState(
    "This is Value of Description"
  );
  const [dateTime, setDateTime] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };
  const handleCompletionToggle = () => {
    setIsCompleted(!isCompleted);
  };
  const UpdateTodo = (index: number): true => {
    console.log(index);
    return true;
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#2a2a2a] rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6 gap-4">
          <form action="" method="post">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Edit/Update a Todo
            </h2>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-white mb-2"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter your Todo Title Here"
                value={title}
                className="w-full bg-[#2a2a2a] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-white mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Enter your Todo Description Here"
                value={description}
                className="w-full px-3 bg-[#2a2a2a] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="dateTime"
                className="block text-sm font-medium text-white mb-2"
              >
                Date/Time
              </label>
              <div className="flex items-center">
                <input
                  id="dateTime"
                  name="dateTime"
                  type="text"
                  value={getCurrentDateTime()}
                  readOnly
                  className="flex-grow px-3 py-2 text-white bg-[#2a2a2a] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={handleCompletionToggle}
                  className="form-checkbox-rounded h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-sm text-white">
                  Mark as completed
                </span>
              </label>
            </div>
          </form>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              onClick={props.closeDialogBox}
              className="px-4 py-2 border-2 font-medium border-black/85 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
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
