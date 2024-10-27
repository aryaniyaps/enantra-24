"use client";
import { APP_NAME } from "@/utils/constants";
import { getGravatarUrl } from "@/utils/gravatar";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ChevronDown, LogOut } from "lucide-react";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";

export default function DashboardNavbar({ session }: { session: Session }) {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          {APP_NAME}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-8 sm:flex" justify="start">
        <NavbarItem>
          <Link color="foreground" href="/dashboard">
            My Tickets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/dashboard/purchase">
            Purchase
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="flex items-center gap-4 bg-transparent p-0 data-[hover=true]:bg-transparent"
                endContent={<ChevronDown className="h-4 w-4" />}
                radius="sm"
                variant="light"
              >
                <Avatar src={getGravatarUrl(session.user.email)} size="sm" />
                {session.user.email}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="logout"
              description="Logout from your account"
              startContent={<LogOut className="h-6 w-6" />}
              onClick={() => signOut({ redirect: true })}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
