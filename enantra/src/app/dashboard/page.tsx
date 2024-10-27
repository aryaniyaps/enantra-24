import { getServerAuthSession } from "@/server/auth";

export default async function DashboardPage() {
  const session = await getServerAuthSession();
  return <div className="h-full w-full">dashboard</div>;
}
