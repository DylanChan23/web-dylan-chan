import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div>
      {/* TEXT */}
      <div className="flex flex-col order-2 md:order-1">
        <p className="text-3xl text-tusker font-semibold uppercase">{title}</p>
        <p className="uppercase">{description}</p>
      </div>

      {/* IMAGE */}
      <Link
        href={link}
        className="group block overflow-hidden order-1 md:order-2 w-full md:w-125"
      >
        <div className="w-full aspect-2/1 bg-beige-custom/90 overflow-hidden transition-transform duration-700 ease-in-out group-hover:scale-95">
          {src ? (
            <Image
              src={src}
              alt={`${title} image`}
              width={800}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-115"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 uppercase text-sm">
              <Image
                src="/images/No-image.png"
                alt={`${title} image`}
                width={800}
                height={300}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-115"
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
