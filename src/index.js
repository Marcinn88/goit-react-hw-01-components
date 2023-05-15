import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import {TransactionHistory} from './components/TransactionHistory/TransactionHistory'
import './index.css';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
  </React.StrictMode>
);
