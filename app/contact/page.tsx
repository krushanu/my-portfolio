import React from "react";
import WIPWrapper from "../modules/WIPWrapper";

const CURRENTPAGE = "ContactMe";

const ContactMePage = () => {
  return (
    <WIPWrapper currentPage={CURRENTPAGE}>
      <section>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </WIPWrapper>
  );
};

export default ContactMePage;
