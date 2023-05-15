import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Profile } from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import './index.css';
import user from './data/user.json'
import data from './data/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  </React.StrictMode>
);
