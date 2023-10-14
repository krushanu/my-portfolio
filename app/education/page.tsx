import React from "react";
import WorkInProgress from "../components/WorkInProgress";

const CURRENTPAGE = "Education";

const EducationPage = () => {
  if (process.env.PAGEINPROGRESS?.includes(CURRENTPAGE))
    return <WorkInProgress />;

  return (
    <div>
      <h1>Education Page</h1>
      <p>
        {`
        
        Education
This page contains my Educational Details

B'Tech (Electronics & Communication Engg.)
College: Institute of Technical Education and Research
University: Siksha O Anusandhan university
Place: Bhubaneswar, Odisha
Country: India
Link: https://www.soa.ac.in/iter



↑Back to Top

        `}
      </p>
    </div>
  );
};

export default EducationPage;
