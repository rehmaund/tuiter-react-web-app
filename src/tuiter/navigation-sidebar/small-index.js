
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const SmallNavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (

<div>
<div className="list-group mt-2">
    <a className="list-group-item" href="/">
        <i className="fab fa-twitter"></i></a>

    <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}  id="event-target"
       href="../home/home.html"><i className="fas fa-house">&nbsp;&nbsp;</i></Link>
    <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}  id="event-target"
       href="../explore/index.html"><i className="fa fa-hashtag">&nbsp;&nbsp;</i></Link>
    <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} id="event-target"
       href="../notifications.html"><i className="fa fa-bell">&nbsp;&nbsp;</i></a>
    <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}  id="event-target"
       href="../messages.html"><i className="fa fa-envelope">&nbsp;&nbsp;</i></a>
    <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} id="
                                      event-target" href="../bookmarks.html"><i
        className="fa fa-bookmark">&nbsp;&nbsp;</i></a>
    <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}  id="event-target" href="../lists.html"><i
        className="fa fa-list">&nbsp;&nbsp;</i></a>
    <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}  id="event-target" href="../profile.html"><i
        className="fa fa-user">&nbsp;&nbsp;</i></a>
    <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}  id="event-target" href="../more.html"><i
        className="fas fa-circle">&nbsp;&nbsp;</i></a>
</div>
<div className="d-grid mt-2">
    <button className="btn btn-primary btn-block rounded-pill wd-text-centered">
        Tuit
    </button>
</div>
</div>

);
}
export default SmallNavigationSidebar;