import React from "react";
import "./PropertyList.scss";

function PropertyList(props) {
  return (
    <div className="property-list">
      <div className="property-list__item">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="property-list__img"
        />
        <div className="property-list__title">
            <h1>Hotels</h1>
            <h2>245 Hotels</h2>
        </div>
      </div>
      <div className="property-list__item">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="property-list__img"
        />
        <div className="property-list__title">
            <h1>Apartments</h1>
            <h2>245 Apartments</h2>
        </div>
      </div>
      <div className="property-list__item">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="property-list__img"
        />
        <div className="property-list__title">
            <h1>Resorts</h1>
            <h2>2425 Hotels</h2>
        </div>
      </div>
      <div className="property-list__item">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="property-list__img"
        />
        <div className="property-list__title">
            <h1>Villas</h1>
            <h2>2425 Villas</h2>
        </div>
      </div>
      <div className="property-list__item">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="property-list__img"
        />
        <div className="property-list__title">
            <h1>Cabins</h1>
            <h2>654 Cabins</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
