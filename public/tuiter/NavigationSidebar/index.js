const NavigationSidebar = () => {
    return(`
            <div class="list-group">
             <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
         
                <a class="list-group-item" href="../navigation.html"><i class="fas fa-house">&nbsp;&nbsp;</i>Home</a>
                <a class="list-group-item bg-primary" href="index.html"><i class="fa fa-hashtag">&nbsp;&nbsp;</i>Explore</a>
                <a class="list-group-item" href="../notifications.html.html"><i class="fa fa-bell">&nbsp;&nbsp;</i>Notifications</a>
                <a class="list-group-item" href="../messages.html"><i class="fa fa-envelope"">&nbsp;&nbsp;</i>Messages</a>
                <a class="list-group-item" href="../bookmarks.html"><i class="fa fa-bookmark">&nbsp;&nbsp;</i>Bookmarks</a>
                <a class="list-group-item" href="../lists.html"><i class="fa fa-list">&nbsp;&nbsp;</i>Lists</a>
                <a class="list-group-item" href="../profile.html"><i class="fa fa-user">&nbsp;&nbsp;</i>Profile</a>
                <a class="list-group-item" href="../more.html"><i class="fas fa-circle">&nbsp;&nbsp;</i>More</a>
        </div>
            <div class="d-grid mt-2">
            <button class="btn btn-primary btn-block rounded-pill wd-text-centered">
                Tuit
            </button>
            </div>
 `);
}
export default NavigationSidebar;