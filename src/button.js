export default function Bouton({ texte, type, boutton_class }) {
  return (
    <>
      <button type={type} className={boutton_class}>
        {texte}
      </button>
    </>
  );
}
