import React from "react";

const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
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
};

export default Profile;