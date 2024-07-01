import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.wrapper}>
            {friends.map(friend => {
                const { avatar, name, isOnline, id } = friend;
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    );
};

export default FriendList;
