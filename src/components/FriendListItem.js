import React from "react";
import PropTypes from "prop-types";
import defaultPhotoProfile from "../image/defaultPhotoProfile.jpg";

const FriendListItem = ({ id, name, avatar, isOnline }) => (
  <li key={id} class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultPhotoProfile,
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
