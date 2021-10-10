import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Auth = () => {
  const user = JSON.parse(process.env.REACT_APP_USERNAME);
  const CLIENT_ID = user.CLIENTID;
  const dispatch = useDispatch();
  const history = useHistory();
  const loginFaliure = (error) => {
    console.log(error, "e");
  };
  const loginSuccess = async (res) => {
    await dispatch({ type: "AUTH", payload: res.profileObj });
    history.push('/')
  };
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={loginSuccess}
        onFailure={loginFaliure}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
};

export default Auth;
