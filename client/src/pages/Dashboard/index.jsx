import React from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardProfile from "../../components/DashboardProfile";

const index = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row dark:bg-gray-900">
        {/**Sidebar */}
        <div>
          <DashboardSidebar />
        </div>
        {/**Profile */}
        <div className="w-full flex items-center justify-center">
          <DashboardProfile />
        </div>
      </div>
    </>
  );
};

export default index;
