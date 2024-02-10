export default function Input({ htmlFor, texteLabel, inputType }) {
  return (
    <div className="inputGroup">
      <label className="label" htmlFor={htmlFor}>
        {texteLabel}
      </label>
      <input className="input" type={inputType} id={htmlFor} />
    </div>
  );
}
