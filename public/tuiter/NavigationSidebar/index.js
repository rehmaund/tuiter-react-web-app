const NavigationSidebar = (active) => {
    return(`
            <div class="list-group mt-2">
             <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
         
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" id="event-target" href="../home/home.html"><i class="fas fa-house">&nbsp;&nbsp;</i>Home</a>
                <a class="list-group-item ${active === 'explore' ? 'active' : ''}" id="event-target" href="../explore/index.html"><i class="fa fa-hashtag">&nbsp;&nbsp;</i>Explore</a>
                <a class="list-group-item ${active === 'notifications' ? 'active' : ''}" id="event-target" href="../notifications.html"><i class="fa fa-bell">&nbsp;&nbsp;</i>Notifications</a>
                <a class="list-group-item ${active === 'messages' ? 'active' : ''}" id="event-target" href="../messages.html"><i class="fa fa-envelope"">&nbsp;&nbsp;</i>Messages</a>
                <a class="list-group-item ${active === 'bookmarks' ? 'active' : ''}" id="event-target" href="../bookmarks.html"><i class="fa fa-bookmark">&nbsp;&nbsp;</i>Bookmarks</a>
                <a class="list-group-item ${active === 'lists' ? 'active' : ''}" id="event-target" href="../lists.html"><i class="fa fa-list">&nbsp;&nbsp;</i>Lists</a>
                <a class="list-group-item ${active === 'profile' ? 'active' : ''}" id="event-target" href="../profile.html"><i class="fa fa-user">&nbsp;&nbsp;</i>Profile</a>
                <a class="list-group-item ${active === 'more' ? 'active' : ''}" id="event-target" href="../more.html"><i class="fas fa-circle">&nbsp;&nbsp;</i>More</a>
        </div>
            <div class="d-grid mt-2">
            <button class="btn btn-primary btn-block rounded-pill wd-text-centered">
                Tuit
            </button>
            </div>
 `);
}
export default NavigationSidebar;