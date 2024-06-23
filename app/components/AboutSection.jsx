/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma, Framer</li>
        <li>Creative Cloud</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>HTML, CSS, JS</li>
        <li>Adobe Express, Canva</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>St. Bede's Academy Sr. Secondary School (2014 - 2021) <br />GRADE: 10th - 75.8 | 12th - 84.2</li>
        <li>SRM Institute Of Science & Technology, Ramapuram (2021 - 2025) <br />GRADE : 9.04</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NPTEL April 2024 - Compiler Design</li>
        <li>Fundamentals of UX Design - Google via Coursera</li>
        {/* <li>Add Course 1</li>
        <li>Add Course 1</li>
        <li>Add Course 1</li> */}
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Watching sports</li>
        <li>Travelling</li>
        <li>Drawing</li>
        <li>Outdoor games (Cricket, Badminton, Football etc)</li>
      </ul>
    ),
  },
  {
    title: "Spokenlanguages",
    id: "spoken-languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English</li>
        <li>Hindi</li>
        <li>Tamil</li>
        <li>Telugu</li>
        {/* <li>Malayalam</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/akhipic2cropped.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            About me <span className="text-white">and</span> what I do
          </h2>
          <p className="text-base lg:text-lg">
          {/* I'm an undergraduate, currently in my 3rd year at SRMIST Ramapuram, studying Information
            Technology. Over a year of experience in UI/UX; mostly through
            self-study. Prior to UI/UX, I indulged in Python
            Programming at an intermediate level and still do. <br />
            Designing has been my interest for over 2 years, and it has been
            about 1.5 years since I stepped into UX Design. <br />
            Presently, I am the Head of Design in my college club. I have
            designed for the club social media, web design. I also partake in Video Editing. <br />
            I'm also a Web3 Enthusiast! I actively participate in hackathons and
            conferences taking place looking to learn, network with people,
            gaining valuable insights from every trip. <br />
            Looking to connect? Active on all my mentioned socials! or drop a message below. */}
            I'm 21 years old.<br />
            Raised in New Delhi and Chennai and fluent in English, Hindi,
            Tamil and Telugu. <br />
            I enjoy sports, coffee and family time on
            holidays. I'm an active participant in summits, hackathons, meetups. <br />
            I've been designing for over 2 years.
            <br />
            I'm a T-shaped designer, inclining towards Interaction and Visual Design. I'm self taught, looking to
            always expand my knowledge and converting my insights to solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("spoken-languages")}
              active={tab === "spoken-languages"}
            >
              {" "}
              Spoken Languages{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;