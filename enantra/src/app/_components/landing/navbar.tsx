import { APP_NAME, INSTAGRAM_URL, LINKEDIN_URL } from "@/utils/constants";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Instagram, Linkedin } from "lucide-react";
import type { Session } from "next-auth";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";

export default function AppNavbar({ session }: { session: Session | null }) {
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          {APP_NAME}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-8 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#sponsors" aria-current="page">
            Sponsors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#team">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={INSTAGRAM_URL} target="_blank">
            <Instagram className="h-6 w-6" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={LINKEDIN_URL} target="_blank">
            <Linkedin className="h-6 w-6" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {session ? (
          <NavbarItem>{session.user.email}</NavbarItem>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/api/auth/signin"
              variant="flat"
            >
              Sign In
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
