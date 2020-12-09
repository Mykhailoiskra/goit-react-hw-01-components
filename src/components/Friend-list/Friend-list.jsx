import PropTypes from "prop-types";
import FriendListItem from "components/Friend-list-item/Friend-list-item.jsx";
import s from "./friend-list.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array,
};
