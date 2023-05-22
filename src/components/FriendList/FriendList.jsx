import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({friends}) => (
    <ul className={css.friendList}>
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

// Friends:
FriendList.propTypes = PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}))
