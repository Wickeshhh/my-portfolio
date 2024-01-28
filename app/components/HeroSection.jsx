"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-400">
              Hello! I&apos;m{" Akhilesh"}
            </span>
            <br></br>
            An Aspiring <br></br>
            <TypeAnimation
              sequence={[
                " UI/UX Designer",
                1000,
                " UX Developer",
                1000,
                " Web Designer",
                1000,
                " Web3 Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="inline-block text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            UI/UX, XD, Web3 | Chennai, India | Pre-final year undergrad @ SRM
          </p>
          <div>
          <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full font-semibold sm:w-fit rounded-full mr-4 bg-gradient-to-r from-green-500 via to bg-green-600 hover:bg-green text-black"
            >
              Let&apos;s Connect
            </Link>
            <Link
              href="resume.pdf" passHref target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-green-500 mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-semibold">
                My Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/akhipiccropped.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
