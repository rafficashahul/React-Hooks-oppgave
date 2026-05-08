import { useEffect } from "react";
import { useState } from "react";
import styles from "./CatFacts.module.css";

const CatFacts = () => {
  const [loading, setLoading] = useState(true);
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    fetch(`https://catfact.ninja/facts?limit=5&page=${randomPage}`)
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className={styles.factBox}>
      {loading && <p>Loading...</p>}
      {facts.map((item, index) => (
        <p key={index}>{item.fact}</p>
      ))}
    </div>
  );
};
export default CatFacts;
