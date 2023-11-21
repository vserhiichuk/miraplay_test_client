import React from 'react';
import './SignupForm.scss';

const SignupForm = ({ data, handleChange, handleSubmit, error, isLoading }) => (
  <form action="" className="signup__form" onSubmit={handleSubmit}>
    <h1 className="signup__form--title">Create Account</h1>
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      onChange={handleChange}
      value={data.firstName}
      className="signup__form--input"
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      onChange={handleChange}
      value={data.lastName}
      className="signup__form--input"
      required
    />
    <input
      type="text"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      value={data.email}
      className="signup__form--input"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
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