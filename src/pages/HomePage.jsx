import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log Out from {email}
      </button>
    </div>
  ) : (
    <div>
      Hello
      <Navigate replace to="/login" />
    </div>
  );
};

export default HomePage;
