import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/authSlice";
import { loginUser } from "../../api/userApi";
import { useMutation } from "react-query";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.scss";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeForm = ({ currentTarget: input }) => {
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
        <LoginForm
            data={data}
            handleChangeForm={handleChangeForm}
            handleSubmit={handleSubmit}
            error={error}
            isLoading={mutation.isLoading}
          />
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
