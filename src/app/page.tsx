import { tusker, lore } from "@/lib/fonts";
import NeoCard from "@/components/_components/neo-card";
import { Button } from "@/components/ui/button";
import SendIcon from "@/components/icons/send-icon";
import Footer from "@/components/_components/footer";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      {/* Hero */}
      <div className="w-full h-screen flex items-center justify-center bg-linear-to-b from-black-custom/0 from-50% to-black-custom/50">
        <div className="flex flex-col items-center">
          <p
            className={`${tusker.className} text-center text-[clamp(5rem,15vw,20rem)] font-semibold text-beige-custom uppercase`}
          >
            Frontend Developer
          </p>
          <p
            className={`${lore.className} -mt-2 text-center text-[clamp(1rem,4vw,6rem)] -rotate-4`}
          >
            Gone creative mode !
          </p>
        </div>
      </div>
      {/* About Me */}
      <div className="bg-linear-to-b from-black-custom/50 to-black-custom/90 gap-8 grid grid-cols-1 sm:grid-cols-2 items-stretch side-margin">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase">Hey, I'm Dylan</h2>
          <p className="uppercase">
            I’m a frontend developer who loves blending clean development with
            bold, creative visuals.
          </p>
          <p className="">
            I build interactive web experiences that feel modern, playful, and
            full of personality. Whether it’s UI design, animation, or
            responsive development, I enjoy turning ideas into something people
            can actually feel when they use it.
          </p>
        </div>
        <div className="bg-beige-custom/20 min-h-64 sm:min-h-full"></div>
      </div>
      {/* Projects */}
      <div className=" bg-black-custom/90  pt-80 side-margin">
        <h2 className="text-migra text-lg">Projects</h2>
        <div className="flex flex-col items-center pt-20 gap-32">
          <NeoCard
            title="Bite Me"
            description="Development"
            src=""
            link="/bite-me"
          />
          <NeoCard
            title="A La Cart"
            description="Development"
            src=""
            link="/"
            variant="option2"
          />
          <NeoCard
            title="Algonquin Times News"
            description="UX/UI Design"
            src="/images/AlgonquinTimes-solo.png"
            link="/"
          />
        </div>
      </div>
      {/* Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 bg-linear-to-b from-black-custom/90 from-40% to-black-custom/40 pt-80 pb-50 items-start side-margin">
        <div className="space-y-4">
          <h2 className="max-w-prose">
            New projects are kind of my favorite thing — let’s make it happen!
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-sm uppercase max-w-prose">
            I enjoy working across frontend, design systems, and interactive
            experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="whitespace-nowrap">
              Accessibility (WCAG)
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              CSS
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              Figma
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              Git
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              GitHub
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              HTML5
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              JavaScript
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              Next.js
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              React
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              React Native
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              REST APIs
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              Responsive Design
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              Tailwind CSS
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              TypeScript
            </Button>
            <Button variant="outline" className="whitespace-nowrap">
              Vercel
            </Button>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="pb-40 flex gap-8 items-center justify-center w-full bg-linear-to-b from-black-custom/40 to-black-custom/0 side-margin">
        <p className="text-migra text-lg">Lets work together!</p>
        <Button>
          <span>Say hi!</span>
          <SendIcon />
        </Button>
      </div>
      <Footer />
    </section>
  );
}
