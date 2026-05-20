import ExternalLinkIcon from "@/components/icons/external-link-icon";
import GithubIcon from "@/components/icons/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-linear-to-b from-black-custom from-30% to-black-custom/60 h-full w-screen flex flex-col gap-40 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Image
          src="/images/algonquin-times-img.png"
          alt="A La Cart image"
          width={700}
          height={300}
          className="object-cover w-full h-full"
        />
        <div className="p-20 flex flex-col gap-8">
          <div className="w-full flex justify-between">
            <h1>Algonquin Times News App</h1>
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
              className="inline-flex items-center gap-1"
            >
              Canadian Online Publishing Awards 2025 (COPA)
              <ExternalLinkIcon className="h-4 w-4" />
            </a>{" "}
            for excellence in digital publishing and user experience.
          </p>
          <div className="flex gap-8">
            <Link
              href="https://algonquintimes.com/download-app/"
              target="blank"
            >
              <Button className="w-fit bg-beige-custom">
                <p>download now</p>
                <ExternalLinkIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="side-margin grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-black-custom/60 text-beige-custom p-4 text-center">
          <CardTitle className="uppercase">Focus Areas</CardTitle>
          <CardContent className="flex gap-4 flex-wrap">
            <Button variant="outline">UX/UI Design</Button>
            <Button variant="outline">Mobile Experience</Button>
            <Button variant="outline">Content Discovery</Button>
            <Button variant="outline">Accessibility</Button>
          </CardContent>
        </Card>
        <Card className="bg-black-custom/60 text-beige-custom p-4 text-center">
          <CardTitle className="uppercase">Project Highlights</CardTitle>
          <CardContent className="flex gap-4 flex-wrap">
            <Button variant="outline">Award-winning Design</Button>
            <Button variant="outline">Campus Journalism</Button>
            <Button variant="outline">User-centered UX</Button>
            <Button variant="outline">Mobile-first Thinking</Button>
          </CardContent>
        </Card>
      </div>
      <div className="side-margin text-center">
        <h2 className="text-muted-foreground">Case Study coming soon ...</h2>
      </div>
    </div>
  );
}
