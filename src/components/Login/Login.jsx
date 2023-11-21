import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/authSlice";
import { loginUser } from "../../api/userApi";
import { useMutation } from "react-query";
import "./Login.scss";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const mutation = useMutation(
    async () => {
      try {
        const res = await loginUser(data);
        return res;
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: (res) => {
        dispatch(setToken(res.data));
        navigate("/");
        console.log(res.message);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    mutation.mutate();
  };

  return (
    <div className="login">
      <div className="login__container--form">
        <div className="login__left">
          <form action="POST" className="login__form" onSubmit={handleSubmit}>
            <h1 className="login__form--title">Login to your Account</h1>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              className="login__input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
              className="login__input"
              required
            />

            {error && <div className="login__error">{error}</div>}
            <button type="submit" className="login__button--first" disabled={mutation.isLoading}>
              {mutation.isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className="login__right">
          <h1 className="login__right--title">New Here ?</h1>

          <Link to="/signup">
            <button type="button" className="login__button--second">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
