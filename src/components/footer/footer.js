import "./footer.scss";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__directions">
        <p className="footer__directions--paragraph">Directions</p>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="footer__contacts">
        <p className="footer__contacts--paragraph">Contact</p>
        <p>Company: Tanky</p>
        <p>Phone: +420 777 999 888</p>
        <p>E-mail: email@tanky.com</p>
        <p>Address: Street, City, PostCode</p>
        <p className="footer__copyright">
          &copy;2020 inspiration of World of Tanks
        </p>
      </div>
    </div>
  );
}
