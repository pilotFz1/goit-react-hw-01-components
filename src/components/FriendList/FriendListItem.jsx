import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  let condition = css.online;

  if (isOnline) {
    condition = css.offline;
  }

  return (
    <>
      <span className={`${css.condition} + '' + ${condition}`}></span>
      <img src={avatar} alt="Avatar" width="35" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
