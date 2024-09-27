import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollingText from "./components/ScrollingText";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollingText />
      </main>
    </>
  );
}
