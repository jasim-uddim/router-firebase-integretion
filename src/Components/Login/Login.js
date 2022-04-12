import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleWithSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h1>please login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={handleGoogleWithSignIn}>Google sign in</button>
      </div>
      <form>
        <input type="email" name="" id="" placeholder="your email" />
        <br></br>
        <input type="password" name="" id="" placeholder="your password" />
        <br></br>
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
