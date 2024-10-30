interface ITextFieldProps {
  label: string;
  width: string; // (w-full, w-1/2...)
  placeholder?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: { message: string}
}

export default function TextField(props: ITextFieldProps) {
  const { label, width, placeholder, name, onChange, value, error } = props;

  return (
    <div className={`flex flex-col ${width}`}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`border-2 p-2 rounded-md ${error ? "border-red-500" : "border-grey-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
