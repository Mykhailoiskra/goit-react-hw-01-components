import PropTypes from "prop-types";
import FriendListItem from "./Friend-list-item";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
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
