import React from "react";
import PropTypes from "prop-types";
import defaultPhotoProfile from "../image/defaultPhotoProfile.jpg";

const FriendList = (friends) => (
  <ul class="friend-list">
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id} class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  avatar: defaultPhotoProfile,
};

FriendList.prototype = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendList;
