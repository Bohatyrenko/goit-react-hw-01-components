import React from "react";
import PropTypes from "prop-types";
import defaultPhotoProfile from "../image/defaultPhotoProfile.jpg";

const Friends = ({ bestPeople }) => (
  <ul class="friend-list">
    {bestPeople.map(({ id, isOnline, avatar, name }) => (
      <li key={id} class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
      </li>
    ))}
  </ul>
);

Friends.defaultProps = {
  avatar: defaultPhotoProfile,
};

Friends.prototype = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Friends;
