import React from 'react';
// import Profile from './components/Profile';
import Statistics from './components/Statistics';
import Friends from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import userDate from './user.json';
import statisticalData from './statistical-data.json';
import friendsData from './friends.json';
import transactionData from './transaction.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => (
  <div>
    <Profile data={userDate123} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Friends bestPeople={friendsData} />
    <TransactionHistory items={transactionData} />
  </div>
);

export default App;
