import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import userDate from "./user.json";
import statisticalData from "./statistical-data.json";
import friendsData from "./friends.json";

const App = () => (
  <div>
    <Profile
      avatar={userDate.avatar}
      name={userDate.name}
      tag={userDate.tag}
      location={userDate.location}
      statsFollowers={userDate.stats.followers}
      statsViews={userDate.stats.views}
      statsLikes={userDate.stats.likes}
    />
    <Statistics title="Upload stats" stats={statisticalData} />;
    <FriendList friends={friendsData} />
  </div>
);

export default App;
