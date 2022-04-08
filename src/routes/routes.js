import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Result from "../pages/result/result";
import Search from "../pages/search/search";

const AppRoutes = () => {
  const [currentUser, setCurrentUser] = React.useState();

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route
            path="/user"
            element={<Search setCurrentUser={setCurrentUser} />}
          />
          <Route
            path={`/user/${currentUser?.login}`}
            element={
              <Result
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
