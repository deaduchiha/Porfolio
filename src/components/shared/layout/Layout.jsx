import React from "react";
import { Container } from "react-bootstrap";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
