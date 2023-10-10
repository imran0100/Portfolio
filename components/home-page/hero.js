import Link from "next/link";
import React from "react";
import FeaturedPosts from "./featured-post";
import classes from "./hero.module.css";
import Button from "./ui/button";

const Hero = () => {
  return (
    <>
      <section className="mt-16">
        <h1 className="text-5xl sm:text-7xl font-bold">
          Hi, I&apos;m <span className="dark:text-purple-600">Imran</span>
        </h1>
        <h3 className="text-4xl my-3">Frontend Developer</h3>
        <p className="dark:text-gray-300 mb-8">
          {`I hold a Bachelor's degree in Computer Science and possess a strong aptitude for creativity and problem-solving. With a background in React, Node.js, and Webflow, I bring a diverse skill set to the world of web development. With ${
            new Date().getFullYear() - 2020
          } years of experience in front-end development, I specialize in crafting dynamic and user-friendly web applications. I am well-versed in modern technologies, including the MERN stack, and I have a proven track record of delivering top-notch, responsive web solutions that consistently surpass client expectations. My expertise revolves around the JavaScript ecosystem. Welcome to my corner of the internet, where I share insights on various tech industry topics and lifestyle interests.`}
        </p>
        <Link href={"/about"}>
          <Button className="bg-purple-600 text-white px-6">About me!</Button>
        </Link>
      </section>
    </>
  );
};

export default Hero;
