function Input({ type, disabled, onChange, value }) {
  return (
    <input
      type={type}
      value={value}
      className="border px-3 py-1 rounded"
      disabled={disabled}
      onChange={onChange}
    />
  );
}

export default Input;
