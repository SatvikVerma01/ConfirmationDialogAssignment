import React, {Fragment} from "react";
import {XCircleIcon} from "@heroicons/react/outline";
import {XIcon} from "@heroicons/react/outline";
import {useState} from "react";
import {Dialog} from "@headlessui/react";
import {Transition} from "@headlessui/react";

interface Props {
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}

const ConfirmationDialog: React.FC<Props> = (props) => {
  let [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
        <div className="flex items-center justify-center fixed inset-0">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="border-2 font-bold text-white bg-red-700 p-5 text-lg rounded-full"
          >
            Click to open dialog
          </button>
        </div>

      <Transition show={isDialogOpen} as={Fragment} enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <Dialog.Overlay />
          <div className="h-112 w-112 m-auto p-5 bg-white fixed inset-0 shadow-2xl">
            <div
              onClick={() => setIsDialogOpen(false)}
              className="h-8 w-8 ml-auto text-gray-400"
            >
              <XIcon />
            </div>
            <div className="h-32 w-32 m-auto text-red-500">
              <XCircleIcon />
            </div>
            <div className="flex flex-col text-gray-400 items-center">
              <p className="text-4xl">{props.title}</p>
              <p className="text-lg mt-10 ml-5">{props.description}</p>
            </div>
            <div className="flex text-white font-bold text-xl justify-center mt-10">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-400 p-2 pl-6 pr-6 mr-5"
              >
                {props.cancelText}
              </button>
              <button className="bg-red-500 p-2 pl-6 pr-6">
                {props.okText}
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ConfirmationDialog.defaultProps = {
  okText: "Ok",
  cancelText: "Cancel",
};

export default ConfirmationDialog;
