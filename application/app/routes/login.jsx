// src/routes/login.jsx
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
export default function Login() {
  return (
    <div>
      <h1>Login/Sign Up</h1>
      <div>
        <div>
          <h2>Register</h2>
          <RegistrationForm />
        </div>
        <div>
          <h2>Login</h2>
          <LoginForm />
        </div>
      </div>
  
    </div>
  );
}
