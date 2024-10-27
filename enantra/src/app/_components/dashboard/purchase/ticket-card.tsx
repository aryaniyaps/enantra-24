import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function TicketCard() {
  return (
    <Card
      isFooterBlurred
      className="col-span-12 h-[300px] w-full sm:col-span-5"
    >
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="text-tiny font-bold uppercase text-white/60">
          Best Seller
        </p>
        <h4 className="text-2xl font-medium text-black">Ticket Name</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="border-t-1 absolute bottom-0 z-10 justify-between border-zinc-100/50 bg-white/30">
        <div>
          <p className="text-tiny text-black">Available soon.</p>
          <p className="text-tiny text-black">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  );
}
