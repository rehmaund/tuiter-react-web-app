import React from "react";
import TuitsList from "../tuits/tuits-list/tuits-list.js"
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent= () => {
    return(
        <div className="mt-2">
            <WhatsHappening/>
            <TuitsList/>
        </div>

    )
};
export default HomeComponent;