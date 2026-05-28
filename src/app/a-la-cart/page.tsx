import BrandVercelIcon from "@/components/icons/brand-vercel-icon";
import CartIcon from "@/components/icons/cart-icon";
import ExternalLinkIcon from "@/components/icons/external-link-icon";
import GithubIcon from "@/components/icons/github-icon";
import LockIcon from "@/components/icons/lock-icon";
import RefreshIcon from "@/components/icons/refresh-icon";
import RocketIcon from "@/components/icons/rocket-icon";
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
          src="/images/a-la-cart-img.png"
          alt="A La Cart website screenshot"
          width={700}
          height={300}
          className="object-cover w-full h-full"
        />
        <div className="p-20 flex flex-col gap-8">
          <div className="w-full flex justify-between">
            <h1>A La Cart</h1>
            <Badge className="bg-orange-400/70">In-progress</Badge>
          </div>
          <p>
            A La Cart is a storefront-style web application built as the
            customer-facing companion to the Byte Me dashboard. It focuses on
            product browsing, cart-style interaction, and a clean
            e-commerce-inspired UI while sharing the same backend ecosystem.
          </p>
          <p>
            Open the{" "}
            <a href="/byte-me" className="inline-flex items-center gap-1">
              Byte Me dashboard <ExternalLinkIcon className="h-4! w-4!" />
            </a>{" "}
            project for the behind the scenes.
          </p>
          <div className="flex gap-8">
            <Link href="https://a-la-cart.dylanchan.dev" target="blank">
              <Button className="w-fit bg-beige-custom">
                <p>demo</p>
                <ExternalLinkIcon />
              </Button>
            </Link>
            <Link href="https://github.com/DylanChan23/Byte-Me" target="blank">
              <Button variant="secondary" className="w-fit">
                <p>GitHub</p>
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
              <Button variant="outline">Shared API (Byte Me backend)</Button>
              <Button variant="outline">PostgreSQL (Drizzle ORM)</Button>
              <Button variant="outline">Better Auth sessions</Button>
              <Button variant="outline">Vercel Blob Storage</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="side-margin grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase">Tell me more about this project.</h2>
          <p>
            This project explores the frontend experience of a product catalog
            system, focusing on UI/UX, performance, and user interaction flow.
            It acts as the public-facing layer of a larger system, designed to
            simulate how real-world SaaS platforms separate internal dashboards
            from customer-facing interfaces.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Customer-facing product catalog UI built for browsing and
              discovery
            </CardTitle>
            <RocketIcon className="h-6 w-6 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Shared backend with Byte Me dashboard (single source of product
              data)
            </CardTitle>
            <RefreshIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Optimized image delivery via Vercel Blob for fast storefront
              rendering
            </CardTitle>
            <BrandVercelIcon className="h-8 w-8 text-beige-custom" />
          </Card>
          <Card className="flex flex-row justify-between p-4 items-center bg-beige-custom/20">
            <CardTitle className="text-sm font-semibold text-beige-custom">
              Clean UI system designed for e-commerce-style interaction flow
            </CardTitle>
            <CartIcon className="h-8 w-8 text-beige-custom" />
          </Card>
        </div>
      </div>
    </div>
  );
}
