import React from 'react';
import "./List.scss";
import Navbar from "../../componants/Navbar/Navbar";
import Header from "../../componants/Header/Header";

function List(props) {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
        </div>
    );
}

export default List;