import { tusker, lore } from "@/lib/fonts";
import NeoCard from "@/components/_components/neo-card";
import { Button } from "@/components/ui/button";
import SendIcon from "@/components/icons/send-icon";
import Footer from "@/components/_components/footer";

export default function Home() {
  return (
    <main id="main-content" className="w-screen h-fit">
      <div className="bg-linear-to-b from-black-custom/0 from-10% via-black-custom/90 to-black-custom/0">
        {/* Hero */}
        <header className="w-full h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="sr-only">Dylan Chan's Portfolio</h1>
            <span
              className={`${tusker.className} text-center text-[clamp(5rem,7vw,10rem)] font-semibold text-beige-custom uppercase`}
            >
              Frontend Developer
            </span>
            <span
              className={`${lore.className} -mt-2 text-center text-[clamp(2rem,3vw,4rem)] -rotate-4`}
            >
              Gone creative mode !
            </span>
          </div>
        </header>
        {/* About Me */}
        <section
          className="gap-8 grid grid-cols-1 sm:grid-cols-2 items-stretch side-margin"
          aria-labelledby="about-title"
        >
          <div className="flex flex-col gap-8">
            <h2 id="about-title" className="uppercase">
              Hey, I&apos;m Dylan
            </h2>
            <p>
              I’m a frontend developer who loves blending clean development with
              bold, creative visuals.
            </p>
            <p className="">
              I build interactive web experiences that feel modern, playful, and
              full of personality. Whether it’s UI design, animation, or
              responsive development, I enjoy turning ideas into something
              people can actually feel when they use it.
            </p>
          </div>
        </section>
        {/* Projects */}
        <section
          id="projects"
          className=" py-60 side-margin bg-linear-to-b from-black-custom/0 via-black-custom/90 to-black-custom/0"
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title">Projects</h2>
          <div className="flex flex-col items-center pt-20 gap-32">
            <NeoCard
              title="Byte Me"
              description="Development"
              src="/images/byte-me-img.png"
              link="/byte-me"
            />
            <NeoCard
              title="A La Cart"
              description="Development"
              src="/images/a-la-cart-img.png"
              link="/a-la-cart"
              variant="option2"
            />
            <NeoCard
              title="Algonquin Times News"
              description="UX/UI Design"
              src="/images/AlgonquinTimes-solo.png"
              link="/algonquin-times"
            />
          </div>
        </section>
        {/* Skills */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-50 items-start side-margin"
          aria-labelledby="skills-title"
        >
          <div className="space-y-4">
            <h2 id="skills-title" className="max-w-prose">
              Skills
            </h2>
            <p className="max-w-prose text-xl">
              New projects are kind of my favorite thing — let’s make it happen!
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-sm uppercase max-w-prose">
              I enjoy working across frontend, design systems, and interactive
              experiences.
            </p>
            <ul className="flex flex-wrap gap-3">
              <li className="bubble">Adobe Illustrator</li>
              <li className="bubble">ARIA</li>
              <li className="bubble">Bilingual (EN/FR)</li>
              <li className="bubble">CSS</li>
              <li className="bubble">Design systems</li>
              <li className="bubble">Figma</li>
              <li className="bubble">Git</li>
              <li className="bubble">HTML5</li>
              <li className="bubble">Javascript</li>
              <li className="bubble">Next.js</li>
              <li className="bubble">React</li>
              <li className="bubble">Semantic HTML</li>
              <li className="bubble">SVN</li>
              <li className="bubble">Tailwind CSS</li>
              <li className="bubble">TypeScript</li>
              <li className="bubble">UI design</li>
              <li className="bubble">Usability testing</li>
              <li className="bubble">UX principles</li>
              <li className="bubble">WCAG</li>
            </ul>
          </div>
        </section>
        {/* Contact */}
        <section
          className="pb-40 flex flex-col gap-4 items-center justify-center w-full side-margin"
          aria-labelledby="contact-title"
        >
          <span id="contact-title" className="text-lore text-lg">
            Lets work together!
          </span>
          <a href="mailto:dylanchan23@gmail.com">
            <Button>
              <span>Say hi!</span>
              <SendIcon />
            </Button>
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
