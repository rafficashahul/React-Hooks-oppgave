import Counter from "./component/CookiesCounter.jsx";
import CatFacts from "./component/CatFacts.jsx";
import Users from "./component/Users.jsx";
const App = () => {
  return (
    <>
      <h1>Hooks in Action 🎯</h1>
      <h2>CookieClicker</h2>
      <Counter />
      <h2>CatFacts</h2>
      <CatFacts />
      <h2>Users</h2>
      <Users />
    </>
  );
};
export default App;
