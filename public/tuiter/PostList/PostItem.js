
export default function PostItem(post) {
    return(`
<div className="wd-div-boxes-bm">
    <i className="wd-3dots-gray wd-move-up">&hellip;</i>
    <div className="wd-bookmark-item">
        <div className="wd-column-left">

            <img src="user1.jpg"

                 className="wd-profile-photo wd-move-photo1"/>

        </div>

        <div className="wd-column-right wd-white-text-block">
            <p className="wd-text-gray wd-move-up-10"><b className="wd-text-white">Robert
                Zubrin</b> @robert-zubrin &#183; Jul 31 </p>
            <br/>
            <p className="wd-text-gray wd-move-up-50">12px to the right of the avatar image and 12px below the title and
                handle's border, we find the name of the author of the post "Robert Zubrin" followed by their handle
                "@robert_zubrin". The font size of the author and their handle is 15px. The author color is white and
                the handle is light gray. There's a date after the handle.
            </p>
            <image src="restaurant.jpg" className="wd-article-image"></image>
            <div className="wd-border-article wd-move-up-40"><br/><b className="wd-text-white wd-pad-12 wd-pad-top">Web
                Dev Project Directions</b><p className="wd-text-gray wd-pad-12 wd-move-up">Aenean ut ullamcorper lectus.
                Nullam vel bibendum quam. Duis in nulla vulputate, imperdiet est nec, tempor leo. Nam sodales imperdiet
                risus eu suscipit. Donec tincidunt at neque ac scelerisque. Phasellus et nulla vulputate dui efficitur
                rhoncus. Sed feugiat odio at sapien consectetur, volutpat imperdiet lacus posuere. Aliquam erat
                volutpat.</p></div>
            <div className="wd-move-up-30">
                <a href="#" className="wd-gray-icon"><i className="wd-pad-right-12">&#128488; </i>22</a>
                <a href="#" className="wd-gray-icon"><i className="wd-pad-right-12">&crarr; </i>9</a>
                <a href="#" className="wd-red-icon wd-red"><i className="wd-pad-right-12 wd-red">&hearts; </i>37</a>
                <a href="#" className="wd-gray-icon wd-pad-80-left"><i className="wd-pad-right-12">&darr; </i></a>
            </div>
        </div>
    </div>

</div>
    
   `);
}