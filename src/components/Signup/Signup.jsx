import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/userApi";
import { useMutation } from "react-query";
import "./Signup.scss";

export const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const mutation = useMutation(
    async () => {
      try {
        const response = await registerUser(data);
        return response;
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate();
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__left">
          <h1 className="signup__left--title">Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="signup__button--first">
              Sign in
            </button>
          </Link>
        </div>

        <div className="signup__right">
          <form action="" className="signup__form" onSubmit={handleSubmit}>
            <h1 className="signup__form--title">Create Account</h1>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={data.firstName}
              className="signup__input"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={data.lastName}
              className="signup__input"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              className="signup__input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              className="signup__input"
              required
            />

            {error && <div className="signup__error">{error}</div>}
            <button type="submit" className="signup__button--second">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
