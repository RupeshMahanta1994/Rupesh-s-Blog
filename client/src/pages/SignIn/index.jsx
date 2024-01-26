import React, { useState } from "react";
import {
  Alert,
  Button,
  FloatingLabel,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  //navigation variable
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      const { data } = await axios.post("/api/user/signinUser", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success === false) {
        return setErrorMessage(data.message);
      } else {
        alert(data.message);
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row  items-center justify-center bg-slate-100 dark:bg-gray-900">
        <div className=" space-y-5">
          {/**Left */}
          <div className="lg:flex-1 flex flex-col items-center justify-center space-y-4 ">
            <div className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white ">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 px-2 rounded-lg mr-1 ">
                Rupesh's
              </span>
              Blog
            </div>
            <p className="dark:text-white">
              This is Signup page. You can sign up with your email and password
            </p>
          </div>
          {/**Right */}
          <div className="flex-1  flex items-center justify-center">
            <form onSubmit={handleSubmit} className=" w-[60%] space-y-3">
              <div className="flex flex-col gap-2 ">
                <Label
                  className="text-base tracking-wide font-semibold"
                  value="Email"
                />
                <TextInput
                  type="email"
                  placeholder="email@email.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label
                  className="text-base tracking-wide font-semibold"
                  value="Password"
                />
                <TextInput
                  type="text"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Button
                  className="w-full"
                  gradientDuoTone="purpleToPink"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner size="sm">
                        <span className="pl-3">Loading...</span>
                      </Spinner>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex space-x-2">
            <h1 className="dark:text-white">Don't have an Account</h1>
            <Link className="underline text-blue-400" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
        {errorMessage && <Alert color="failure">{errorMessage}</Alert>}
      </div>
    </>
  );
};

export default SignUp;
