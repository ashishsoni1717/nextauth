"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const blogTestimonialsData = [
  {
    quote: "Travel is the only thing you buy that makes you richer.",
    name: "Wanderlust World",
    title: "Travel Blogger",
  },
  {
    quote: "Adventure awaits those who seek it.",
    name: "Nomadic Nomad",
    title: "Adventurer and Travel Writer",
  },
  {
    quote: "Life is short and the world is wide.",
    name: "Globetrotter Gal",
    title: "Travel Influencer",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8 z-10">
        Hear our Harmony: Voices of Joy
      </h2>
      <div className="flex justify-center w-full overflow-hidden text-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={blogTestimonialsData}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
