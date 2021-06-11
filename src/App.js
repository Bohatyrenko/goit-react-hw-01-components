import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import Friends from '../src/components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory';
import userDate from './user.json';
import statisticalData from './statistical-data.json';
import friendsData from './friends.json';
import transactionData from './transaction.json';
import baseStyles from './base__styles.css';

const App = () => (
  <div className={baseStyles.container}>
    <Profile data={userDate} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Friends bestPeople={friendsData} />
    <TransactionHistory items={transactionData} />
  </div>
);

export default App;
