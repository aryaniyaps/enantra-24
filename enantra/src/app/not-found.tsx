import { Button, Image, Link } from "@nextui-org/react";

export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <Image
        src="/images/not-found.svg" // Add an illustration asset here
        alt="Not Found Illustration"
        className="h-64 w-64"
      />
      <h2 className="text-xl font-semibold">Page Not Found</h2>
      <h4 className="text-foreground/65 text-sm">
        Oops, we couldn&apos;t find that page!
      </h4>
      <Button as={Link} color="primary" href="/" variant="faded">
        Back to Home
      </Button>
    </div>
  );
}
