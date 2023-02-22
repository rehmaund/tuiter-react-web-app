import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
        <div className="list-group mt-2">
        <a className="list-group-item" href="/">
            <i className="fab fa-twitter"></i></a>

        <a className={`list-group-item ${active === 'home' ? 'active' : ''}`}  id="event-target"
           href="../home/home.html"><i className="fas fa-house">&nbsp;&nbsp;</i>Home</a>
        <a className={`list-group-item ${active === 'explore' ? 'active' : ''}`}  id="event-target"
           href="../explore/index.html"><i className="fa fa-hashtag">&nbsp;&nbsp;</i>Explore</a>
        <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} id="event-target"
           href="../notifications.html"><i className="fa fa-bell">&nbsp;&nbsp;</i>Notifications</a>
        <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}  id="event-target"
           href="../messages.html"><i className="fa fa-envelope">&nbsp;&nbsp;</i>Messages</a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} id="
                                      event-target" href="../bookmarks.html"><i
            className="fa fa-bookmark">&nbsp;&nbsp;</i>Bookmarks</a>
        <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}  id="event-target" href="../lists.html"><i
            className="fa fa-list">&nbsp;&nbsp;</i>Lists</a>
        <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}  id="event-target" href="../profile.html"><i
            className="fa fa-user">&nbsp;&nbsp;</i>Profile</a>
        <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}  id="event-target" href="../more.html"><i
            className="fas fa-circle">&nbsp;&nbsp;</i>More</a>
    </div>
    <div className="d-grid mt-2">
        <button className="btn btn-primary btn-block rounded-pill wd-text-centered">
            Tuit
        </button>
    </div>
        </div>

);
}
export default NavigationSidebar;