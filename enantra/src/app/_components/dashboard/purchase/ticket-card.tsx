import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";

interface TicketCardProps {
  name: string;
  bestSeller?: boolean;
  price: string;
}

export default function TicketCard(props: TicketCardProps) {
  return (
    <Card
      isFooterBlurred
      className="col-span-12 h-[300px] w-full sm:col-span-5"
    >
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        {props.bestSeller && (
          <p className="text-tiny font-bold uppercase text-white/60">
            Best Seller
          </p>
        )}
        <h4 className="text-2xl font-medium">{props.name}</h4>
      </CardHeader>
      <CardFooter className="border-t-1 absolute bottom-0 z-10 justify-between border-zinc-100/50 bg-white/30">
        <p className="font-bold">{props.price}</p>
        <div className="flex items-center gap-2">
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            <Plus className="h-6 w-6" />
          </Button>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            <Minus className="h-6 w-6" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
