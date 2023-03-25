import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "./profile-reducer";
import {Link} from "react-router-dom";

function EditProfileComponent() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user)
    const [newName, setNewName] = useState(userData.firstName + ' ' + userData.lastName);
    const [newBio, setNewBio] = useState(userData.bio);
    const [newLocation, setNewLocation] = useState(userData.location);
    const [newWebsite, setNewWebsite] = useState(userData.location);
    const [newDOB, setNewDOB] = useState(userData.dateOfBirth);


    const editUserHandler = () => {
        const userNew = {"firstName": newName.substring(0, newName.indexOf(' ')), "lastName": newName.substring(newName.indexOf(' ') + 1), "handle": "@mochi-the-cat",
            "profilePicture": "/images/mochi4.jpg", 	"bannerPicture": "/images/background.jpg",
            "bio": newBio,
            "website": newWebsite,
            "location": newLocation,	"dateOfBirth": newDOB,	"dateJoined": "04/2023",
            "followingCount": 340,	"followersCount": 1000000}
        dispatch(editUser(userNew));
    }

    return (
        <div>
            <div className="row">
                <div className="col-1 wd-move-down-10">
                    <Link to="/tuiter/profile"><i className="wd-color-black fa-regular fa-circle-xmark fa-lg centered m-2"></i></Link>
                </div>
                <div className="col-6 wd-color-black centered">
                    <h5 className="wd-color-black">Edit Profile</h5>
                </div>
                <div className="col-5">
                    <Link to="/tuiter/profile"><button onClick={() => editUserHandler()} className="btn btn-dark rounded-pill m-2 float-end">Save</button></Link>
                </div>
            </div>
            <div>
                <img src={userData.bannerPicture} width="100%" height="200px"></img>


                <div className="row">
                    <div className="col">
                        <img src={userData.profilePicture} className="wd-rounded-photo mx-4" width="120px" height="120px"></img>
                    </div>
                </div>
            </div>
        <form className="wd-move-up-40">
            <div className="form-group wd-form-borders m-2 p-2">
                <label for="name">Name</label>
                <textarea onChange = {(event) => setNewName(event.target.value)} className="form-control wd-border-none" id="name" name="name" placeholder={userData.firstName + ' ' + userData.lastName}></textarea>
            </div>
            <div className="form-group wd-form-borders wd-form-borders m-2 p-2">
                <label for="bio">Bio</label>
                <textarea onChange = {(event) => setNewBio(event.target.value)} className="form-control wd-border-none" id="bio" name="bio" placeholder={userData.bio}></textarea>
            </div>
            <div className="form-group wd-form-borders m-2 p-2">
                <label for="location">Location</label>
                <textarea onChange = {(event) => setNewLocation(event.target.value)} className="form-control wd-border-none" id="location" name="location" placeholder={userData.location}></textarea>
            </div>
            <div className="form-group wd-form-borders m-2 p-2">
                <label for="website">Website</label>
                <textarea onChange = {(event) => setNewWebsite(event.target.value)} className="form-control wd-border-none" id="website" name="website"
                          placeholder={userData.website}></textarea>
            </div>
            <div className="form-group wd-form-borders m-2 p-2">
                <label for="dob">Date of Birth</label>
                <textarea type="date" onChange = {(event) => setNewDOB(event.target.value)} className="form-control wd-border-none" id="dob" name="dob" placeholder={newDOB}></textarea>
            </div>
        </form>
            </div>

    );
}

export default EditProfileComponent;