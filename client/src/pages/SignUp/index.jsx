import React from "react";
import { Button, FloatingLabel, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
            <form action="" className=" w-[60%] space-y-3">
              <div className="flex flex-col gap-2 ">
                <Label
                  className="text-base tracking-wide font-semibold"
                  value="Username"
                />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label
                  className="text-base tracking-wide font-semibold"
                  value="Email"
                />
                <TextInput
                  type="email"
                  placeholder="email@email.com"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label
                  className="text-base tracking-wide font-semibold"
                  value="Password"
                />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <div>
                <Button className="w-full" gradientDuoTone="purpleToPink">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
          <div className="flex space-x-2">
            <h1 className="dark:text-white">Don't have an Account</h1>
            <Link className="underline text-blue-400" to="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
