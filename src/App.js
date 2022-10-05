import React, { useEffect } from "react";
import HomeScreen from "./Views/HomeScreen";
import LoginScreen from "./Views/LoginScreen";
import ProfileScreen from "./Views/ProfileScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(login({ uid: authUser.uid, email: authUser.email }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="bg-black w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route path="profile" element={<ProfileScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
