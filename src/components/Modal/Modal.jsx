// components/Modal/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Modal Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
