import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginAPI } from '../../api/AuthAPI';

interface UserCredentials {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentails, setCredentials] = useState<UserCredentials>(null);
  const login = async () => {
    try {
      const res = await LoginAPI(credentails.email, credentails.password);
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="auth-inputs">
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, email: event.target.value })
          }
          type="email"
          className="common-input"
          placeholder="Email or Phone"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
          }
          type="password"
          className="common-input"
          placeholder="Password"
        />
        <button onClick={login} className="login-btn">
          Iniciar sesion
        </button>
      </div>
    </>
  );
};
