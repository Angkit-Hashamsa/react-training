import React, { useState } from "react";

const useToggleHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    toggle,
    modalOpen,
    modalClose,
  };
};

export default useToggleHook;
