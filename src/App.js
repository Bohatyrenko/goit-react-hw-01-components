import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import userDate from "./user.json";
import statisticalData from "./statistical-data.json";

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
  </div>
);

export default App;
