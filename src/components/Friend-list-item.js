import PropTypes from "prop-types";

function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={toString(id)} class="item">
      {isOnline ? (
        <span class="status online"></span>
      ) : (
        <span class="status offline"></span>
      )}
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
