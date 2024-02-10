export default function Link({ href, texte, link_class }) {
  return (
    <>
      <a href={href} className={link_class}>
        {texte}
      </a>
    </>
  );
}
