import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import Navbar from "../_components/dashboard/navbar";

export default async function DashboardPage() {
  const session = await getServerAuthSession();
  if (session === null) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="bg-hero-texture flex min-h-dvh flex-col">
      <Navbar session={session} />
    </main>
  );
}
