import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import Hero from "./_components/landing/hero";
import Navbar from "./_components/landing/navbar";
import Sponsors from "./_components/landing/sponsors";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <main className="bg-hero-texture flex h-full w-full flex-col">
        <Navbar session={session} />
        <Hero />
        <Sponsors />
      </main>
    </HydrateClient>
  );
}
