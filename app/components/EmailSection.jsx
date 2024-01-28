"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import TwitterIcon from "../../public/twitter-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("mqkrewng");
  if (state.succeeded) {
    return <p className='"text-xl font-bold text-white mx-15 my-2" justify-between text-center'>
    Your message was sent! Thank you <br />
    Please refresh the page to send another response.
    </p>;
};
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id='contact'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'>
        </div>
        <div>
        {/* <div className='z-10'> */}
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Networking is one of my favourite things to do! I appreciate every healthy interaction <br />
          Presently, I&apos;m looking for new opportunities, my inbox is
          open. Please do leave me a message and I&apos;ll
          try my best to get back to you shortly!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com/Wickeshhh">
                <Image src={GithubIcon} alt='Github Icon' />
            </Link>
            <Link href="https://www.linkedin.com/in/akhilesh-p-s-717332265/">
                <Image src={LinkedinIcon} alt='LinkedIn icon' />
            </Link>
            <Link href="https://twitter.com/ThatGuyAkhilesh">
                <Image src={TwitterIcon} alt='X icon' />
            </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label htmlFor="email"
                className='text-white block mb-2 text-sm font-medium'>
                    Your Email
                </label>
                <input
                name='email'
                type="email"
                id='email' required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='youremail@xyz.com'
                />
                <ValidationError
                prefix="email" 
                field="email"
                errors={state.errors}
                />
            </div>
            <div className='mb-6'>
                <label
                htmlFor="subject"
                className='text-white block mb-2 text-sm font-medium'>
                    Subject
                </label>
                <input
                name='subject'
                type="text"
                id='subject' required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Enter Subject'
                />
                <ValidationError
                prefix="subject" 
                field="subject"
                errors={state.errors}
                />
            </div>
            <div className="mb-6">
                <label 
                htmlFor="message"
                className='text-white block mb-2 text-sm font-medium'>
                    Message
                </label>
                <textarea
                name='message'
                id='message'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Enter your message or perhaps a Hi!'
                />
                <ValidationError
                prefix="message" 
                field="message"
                errors={state.errors}
                />
            </div>
            <button
            type='submit'
            className='bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                Send Message
            </button>
            {/* {
              emailSubmitted && (
                <p className='text-green-500 text-sm mt-2'>
                  Email sent successfully!
                </p>
              )
            } */}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
