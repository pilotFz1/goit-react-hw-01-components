import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li className={css.tittle} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
