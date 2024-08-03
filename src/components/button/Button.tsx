import React from "react";

interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  title: string;
}

const Button = ({
  title,
  onClick,
  loading,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? "Loading..." : title}
    </button>
  );
};

export default Button;
