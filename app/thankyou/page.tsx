import Link from "next/link";
import React from "react";
import WIPWrapper from "../modules/WIPWrapper";

const CURRENTPAGE = "ThankYou";

const ThankYou = () => {
  return (
    <WIPWrapper currentPage={CURRENTPAGE}>
      <section className="flex justify-center items-center lg:h-screen">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Thank You</h2>
            <p>Thank you for your Message. We will connect with you soon.</p>
            <div className="card-actions justify-end">
              <Link href="/">
                <button className="btn btn-secondary">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </WIPWrapper>
  );
};

export default ThankYou;
