import React from "react";
import PropTypes from "prop-types";
import defaultPhotoProfile from "../image/defaultPhotoProfile.jpg";

const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={name} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{statsFollowers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{statsViews}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{statsLikes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultPhotoProfile,
  location: "Planet Earth",
};

Profile.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  statsFollowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
};

export default Profile;
