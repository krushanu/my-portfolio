import React from "react";
import WorkInProgress from "../components/WorkInProgress";

interface WIPWrapperProps {
  children: React.ReactNode;
  currentPage: string;
}

const WIPWrapper = ({ currentPage, children }: WIPWrapperProps) => {
  if (currentPage && process.env.PAGEINPROGRESS?.includes(currentPage))
    return <WorkInProgress />;
  return <>{children}</>;
};

export default WIPWrapper;
