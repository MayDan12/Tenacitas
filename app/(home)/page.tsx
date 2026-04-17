import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import OurSolution from "@/components/home/our-solution";
import WhoIsItFor from "@/components/home/whoisthisfor";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIsItFor />
      <OurSolution />
      <Faq />
    </>
  );
}
