import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { lore } from "@/lib/fonts";
import { mangoGrotesque } from "@/lib/fonts";

export default function Home() {
  return (
    <section>
      <div className="w-full flex flex-col mt-20 py-20">
        <div className="flex flex-col items-center">
          <p className="text-3xl uppercase">Hey, I'm Dylan</p>
          <p
            className={`${mangoGrotesque.className} text-center text-[clamp(5rem,15vw,200rem)] text-red-600 font-bold uppercase`}
          >
            Frontend Developer
          </p>
          <p
            className={`${lore.className} text-beige-custom text-center text-[clamp(1rem,7vw,20rem)] -translate-y-30 -rotate-2`}
          >
            Gone creative mode !
          </p>
        </div>
      </div>
      <div className="bg-indigo-800 px-26 py-8">
        <h2
          className={`${mangoGrotesque.className} uppercase font-semibold text-4xl border-b-5 border-beige-custom`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
          <Card className="h-90">
            <Image
              src="/images/AlgonquinTimes-solo.png"
              alt="Algonquin Times App shown on a phone"
              width={800}
              height={600}
              className="aspect-video object-cover w-full"
            />
            <CardHeader>
              <CardTitle
                className={`${mangoGrotesque.className} uppercase text-3xl font-semibold`}
              >
                Algonquin Times News App
              </CardTitle>
              <CardAction>
                <Badge variant="secondary" className="bg-lime-600">
                  Shipped
                </Badge>
              </CardAction>
              <CardDescription className="text-black-custom">
                Design Lead for the Algonquin Times News, an award winning app
                recognized with 2nd place at the{" "}
                <a href="" className="text-red-600 uppercase">
                  Canadian Online Publishing Awards (COPA)
                </a>
                .
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-90">
            <Image
              src="/images/AlgonquinTimes-solo.png"
              alt="Algonquin Times App shown on a phone"
              width={800}
              height={600}
              className="aspect-video object-cover w-full"
            />
            <CardHeader>
              <CardTitle
                className={`${mangoGrotesque.className} uppercase text-3xl font-semibold`}
              >
                Bite Me
              </CardTitle>
              <CardAction>
                <Badge variant="secondary">In-progress</Badge>
              </CardAction>
              <CardDescription className="text-black-custom">
                Design Lead for the Algonquin Times News, an award winning app
                recognized with 2nd place at the.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-90">
            <Image
              src="/images/AlgonquinTimes-solo.png"
              alt="Algonquin Times App shown on a phone"
              width={800}
              height={600}
              className="aspect-video object-cover w-full"
            />
            <CardHeader>
              <CardTitle
                className={`${mangoGrotesque.className} uppercase text-3xl font-semibold`}
              >
                A La Cart
              </CardTitle>
              <CardAction>
                <Badge variant="secondary">In-progress</Badge>
              </CardAction>
              <CardDescription className="text-black-custom">
                Design Lead for the Algonquin Times News, an award winning app
                recognized with 2nd place at the.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
      </div>
    </section>
  );
}
