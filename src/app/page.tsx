import { tusker, lore } from "@/lib/fonts";
import NeoCard from "@/components/_components/neo-card";
import { Button } from "@/components/ui/button";
import SendIcon from "@/components/icons/send-icon";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full h-screen flex items-center justify-center bg-linear-to-b from-black-custom/0 from-50% to-black-custom/50">
        <div className="flex w-full flex-col items-center">
          <p
            className={`${tusker.className} text-center text-[clamp(5rem,15vw,20rem)] font-semibold text-beige-custom uppercase`}
          >
            Frontend Developer
          </p>
          <p
            className={`${lore.className} text-blue-800 text-center text-[clamp(1rem,4vw,6rem)] -translate-y-20 -rotate-2`}
          >
            Gone creative mode !
          </p>
        </div>
      </div>
      <div className="bg-linear-to-b from-black-custom/50 to-black-custom/90 h-100">
        <h2 className="uppercase">Hey, I'm Dylan</h2>
      </div>
      <div className="bg-linear-to-b from-black-custom/90 to-20% to-black-custom pt-32">
        <h2 className="text-migra text-lg border-b-4 border-beige-custom">
          Projects
        </h2>
        <div className="flex flex-col items-center pt-32 gap-32">
          <NeoCard title="Bite Me" description="Development" src="" link="/" />
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
      <div className="py-36 flex gap-8 items-center justify-center w-full bg-linear-to-b from-black-custom from-40% to-black-custom/90 ">
        <p className="text-migra text-lg">
          Like what you see? Let's work together ;)
        </p>
        <Button>
          <span>Say hi!</span>
          <SendIcon />
        </Button>
      </div>
      <div className="flex flex-row bg-linear-to-b from-black-custom/90 to-black-custom/50 py-8">
        <h2 className="max-w-80">
          New projects are kind of my favorite thing!
        </h2>
      </div>
    </section>
  );
}
