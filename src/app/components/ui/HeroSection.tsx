import Link from "next/link";
import React from "react";
import { Spotlight } from "./Spotlight";
import { Button } from "../ui/moving-border";

const HeroSection = () => {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex
    flex-col items-center justify-center relative overflow-hidden  mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl
        font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-400"
        >
          Lets Explore with Ashish Blog
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-700 max-w-lg mx-auto">
          What started out as a little travel blog to keep friends and family
          up-to-date on our around the world trip has grown into something much
          bigger. This unexpected journey has been a life changing experience,
          not only for me, but also for Tim, Tyler, and Kara. If you have dreams
          of starting your own travel blog, or you just want to learn more about
          our story, fix yourself a cup of coffee (or a glass of wine 😊), sit
          back, and enjoy.
        </p>
        <div className="mt-4">
          <Link href={"/blogCategory"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 
              dark:border-slate-800"
            >
              Explore Blogs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
