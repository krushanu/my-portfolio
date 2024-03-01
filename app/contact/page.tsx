"use client";

import React from "react";
import WIPWrapper from "../modules/WIPWrapper";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
// import sendEmail from "../sendEmail";

const CURRENTPAGE = "ContactMe";

export interface EmailTemplateProps {
  name: string;
  email: string;
  number: number;
  message: string;
}

const ContactMePage = () => {
  const { register, handleSubmit } = useForm<EmailTemplateProps>();
  const router = useRouter();

  const submit: SubmitHandler<EmailTemplateProps> = async (data) => {
    try {
      const response = await axios.post("/api/send", { ...data });
      toast.success("email sent", { position: "top-center" });
      router.push("/thankyou");
    } catch (error) {
      console.log("error", error);
      toast.error("error");
    }
  };

  return (
    <WIPWrapper currentPage={CURRENTPAGE}>
      <section className="flex justify-center items-center lg:h-screen">
        <form
          onSubmit={handleSubmit(submit)}
          className="card w-96 bg-primary text-primary-content"
        >
          <div className="card-body">
            <h2 className="card-title">Contact Me</h2>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Email Id"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
            <input
              type="number"
              placeholder="Contact No."
              className="input input-bordered w-full max-w-xs"
              max="99999999999"
              {...register("number")}
            />
            <textarea
              className="textarea textarea-bordered h-40"
              placeholder="Message"
              {...register("message")}
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
