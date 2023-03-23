import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "./profile-reducer";

function EditProfileComponent() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user)
    const editUserHandler = (userData) => {
        dispatch(editUser(userData));
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <textarea className="form-control" id="name" name="name" placeholder={userData.firstName + ' ' + userData.lastName}></textarea>
            </div>
            <div className="form-group">
                <label for="bio">Bio</label>
                <textarea className="form-control" id="bio" name="bio" placeholder={userData.bio}></textarea>
            </div>
            <div className="form-group">
                <label for="location">Location</label>
                <textarea className="form-control" id="location" name="location" placeholder={userData.location}></textarea>
            </div>
            <div className="form-group">
                <label for="website">Website</label>
                <textarea className="form-control" id="website" name="website"
                          placeholder={userData.website}></textarea>
            </div>
            <div className="form-group">
                <label for="dob">Date of Birth</label>
                <textarea className="form-control" id="dob" name="dob" placeholder={userData.dateOfBirth}></textarea>
            </div>
        </form>

    );
}

export default EditProfileComponent;