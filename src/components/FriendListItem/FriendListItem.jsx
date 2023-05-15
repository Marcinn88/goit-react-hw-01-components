import React from "react";

export const FriendListItem = ({
    isOnline,
    avatar,
    name
    }) => (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
);