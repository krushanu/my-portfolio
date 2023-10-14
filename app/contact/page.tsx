import React from "react";
import WorkInProgress from "../components/WorkInProgress";

const ContactMePage = () => {
  console.log("PAGEINPROGRESS", process.env.PAGEINPROGRESS);
  if (process.env.PAGEINPROGRESS?.includes("ContactMe"))
    return <WorkInProgress />;
  return <div>Contact Me</div>;
};

export default ContactMePage;
