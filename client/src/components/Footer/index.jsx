import { Footer } from "flowbite-react";
import React from "react";

const index = () => {
  return (
    <>
      <Footer className="dark:bg-gray-800 dark:text-slate-100">
        <div className="px-10 py-10 space-y-5">
          <div className="">
            {/**Logo */}
            <div className="self-center whitespace-nowrap text-xl font-semibold ">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 px-1 rounded-lg mr-1">
                Rupesh's
              </span>
              Blog
            </div>
          </div>
          {/**Menu items */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <div className="">
              <h1 className="uppercase font-semibold  tracking-wide mb-2">
                about
              </h1>
              <p>100 JS projects</p>
              <p>Rupesh's Blog</p>
            </div>
            <div>
              <h1 className="uppercase font-semibold  tracking-wide mb-2">
                follow us
              </h1>
              <p>Github</p>
              <p>Discord</p>
            </div>
            <div>
              <h1 className="uppercase font-semibold  tracking-wide mb-2">
                legal
              </h1>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="">
            <h1>@2024 Rupesh's Blog</h1>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default index;
