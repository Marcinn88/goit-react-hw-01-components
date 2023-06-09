// import React from "react";
import PropTypes from "prop-types";
import css from"./FriendListItem.module.css";

export const FriendListItem = ({
    isOnline,
    avatar,
    name
    }) => (
        <li className={css.item}>
            <span className={isOnline ? css.statusOn : css.statusOff}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48"/>
            <p className={css.name}>{name}</p>
        </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };