import React from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardProfile from "../../components/DashboardProfile";

const index = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row ">
        {/**Sidebar */}
        <div>
          <DashboardSidebar />
        </div>
        {/**Profile */}
        <div>
          <DashboardProfile />
        </div>
      </div>
    </>
  );
};

export default index;
