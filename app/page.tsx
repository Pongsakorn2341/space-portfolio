import ExperienceTimeline from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        {/* <Projects /> */}
        <ExperienceTimeline />
      </div>
    </main>
  );
}
