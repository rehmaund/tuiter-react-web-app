const SmallNavigationSidebar = (active) => {
    return(`
            <div class="list-group">
             <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
         
                <a class="list-group-item ${active === 'Home' ? 'active' : ''}" href="../navigation.html"><i class="fas fa-house"></i></a>
                <a class="list-group-item ${active === 'Explore' ? 'active' : ''}" href="index.html"><i class="fa fa-hashtag"></i></a>
                <a class="list-group-item" href="../notifications.html.html"><i class="fa fa-bell"></i></a>
                <a class="list-group-item" href="../messages.html"><i class="fa fa-envelope""></i></a>
                <a class="list-group-item" href="../bookmarks.html"><i class="fa fa-bookmark"></i></a>
                <a class="list-group-item" href="../lists.html"><i class="fa fa-list"></i></a>
                <a class="list-group-item" href="../profile.html"><i class="fa fa-user"></i></a>
                <a class="list-group-item" href="../more.html"><i class="fas fa-circle"></i></a>
        </div>
            <div class="d-grid mt-2">
            <button class="btn btn-primary btn-block rounded-pill wd-text-centered">
                Tuit
            </button>
            </div>
 `);
}
export default SmallNavigationSidebar;