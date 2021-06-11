import React from 'react';
import PropTypes from 'prop-types';
import defaultPhotoProfile from './defaultPhotoProfile.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ id, name, avatar, isOnline }) => (
  <li key={id} className={isOnline ? styles.item__success : styles.item__eror}>
    <span>{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
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
