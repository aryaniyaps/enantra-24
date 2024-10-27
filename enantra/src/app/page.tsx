import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import Footer from "./_components/landing/footer";
import Hero from "./_components/landing/hero";
import Navbar from "./_components/landing/navbar";
import Sponsors from "./_components/landing/sponsors";
import Testimonials from "./_components/landing/testimonials";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <main className="bg-hero-glamorous-light dark:bg-hero-glamorous-dark flex h-full w-full flex-col">
        <Navbar session={session} />
        <Hero />
        <Sponsors />
        <Testimonials />
        <Footer />
      </main>
    </HydrateClient>
  );
}
