import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Doogle from "./components/doogle/doogle";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Searched from "./components/searched/searched";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <Doogle />
                <Footer />
              </>
            }
          />
          <Route
            path="/search"
            exact
            element={
              <>
                <Header />
                <Searched />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
