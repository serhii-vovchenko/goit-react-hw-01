import s from './Profile.module.css';

const Profile = props => {
    const {
        name,
        tag,
        location,
        image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
        stats: { followers, views, likes },
    } = props;

    return (
        <div className={s.wrapper}>
            <div className={s.userData}>
                <img className={s.img} src={image} alt="User avatar" />
                <p className={s.userName}>{name}</p>
                <p className={s.userContacts}>@{tag}</p>
                <p className={s.userContacts}>{location}</p>
            </div>

            <ul className={s.statsList}>
                <li className={s.statsItem}>
                    <span className={s.statsTitle}>Followers</span>
                    <span className={s.statsValue}>{followers}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.statsTitle}>Views</span>
                    <span className={s.statsValue}>{views}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.statsTitle}>Likes</span>
                    <span className={s.statsValue}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
