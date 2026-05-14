import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { tusker } from "@/lib/fonts";
import { Button } from "../ui/button";
import Link from "next/link";

type MyCardProps = {
  title: string;
  description: string;
  status: "Shipped" | "In-progress" | "Locked";
  src?: string;
  link: string;
};

export default function MyCard({
  title,
  description,
  status,
  src,
  link,
}: MyCardProps) {
  const statusStyles = {
    Shipped: "bg-green-500",
    "In-progress": "bg-yellow-500",
    Locked: "bg-red-500",
  } as const;

  return (
    <Link href={link}>
      <Card className="group overflow-hidden pt-0">
        {src && (
          <div className="overflow-hidden">
            <Image
              src={src}
              alt={`${title} image`}
              width={800}
              height={600}
              className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-115"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className={`${tusker.className} font-semibold text-xl`}>
            {title}
          </CardTitle>
          <CardDescription className="text-black">
            {description}
          </CardDescription>
          <CardAction>
            <Badge className={statusStyles[status]}>{status}</Badge>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  );
}
