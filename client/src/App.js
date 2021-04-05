import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "../src/Components/Layout/Layout";
import Landing from "./Screens/Landing";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import AddFood from "./Screens/AddFood";
import FinishedWorkout from "./Screens/FinishedWorkout";
import FoodTracker from "./Screens/FoodTracker";
import WorkoutDetails from "./Screens/WorkoutDetails";
import WorkoutIndex from "./Screens/WorkoutIndex";
// Imports =========================================================
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./Services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };
  return (
    <div className="layout-contianer">
      <Layout>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/food/new">
            <AddFood />
          </Route>
          <Route path="/workouts/:user_id/">
            <FinishedWorkout />
            </Route>
          <FoodTracker />
          <WorkoutDetails />
          <WorkoutIndex />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
