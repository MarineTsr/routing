import styles from "./Header.module.scss";

function Header() {
  return (
    <header
      className={`${styles.headerMain} d-flex flex-row align-items-center justify-content-between`}
    >
      <h1 className={`mb-0`}>Routing_</h1>
    </header>
  );
}

export default Header;
