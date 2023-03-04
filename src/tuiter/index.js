import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list";
import SmallNavigationSidebar from "./navigation-sidebar/small-index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col d-none d-lg-block d-sm-none d-md-none col-lg-2 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col d-none d-sm-block col-xs-2 col-sm-2 col-md-2 d-lg-none d-xl-none d-xxl-none">
                 <SmallNavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter