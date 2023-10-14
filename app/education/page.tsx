import React from "react";
import WIPWrapper from "../modules/WIPWrapper";

const CURRENTPAGE = "Education";

const EducationPage = () => {
  return (
    <WIPWrapper currentPage={CURRENTPAGE}>
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
    </WIPWrapper>
  );
};

export default EducationPage;
