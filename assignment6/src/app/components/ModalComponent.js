import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div data-testid="modal-overlay" onClick={onClose}>
      <div data-testid="modal-content" onClick={(e) => e.stopPropagation()}>
        <button data-testid="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;