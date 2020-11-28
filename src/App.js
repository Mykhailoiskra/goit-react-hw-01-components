import "./App.css";

// import of components
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/Friend-list";
import TransactionsHistory from "./components/Transactions";

// import of data-files
import userData from "./data/user.json";
import statiscalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactionsData from "./data/transactions-data.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics stats={statiscalData} title="Documents Upload Stats" />

      <FriendList friends={friends} />

      <TransactionsHistory items={transactionsData} />
    </div>
  );
}

export default App;
