import s from './FriendListItem.module.css';

const FriendListItem = ({ key, name, avatar, isOnline }) => {
    return (
        <li key={key} className={s.friendProfile}>
            <img src={avatar} alt={name} width={100} />
            <p className={s.userName}>{name}</p>
            {isOnline ? (
                <p className={s.userOnline}>Online</p>
            ) : (
                <p className={s.userOffline}>Offline</p>
            )}
        </li>
    );
};

export default FriendListItem;
