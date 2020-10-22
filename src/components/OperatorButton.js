import React from "react";

const OperatorButton = ({ o, onClick }) => (
  <button onClick={onClick} className="p-operator">
    {o}
  </button>
);

export default OperatorButton;
