import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import AppNavbar from "./_components/landing/navbar";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <AppNavbar session={session} />
    </HydrateClient>
  );
}
