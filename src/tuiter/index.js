import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list";
import SmallNavigationSidebar from "./navigation-sidebar/small-index.js";
import EditProfileComponent from "./profile/edit-profile.js";
import {Routes, Route, useLocation} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import userReducer from "./profile/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list"
import ProfileComponent from "./profile";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, user: userReducer}});


function Tuiter() {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = paths[2];
    if(active === "home"){
        active = <PostSummaryList/>
    } else {
        active = <WhoToFollowList/>
    }

    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col d-none d-lg-block d-sm-none d-md-none col-lg-2 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col d-none d-sm-block col-xs-2 col-sm-2 col-md-2 d-lg-none d-xl-none d-xxl-none">
                 <SmallNavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-4 col-xxl-4">

                {active}
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter