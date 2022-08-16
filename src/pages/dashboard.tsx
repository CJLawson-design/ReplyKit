import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import DashboardShell from "../components/dashboard/DashboardShell";

const Dashboard: NextPage = () => {
  return (
    <>
      <DashboardShell children={undefined} />
    </>
  );
};

export default Dashboard;
