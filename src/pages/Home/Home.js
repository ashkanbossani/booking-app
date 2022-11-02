import React from "react";
import "./Home.scss";
import Navbar from "../../componants/Navbar/Navbar";
import Header from "../../componants/Header/Header";
import Featured from "../../componants/Featured/Featured";
function Home(props) {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
      </div>
    </div>
  );
}

export default Home;
