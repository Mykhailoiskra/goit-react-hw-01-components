import PropTypes from "prop-types";
import s from "./friend-list-item.module.css";

function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={toString(id)} className={s.item}>
      <span
        className={s.status}
        style={{
          backgroundColor: isOnline ? "green" : "red",
        }}
      ></span>

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
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
