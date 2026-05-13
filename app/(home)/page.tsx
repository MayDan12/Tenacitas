import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import OurSolution from "@/components/home/our-solution";
import WhoIsItFor from "@/components/home/whoisthisfor";

export default function Home() {
  return (
    // <>
    //   <Hero />
    //   <WhoIsItFor />
    //   <OurSolution />
    //   <Faq />
    // </>
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Site Under Maintenance</h1>
      <p>We’ll be back shortly.</p>
    </main>
  );
}
