import './App.css';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../userData.json';
import friends from '../FriendList.json';
import transactions from '../TransactionHistory.json';

function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;
