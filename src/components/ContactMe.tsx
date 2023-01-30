import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ssgkashyap@outlook.com?subject=${formData.subject}&body=${formData.message} %0D%0A%0D%0ASincerely,%0D%0A${formData.name}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="mt-16 flex flex-col space-y-10 md:mt-0">
        <h4 className="md:text-4xl text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            {"Let's talk."}
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+44 7772 451177</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">ssgkashyap@outlook.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-2/3 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2">
            <input
              {...register("name")}
              placeholder="Full Name"
              className="contactInput w-full"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput hidden md:block"
              type="email"
              required
            />
          </div>

          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput md:hidden"
            type="email"
            required
          />

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
