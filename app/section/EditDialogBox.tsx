import React from "react";

interface EditDialogBoxProps {
  isOpen: boolean;
  onClose: () => {};
}
const EditDialogBox = () => {
  console.log("first");
  return (
    <div>
      <div className="m-3 p-4">
        <div>this is Edit Dailog Box</div>
      </div>
    </div>
  );
};

export default EditDialogBox;
