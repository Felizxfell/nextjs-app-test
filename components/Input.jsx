export default function Input({
  hiddenMargin,
  id,
  name,
  type,
  label,  
  error,
}) {
  return (
    <div className={(hiddenMargin ? "" : "mb-7") + " relative"}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={label}
        autoComplete="off"
        className="w-full border rounded py-1 px-3 border-libellum-border focus:outline-none text-libellum-gray"        
      />
      {error && <div className="text-red-600 text-sm absolute">{error}</div>}
    </div>
  );
}
