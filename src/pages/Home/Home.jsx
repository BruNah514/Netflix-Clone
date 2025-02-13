import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import RowList from "../../Component/Rows/RowList/RowList";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;
