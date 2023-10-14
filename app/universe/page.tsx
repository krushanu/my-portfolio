import React from "react";
import WorkInProgress from "../components/WorkInProgress";

const CURRENTPAGE = "Universe";

const UniversePage = () => {
  console.log("PAGEINPROGRESS", process.env.PAGEINPROGRESS);
  if (process.env.PAGEINPROGRESS?.includes(CURRENTPAGE))
    return <WorkInProgress />;

  return <div>UniversePage</div>;
};

export default UniversePage;
