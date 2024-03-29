import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Flowbite,
  Navbar,
  TextInput,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { toggleTheme } from "../../redux/theme/themeSlice";

const Header = () => {
  //location variable
  const path = useLocation().pathname;
  //global variabe
  const { currentUser } = useSelector((state) => state.user);
  //global theme variables
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleThemeClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Navbar className="w-full flex items-center justify-between">
        <Navbar.Brand>
          <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 px-1 rounded-lg mr-1">
              Rupesh's
            </span>
            Blog
          </div>
        </Navbar.Brand>
        <form action="" className="hidden md:inline">
          <TextInput
            type="text"
            placeholder="Search"
            className=""
            rightIcon={AiOutlineSearch}
          />
        </form>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={path == "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" active={path == "/about"}>
            About
          </Navbar.Link>
          <Navbar.Link href="/products" active={path == "/products"}>
            Products
          </Navbar.Link>

          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        <div className="flex items-center">
          <div
            className="mx-2 border border-gray-200 p-2 rounded-md dark:border dark:border-gray-600 cursor-pointer"
            onClick={handleThemeClick}
          >
            {theme == "light" ? (
              <FaRegSun />
            ) : (
              <FaRegMoon className="text-white" />
            )}
          </div>
        </div>

        <Button className="w-12 md:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex">
          <div>
            {currentUser ? (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="User Profile"
                      img={currentUser.rest.photoUrl}
                      rounded
                    />
                  }
                >
                  <Dropdown.Header>
                    <p className="font-bold tracking-wide">
                      @{currentUser.rest.email}
                    </p>
                    <p className="text-sm">{currentUser.rest.username}</p>
                  </Dropdown.Header>

                  <Dropdown.Item>
                    <Navbar.Link href={"/dashboard"}>Dashboard</Navbar.Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign Out</Dropdown.Item>
                </Dropdown>
              </>
            ) : (
              <Button outline gradientDuoTone="purpleToBlue">
                Sign In
              </Button>
            )}
          </div>
          {/**For Mobilescreen only */}
          <Navbar.Toggle />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
