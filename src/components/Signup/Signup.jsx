import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/userApi";
import { useMutation } from "react-query";
import SignupForm from "../SignupForm/SignupForm";
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

  const handleChangeForm = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

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
          <SignupForm
            data={data}
            handleChangeForm={handleChangeForm}
            handleSubmit={handleSubmit}
            error={error}
            isLoading={mutation.isLoading}
          />
        </div>
      </div>
    </div>
  );
};
