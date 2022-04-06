import styles from "./app.module.css";
import Doogle from "./components/doogle/doogle";

import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Doogle />
    </div>
  );
}

export default App;
