import React from "react";

// Layout
import Layout from "./components/shared/layout/Layout";

// Components
import Header from "./components/shared/navbar/Header";
import Banner from "./components/banner/Banner";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default App;
