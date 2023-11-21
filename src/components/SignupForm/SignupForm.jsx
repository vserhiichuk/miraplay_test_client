import React from 'react';
import './SignupForm.scss';

const SignupForm = ({ data, handleChangeForm, handleSubmit, error, isLoading }) => (
  <form action="" className="signup__form" onSubmit={handleSubmit}>
    <h1 className="signup__form--title">Create Account</h1>
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      onChange={handleChangeForm}
      value={data.firstName}
      className="signup__form--input"
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      onChange={handleChangeForm}
      value={data.lastName}
      className="signup__form--input"
      required
    />
    <input
      type="text"
      name="email"
      placeholder="Email"
      onChange={handleChangeForm}
      value={data.email}
      className="signup__form--input"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChangeForm}
      value={data.password}
      className="signup__form--input"
      required
    />

    {error && <div className="signup__form--error">{error}</div>}
    <button type="submit" className="signup__form--button__second" disabled={isLoading}>
      {isLoading ? 'Signing Up...' : 'Sign Up'}
    </button>
  </form>
);

export default SignupForm;