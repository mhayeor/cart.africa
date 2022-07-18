import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import './Dashboard.css'
import FooterNav from "components/FooterNav/FooterNav";
import Header from "components/Header/Header";
import Orders from "./Orders";
import Order from "./Order";
import AccountIndex from "./Account/Index";
import useToken from "services/useToken";

const Dashboard = () => {
  const { page, subpage } = useParams();
  const { token, setToken } = useToken();

  
  
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col h-screen lg:w-3/4 mx-auto">
      <Header page={page} />
      <main className="flex-1 overflow-y-auto">
        {page === "orders" && <Orders order={subpage} />}
        {page === "account" && <AccountIndex page={subpage} />}
      </main>
      <FooterNav page={page} />
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
