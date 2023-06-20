import './index.css'
import TwitterFollowCard from "./components/TwitterFollowCard";
function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true,
    },
    {
      userName: "pheralb",
      name: "Pablo H.",
      isFollowing: false,
    },
    {
      userName: "PacoHdezs",
      name: "Paco Hdez",
      isFollowing: true,
    },
    {
      userName: "TMChein",
      name: "Tomas",
      isFollowing: false,
    },
  ];

  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          userName={userName}
          nameTag={name}
          isInitialFollow={isFollowing}
        ></TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
