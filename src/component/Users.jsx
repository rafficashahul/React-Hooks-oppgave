import { useState } from "react";
import styles from "./Users.module.css";

const Users = () => {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];
  const [user, setUser] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const addUser = () => {
    setUser([...user, { username, email }]);
    setUsername("");
    setEmail("");
  };
  return (
    <>
      {user.map((data, index) => (
        <p key={index} className={styles.userCard}>
          {data.username},{data.email}
        </p>
      ))}
      <div className={styles.input}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={addUser} className={styles.userBtn}>
        AddUser
      </button>
    </>
  );
};
export default Users;
