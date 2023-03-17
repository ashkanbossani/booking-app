import React from "react";
import "./Home.scss";
import Navbar from "../../componants/Navbar/Navbar";
import Header from "../../componants/Header/Header";
import Featured from "../../componants/Featured/Featured";
import PropertyList from "../../componants/PropertyList/PropertyList";
function Home(props) {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home">
        <Featured />
        <h1 className="home__title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home__title">Homes guests love</h1>
      </div>
    </div>
  );
}

export default Home;
