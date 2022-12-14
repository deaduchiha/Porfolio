import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  const names = ["Home", "Skills", "Projects"];

  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    window.scrollY > 50 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const onUpdateActive = (value) => {
    setActive(value);
  };

  return (
    <Navbar
      sticky="top"
      variant="dark"
      className={`${scroll ? styles.scroll : styles.navbar} `}
    >
      <Container>
        <div className={styles.logo}>
          <Navbar.Brand href="#Home">SENJU</Navbar.Brand>
        </div>
        <Nav className={`me-auto`}>
          {names.map((item) => (
            <Nav.Link
              key={item}
              onClick={() => onUpdateActive({ item })}
              href={`#${item}`}
              className={`${
                active === { item } ? `${"active navbar-link"}` : "navbarlink"
              } ${styles.pages}`}
            >
              {item}
            </Nav.Link>
          ))}
        </Nav>
        <span className={`navbar-text ${styles.social}`}>
          <div className={styles.socialIcon}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/alireza-nikzad-17695b23b/"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/deaduchiha"
            >
              <i className="bi bi-telegram"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/deaduchiha"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
          <button>
            <span>Let's Conncet</span>
          </button>
        </span>
      </Container>
    </Navbar>
  );
};

export default Header;
