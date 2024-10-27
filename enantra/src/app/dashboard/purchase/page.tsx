import TicketCard from "@/app/_components/dashboard/purchase/ticket-card";

export default function DashboardPurchasePage() {
  return (
    <div className="flex w-full flex-col gap-4 py-6">
      <TicketCard name="Ticket #1" />
      <TicketCard name="Ticket #2" bestSeller />
    </div>
  );
}
