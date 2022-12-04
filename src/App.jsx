import React from "react";

// Layout
import Layout from "./components/shared/layout/Layout";

// Components
import Header from "./components/shared/navbar/Header";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Banner />
      </Layout>
    </>
  );
};

export default App;
