import React from "react";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ Devtown {year}</p>
    </footer>
  );
}

export default Footer;
