import ExternalLinkIcon from "@/components/icons/external-link-icon";
import GithubIcon from "@/components/icons/github-icon";
import LockIcon from "@/components/icons/lock-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BiteMe() {
  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Image
          src="/images/No-image.png"
          alt="placeholder image"
          width={700}
          height={300}
          className="object-cover w-full h-full min-h-60 pt-11.25 bg-black-custom"
        />
        <div className="p-20 flex flex-col gap-8 bg-black-custom">
          <div className="w-full flex justify-between">
            <h1 className="uppercase">Bite Me</h1>
            <Badge className="bg-orange-400">In-progress</Badge>
          </div>
          <p>
            A modern full-stack SaaS dashboard built with a scalable monorepo
            architecture using Next.js, TypeScript, TurboRepo, tRPC, and
            Tailwind CSS. Designed as both a product and a development
            foundation, the project focuses on reusable UI systems, real-time
            data flow, shared packages, and clean developer experience across
            multiple apps and services. Built with a strong emphasis on
            performance, maintainability, and modern frontend architecture.
          </p>
          <p>
            Open the{" "}
            <a href="" className="inline-flex items-center gap-1">
              A La Cart <ExternalLinkIcon className="h-4 w-4" />
            </a>{" "}
            project for the storefront side experience.
          </p>
          <div className="flex gap-8">
            <Link href="/">
              <Button className="w-fit bg-beige-custom">
                <p>demo</p>
                <ExternalLinkIcon />
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-fit" variant="secondary">
                <p>Github</p>
                <GithubIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="side-margin py-45 bg-linear-to-b from-black-custom to-black-custom/60">
        <h2 className="text-montreal font-normal text-lg pb-10">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3>Frontend</h3>
            <Button variant="outline">
              <p>Next.js</p>
            </Button>
            <Button variant="outline">
              <p>React</p>
            </Button>
            <Button variant="outline">
              <p>TypeScript</p>
            </Button>
            <Button variant="outline">
              <p>Tailwind CSS</p>
            </Button>
            <Button variant="outline">
              <p>ShadCN/UI</p>
            </Button>
          </div>
          <div>
            <h3>Backend</h3>
            <Button variant="outline">
              <p>Next.js</p>
            </Button>
            <Button variant="outline">
              <p>React</p>
            </Button>
            <Button variant="outline">
              <p>TypeScript</p>
            </Button>
            <Button variant="outline">
              <p>Tailwind CSS</p>
            </Button>
            <Button variant="outline">
              <p>ShadCN/UI</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="side-margin grid grid-cols-1 md:grid-cols-2 gap-12 bg-black-custom/60">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase">Tell me more about this project.</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              End-to-end type-safe APIs with tRPC
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Server state management with TanStack Query
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Server state management with TanStack Query
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Server state management with TanStack Query
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Server state management with TanStack Query
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
        </div>
      </div>
      <div className="side-margin bg-black-custom/60 py-45">
        <h2 className="uppercase">What did i learn?</h2>
      </div>
    </section>
  );
}
