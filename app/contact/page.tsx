"use client";

import React from "react";
import WIPWrapper from "../modules/WIPWrapper";

import toast from "react-hot-toast";
// import sendEmail from "../sendEmail";

const CURRENTPAGE = "ContactMe";

const ContactMePage = () => {
  const submit = () => {
    alert("Hey there! This feature is not active now.");
  };

  return (
    <WIPWrapper currentPage={CURRENTPAGE}>
      <section className="flex justify-center items-center lg:h-screen">
        <form
          // action={sendEmail}
          onSubmit={submit}
          className="card w-96 bg-primary text-primary-content"
        >
          <div className="card-body">
            <h2 className="card-title">Contact Me</h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email Id"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Contact No."
              name="number"
              className="input input-bordered w-full max-w-xs"
              max="99999999999"
            />
            <textarea
              className="textarea textarea-bordered h-40"
              placeholder="Message"
              name="message"
            ></textarea>
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-active btn-neutral">
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
    </WIPWrapper>
  );
};

export default ContactMePage;
