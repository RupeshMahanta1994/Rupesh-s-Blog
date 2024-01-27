import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const DashboardProfile = () => {
  //initialize global variable
  const { currentUser } = useSelector((state) => state.user);
  const { photoUrl, email, username } = currentUser.rest;
  return (
    <>
      <div className="w-full flex items-center justify-center my-5">
        <Card className="w-[70%] md:w-[60%]">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <img
                alt="Profile Image"
                height="96"
                src={photoUrl}
                width="96"
                className="mb-3 rounded-full shadow-lg border-4 dark:border-gray-600"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="username"
                value={username}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@name.com"
                value={email}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your Password" />
              </div>
              <TextInput id="password" type="password" placeholder="********" />
            </div>

            <Button gradientDuoTone={"purpleToPink"} type="submit" outline>
              Update
            </Button>
            <div className="flex items-center justify-between mt-3 text-red-500 font-semibold tracking-wide ">
              <div className="cursor-pointer">Delete Account</div>
              <div className="cursor-pointer">Sign Out</div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default DashboardProfile;
