import ExternalLinkIcon from "@/components/icons/external-link-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-linear-to-b from-black-custom from-30% to-black-custom/60 h-full w-screen flex flex-col gap-40 pb-20">
      <header className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Image
          src="/images/algonquin-times-img.png"
          alt="Algonquin Times News App image"
          width={700}
          height={300}
          className="object-cover w-full h-full"
        />
        <div className="p-20 flex flex-col gap-8">
          <div className="w-full flex justify-between">
            <h1>
              Algonquin Times News App{" "}
              <span className="text-lore text-lg">- Case Study</span>
            </h1>
            <Badge className="bg-lime-400/70">Live</Badge>
          </div>
          <p>
            The Algonquin Times News App is a mobile news experience designed to
            make campus journalism more accessible, modern, and engaging for
            students. The project focused on improving content discovery,
            readability, and navigation through a streamlined UX/UI approach
            tailored to mobile users.
          </p>
          <p>
            Recipient of <strong>2nd Place</strong> at the{" "}
            <a
              href="https://canadianonlinepublishingawards.com/2025/winners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              Canadian Online Publishing Awards 2025 (COPA)
              <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
            </a>{" "}
            for excellence in digital publishing and user experience.
          </p>
          <div className="flex gap-8">
            <a
              href="https://algonquintimes.com/download-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-fit bg-beige-custom">
                <p>download now</p>
                <ExternalLinkIcon />
              </Button>
            </a>
          </div>
        </div>
      </header>
      <section className="side-margin grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-black-custom/60 text-beige-custom p-4 text-center">
          <CardTitle className="uppercase">Focus Areas</CardTitle>
          <CardContent className="flex justify-center">
            <ul className="flex flex-wrap gap-3">
              <li className="bubble">UX/UI Design</li>
              <li className="bubble">Mobile Experience</li>
              <li className="bubble">Content Discovery</li>
              <li className="bubble">Accessibility</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-black-custom/60 text-beige-custom p-4 text-center">
          <CardTitle className="uppercase">Project Highlights</CardTitle>
          <CardContent className="flex justify-center">
            <ul className="flex flex-wrap gap-3">
              <li className="bubble">Award-winning Design</li>
              <li className="bubble">Campus Journalism</li>
              <li className="bubble">User-centered UX</li>
              <li className="bubble">Mobile-first Thinking</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <div className="side-margin text-center">
        <h2 className="text-muted-foreground">Case Study coming soon ...</h2>
      </div>
    </main>
  );
}
