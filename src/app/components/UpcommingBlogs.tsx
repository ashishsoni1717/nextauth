"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcommingBlogs = () => {
  const featuredWebinars = [
    {
      title: "Historical Journey through Rome",
      description:
        "Step back in time and explore the historical wonders of Rome. Visit the Colosseum, the Roman Forum, and the Vatican on this fascinating tour.",
      slug: "historical-journey-rome",
      isFeatured: true,
    },
    {
      title: "Beach Paradise in Bali",
      description:
        "Relax and unwind on the stunning beaches of Bali. Enjoy luxurious accommodations, crystal clear waters, and vibrant nightlife on this tropical getaway.",
      slug: "beach-paradise-bali",
      isFeatured: true,
    },
    {
      title: "Safari Adventure in Kenya",
      description:
        "Experience the thrill of a lifetime with our safari adventure in Kenya. Witness the Big Five in their natural habitat and immerse yourself in the vibrant culture of East Africa.",
      slug: "safari-adventure-kenya",
      isFeatured: true,
    },
    {
      title: "Exploring the Alps",
      description:
        "Join us on an unforgettable journey through the breathtaking landscapes of the Alps. Discover picturesque villages, majestic mountains, and serene lakes.",
      slug: "exploring-the-alps",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Cultural Tour of Japan",
      description:
        "Discover the rich history and culture of Japan on this comprehensive tour. Visit ancient temples, bustling markets, and enjoy traditional Japanese cuisine.",
      slug: "cultural-tour-japan",
      isFeatured: true,
    },
    {
      title: "Beach Paradise in Bali",
      description:
        "Relax and unwind on the stunning beaches of Bali. Enjoy luxurious accommodations, crystal clear waters, and vibrant nightlife on this tropical getaway.",
      slug: "beach-paradise-bali",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED BLOGS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/blogCategory"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcommingBlogs;
