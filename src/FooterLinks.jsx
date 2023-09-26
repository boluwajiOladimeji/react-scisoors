const FooterLinks = ({ title, footerArray }) => {
  return (
    <div
      className={`logo-links ${
        title === 'Resources' ? 'footer-second-line' : ''
      }`}
    >
      <h3>{title}</h3>
      <ul>
        {footerArray.map((name) => (
          <li key={name}>
            <a href='#'>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
