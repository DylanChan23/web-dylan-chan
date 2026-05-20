import BrandVercelIcon from "@/components/icons/brand-vercel-icon";
import ExternalLinkIcon from "@/components/icons/external-link-icon";
import FlameIcon from "@/components/icons/flame-icon";
import GithubIcon from "@/components/icons/github-icon";
import LockIcon from "@/components/icons/lock-icon";
import PenIcon from "@/components/icons/pen-icon";
import RefreshIcon from "@/components/icons/refresh-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="w-screen h-full bg-linear-to-b from-black-custom from-30% to-black-custom/60 flex flex-col gap-40 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Image
          src="/images/byte-me-img.png"
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
            Byte Me is a full-stack inventory and dashboard system designed to
            explore production-grade architecture using modern web tooling. It
            features secure authentication, role-based access patterns, image
            uploads via Vercel Blob, and a modular monorepo structure built for
            scalability.
          </p>
          <p>
            Open the{" "}
            <a href="/a-la-cart" className="inline-flex items-center gap-1">
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
      <div className="side-margin">
        <h2>Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black-custom/60 text-beige-custom p-4 text-center">
            <CardTitle className="uppercase">Frontend</CardTitle>
            <CardContent className="flex gap-4 flex-wrap">
              <Button variant="outline">Next.js</Button>
              <Button variant="outline">React</Button>
              <Button variant="outline">TypeScript</Button>
              <Button variant="outline">Tailwind CSS</Button>
              <Button variant="outline">ShadCN/UI</Button>
            </CardContent>
          </Card>
          <Card className="bg-black-custom/60 text-beige-custom p-4 text-center">
            <CardTitle className="uppercase">Backend</CardTitle>
            <CardContent className="flex gap-4 flex-wrap">
              <Button variant="outline">Next.js API Routes</Button>
              <Button variant="outline">Better Auth</Button>
              <Button variant="outline">Drizzle ORM</Button>
              <Button variant="outline">PostgreSQL</Button>
              <Button variant="outline">Vercel Blob Storage</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="side-margin grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase">Tell me more about this project.</h2>
          <p>
            This project was built to simulate a real SaaS-style inventory
            platform with authentication, file uploads, and database-driven
            product management. The focus was on understanding how scalable
            full-stack systems are structured when multiple apps share a common
            design system, database layer, and auth logic in a monorepo
            environment.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Authentication with GitHub + Google using Better Auth (secure
              session handling)
            </CardTitle>
            <LockIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Product image storage migrated from local uploads to Vercel Blob
              (production-safe)
            </CardTitle>
            <BrandVercelIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Monorepo architecture with shared UI, DB, and auth packages
            </CardTitle>
            <RefreshIcon className="h-7 w-7 font-black text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              TurboRepo caching for optimized CI and incremental builds
            </CardTitle>
            <FlameIcon className="h-8 w-8 text-beige-custom" />
          </Card>
        </div>
      </div>
    </section>
  );
}
