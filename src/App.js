import React from "react";
import Profile from "./components/Profile";
import userDate from "./user.json";

const App = () => {
  return (
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
    </div>
  );
};

export default App;
