import React from "react";
import { FriendListItem } from '../FriendListItem/FriendListItem';

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