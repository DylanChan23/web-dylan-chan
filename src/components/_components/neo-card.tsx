"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NeoCardProps = {
  title: string;
  description: string;
  src?: string;
  link: string;
  variant?: "option1" | "option2";
};

export default function NeoCard({
  title,
  description,
  src,
  link,
  variant = "option1",
}: NeoCardProps) {
  const isReversed = variant === "option2";

  // Reduce motion
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const motionEnabled = !reduceMotion;
  const wrapperClass = motionEnabled
    ? "w-full aspect-2/1 bg-beige-custom/90 overflow-hidden transition-transform duration-700 ease-in-out group-hover:scale-95"
    : "w-full aspect-2/1 bg-beige-custom/90 overflow-hidden";
  const imageClass = motionEnabled
    ? "w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-115"
    : "w-full h-full object-cover";

  return (
    <article
      className={`flex md:items-center flex-col md:flex-row gap-6 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <div className="flex flex-col order-2 md:order-1">
        <h3 className="text-3xl text-tusker font-semibold uppercase">
          <span>{title}</span>
        </h3>
        <p className="uppercase">{description}</p>
      </div>

      {/* IMAGE */}
      <Link
        href={link}
        className="group block overflow-hidden order-1 md:order-2 w-full md:w-125"
        aria-label={`View project: ${title}`}
      >
        <div className={wrapperClass}>
          {src ? (
            <Image
              src={src}
              alt={
                src ? `${title} project preview` : `${title} placeholder image`
              }
              width={800}
              height={300}
              className={imageClass}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 uppercase text-sm">
              No image available
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
