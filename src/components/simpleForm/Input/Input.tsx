export type InputProps = {
  errorMessage?: string;
  error?: boolean;
} & JSX.IntrinsicElements["input"];

const Input = (props: InputProps) => {
  const { placeholder, errorMessage, error = false, type, ...rest } = props;

  return (
    <label>
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        autoComplete="off"
        data-error={error}
      />
      <p className="error" data-error={error}>
        {errorMessage}
      </p>
      <p>{placeholder}</p>
    </label>
  );
};

export default Input;
