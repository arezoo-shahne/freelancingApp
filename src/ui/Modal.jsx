import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const { ref } = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm fixed w-full h-screen top-0 left-0 z-20 bg-secondary-600 bg-opacity-30 ">
        <div
          ref={ref}
          className="fixed p-4 bg-secondary-0 shadow-md rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto transition-all duration-300 ease-out"
        >
          <div className="flex items-center justify-between border-b-2 border-b-secondary-200 pb-2 mb-6">
            <p className="font-bold text-secondary-600">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-600" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
