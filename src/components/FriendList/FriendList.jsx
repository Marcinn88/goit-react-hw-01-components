// import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.css";

export const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            />
        ))}
    </ul>
);

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };