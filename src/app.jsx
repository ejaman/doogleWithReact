import styles from "./app.module.css";
import Doogle from "./components/doogle/doogle";

function App() {
  return (
    <div className={styles.doogle}>
      <Doogle />
    </div>
  );
}

export default App;
