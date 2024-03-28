import React from 'react';

const DeleteConfirmationModal = ({ onCancel, onDelete }) => {
    return (
        <div className="modal">
            <p>Are you sure you want to delete this member?</p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default DeleteConfirmationModal;
