import React from "react";
import PropTypes from 'prop-types';
// import css from './FriendListItem.css'

export const FriendListItem = ({
    isOnline,
    avatar,
    name
    }) => (
        <li className="item">
            <span className={isOnline===true?'statusOn':'statusOff'}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };