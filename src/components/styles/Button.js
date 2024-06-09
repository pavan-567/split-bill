function Button({ onClick, close, disabled, children }) {
  return (
    <button
      onClick={onClick}
      className={`${
        close ? "bg-lime-400" : disabled ? "bg-amber-300" : "bg-amber-500"
      } px-5 py-2 rounded font-bold`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
