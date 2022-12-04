import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-inner">
            <div className="footer-left">
            <div className="footer-logo">Basement Brew</div>
            <p>Lorem ipsum dolor sit amet, autem velit no sea. Qui in vero utinam expetenda. Sit ea putant fierent suavitate, ei has persius utroque. Nam adhuc molestiae no, no oratio pertinacia est.
            </p>
        </div>
        <div className="footer-right">
            <Link to="/"> About Us </Link>
            <Link to="/"> Contact </Link>
            <Link to="/"> Terms of Use </Link>
        </div>
      </div>
    </div>
  );
};