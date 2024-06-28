import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.wrapper}>
            {friends.map(friend => {
                const { avatar, name, isOnline, id } = friend;
                return (
                    <li key={id} className={s.friendProfile}>
                        <img src={avatar} alt={name} width={100} />
                        <p className={s.userName}>{name}</p>
                        {isOnline ? (
                            <p className={s.userOnline}>Online</p>
                        ) : (
                            <p className={s.userOffline}>Offline</p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default FriendList;
