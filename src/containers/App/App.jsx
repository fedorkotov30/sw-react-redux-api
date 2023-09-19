import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesConfig from "../../routes/routesConfig";
import Header from "../../components/Header";

import styles from "../App/App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
