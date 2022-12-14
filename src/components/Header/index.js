import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className={`${styles.headerMain} d-flex flex-row align-items-center justify-content-between`}
    >
      <Link to="/">
        <h1 className={`mb-0`}>Routing_</h1>
      </Link>

      <div className="d-flex ml-4">
        <Link
          to="/mystery"
          className="btn btn--outlined btn--light ml-3 ml-lg-4"
        >
          <i className="fa-solid fa-question"></i>
          <span className="ml-2 d-none d-sm-inline">Mystery</span>
        </Link>
        <Link
          to="/account"
          className="btn btn--outlined btn--light ml-3 ml-lg-4"
        >
          <i className="fa-solid fa-user"></i>
          <span className="ml-2 d-none d-sm-inline">Account</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
