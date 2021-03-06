import "./index.css";

function Link({
  link,
  classLink = "",
  imgSrc = "",
  imgAlt = "",
  imgClass = "",
  children,
}) {
  return (
    <a href={link} className={classLink} target="_blank" rel="noreferrer">
      {imgSrc && <img src={imgSrc} alt={imgAlt} className={imgClass} />}
      {children}
    </a>
  );
}

export default Link;
