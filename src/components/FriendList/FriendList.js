import React from 'react';
import PropTypes from 'prop-types';
import defaultPhotoProfile from './defaultPhotoProfile.jpg';
import FriendListItem from './FriendListItem';
import styles from './Friendlist.module.css';

const Friends = ({ bestPeople }) => (
  <ul className={'styles.friend-list'}>
    {bestPeople.map(({ id, isOnline, avatar, name }) => (
      <FriendListItem id={id} name={name} avatar={avatar} isOnline={isOnline} />
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
