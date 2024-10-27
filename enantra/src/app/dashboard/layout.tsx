import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import DashboardNavbar from "../_components/dashboard/navbar";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();
  if (session === null) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="bg-hero-texture flex h-full w-full flex-col">
      <DashboardNavbar session={session} />
      <div className="mx-auto flex h-full w-full max-w-5xl gap-4 px-6">
        {children}
      </div>
    </main>
  );
}
