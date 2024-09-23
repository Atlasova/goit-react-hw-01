// src/components/App.jsx
import './App.css';
//Import paths of components
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/src/components/TransactionHistory';
//Import paths of data
import userData from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transaction.json';

export default function App() {
  const { followers, views, likes } = userData.stats;
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
