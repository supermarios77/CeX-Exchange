import Link from "next/link";
import { JSX, SVGProps, useReducer } from "react";

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

import { ThemeSwitch } from './ThemeSwitch';
import { siteConfig } from "@/config/site";

export function NavBar() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        href="#"
      >
        <MountainIcon className="h-6 w-6" />
        <span className="">UltronX Exchange</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {siteConfig.navItems.map((item) => (
          <Link
            className="font-medium hover:underline"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden items-center gap-2 md:flex">
        <ThemeSwitch />
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="md:hidden"
            size="icon"
            variant="outline"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            {siteConfig.navMenuItems.map((item) => (
              <Link
                className="font-medium hover:underline"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
            <ThemeSwitch />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
