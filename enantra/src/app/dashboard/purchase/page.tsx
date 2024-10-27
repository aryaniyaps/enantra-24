import TicketCard from "@/app/_components/dashboard/purchase/ticket-card";

export default function DashboardPurchasePage() {
  return (
    <div className="flex w-full gap-4 py-6">
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
}
