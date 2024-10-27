import { getServerAuthSession } from "@/server/auth";
import { Button, Image, Link } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerAuthSession();
  if (session === null) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-6 py-10">
      {/* Illustration */}
      <Image
        src="/images/empty-tickets.svg" // Add an illustration asset here
        alt="No Tickets Illustration"
        className="h-64 w-64"
      />

      {/* Header text */}
      <h2 className="text-xl font-semibold">
        You haven't purchased any tickets yet!
      </h2>

      {/* Description */}
      <p className="text-foreground/65 max-w-md text-center">
        Looks like you haven't made any plans just yet. Explore our upcoming
        events and get your first ticket to start your journey.
      </p>

      {/* CTA Button */}
      <Button
        as={Link}
        color="primary"
        href="/dashboard/purchase"
        variant="shadow"
      >
        Purchase Tickets
      </Button>
    </div>
  );
}
