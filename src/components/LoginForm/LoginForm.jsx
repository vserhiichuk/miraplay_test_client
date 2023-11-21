import React from 'react';
import './LoginForm.scss';

const LoginForm = ({ data, handleChangeForm, handleSubmit, error, isLoading }) => (
  <form action="POST" className="login__form" onSubmit={handleSubmit}>
    <h1 className="login__form--title">Login to your Account</h1>
    <input
      type="text"
      name="email"
      placeholder="Email"
      onChange={handleChangeForm}
      value={data.email}
      className="login__form--input"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChangeForm}
      value={data.password}
      className="login__form--input"
      required
    />

    {error && <div className="login__form--error">{error}</div>}
    <button type="submit" className="login__form--button__first" disabled={isLoading}>
      {isLoading ? "Signing In..." : "Sign In"}
    </button>
  </form>
);

export default LoginForm;