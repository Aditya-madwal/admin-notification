import React from 'react'

const DeleteCycle = ({ show, onClose, onConfirm }) => {
    if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-[600px] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Delete Cycle</h2>
        <hr />
        <p className="mb-20 mt-5">
          Are you sure that you want to delete this cycle? This cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="bg-white border border-gray-300 rounded-md px-4 py-2 text-[#F5705E] shadow-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#EB6363] text-white rounded-md px-4 py-2 shadow-md"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCycle