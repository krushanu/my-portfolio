import React from "react";
import WorkInProgress from "../components/WorkInProgress";

const CURRENTPAGE = "Universe";

const UniversePage = () => {
  if (process.env.PAGEINPROGRESS?.includes(CURRENTPAGE))
    return <WorkInProgress />;

  return <div>UniversePage</div>;
};

export default UniversePage;
