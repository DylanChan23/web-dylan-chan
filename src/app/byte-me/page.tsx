import ExternalLinkIcon from "@/components/icons/external-link-icon";
import GithubIcon from "@/components/icons/github-icon";
import LockIcon from "@/components/icons/lock-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ByteMe() {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-black-custom from-30% to-black-custom/60 flex flex-col gap-40 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Image
          src="/images/No-image.png"
          alt="placeholder image"
          width={700}
          height={300}
          className="object-cover w-full h-full min-h-60 pt-11.25 "
        />
        <div className="p-20 flex flex-col gap-8 ">
          <div className="w-full flex justify-between">
            <h1 className="uppercase">Byte Me</h1>
            <Badge className="bg-orange-400/70">In-progress</Badge>
          </div>
          <p>
            Byte-Me is a full-stack inventory and dashboard application built
            with Next.js and a Turborepo monorepo. It features secure
            authentication, a modern UI system, and a scalable backend
            architecture designed for real-world SaaS-style applications.
          </p>
          <p>
            Open the{" "}
            <a href="" className="inline-flex items-center gap-1">
              A La Cart <ExternalLinkIcon className="h-4 w-4" />
            </a>{" "}
            project for the storefront side experience.
          </p>
          <div className="flex gap-8">
            <Link href="https://byte-me.dylanchan.dev" target="blank">
              <Button className="w-fit bg-beige-custom">
                <p>demo</p>
                <ExternalLinkIcon />
              </Button>
            </Link>
            <Link href="https://github.com/DylanChan23/Byte-Me" target="blank">
              <Button className="w-fit" variant="secondary">
                <p>Github</p>
                <GithubIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="side-margin ">
        <h2 className="text-montreal font-normal text-lg pb-10">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3>Frontend</h3>
            <div className="flex gap-4">
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
          <div>
            <h3>Backend</h3>
            <div className="flex gap-4">
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
      </div>
      <div className="side-margin grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase">Tell me more about this project.</h2>
          <p>
            This project was built to explore production-grade full-stack
            development with modern tooling and authentication flows. It
            demonstrates how a modular monorepo can support scalable web apps
            with shared packages and clean architecture.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Full-stack Next.js 16 app
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Monorepo using Turborepo + pnpm
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Authentication with GitHub + Google (Better Auth)
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              PostgreSQL database via Drizzle ORM
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Deployed on Vercel with environment-based config
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
        </div>
      </div>
    </section>
  );
}
