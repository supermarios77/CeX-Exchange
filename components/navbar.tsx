"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ThemeSwitch } from "./ThemeSwitch";
import { siteConfig } from "@/config/site";
import { MountainIcon, MenuIcon } from "@/config/icons";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";

export function NavBar() {
  const { user, logout } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
  };

  return (
    <>
      <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          href="#"
        >
          <MountainIcon className="h-6 w-6" />
          <span className="">CeX Exchange</span>
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
          {isAuthenticated ? (
            <>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
              <Link href="/profile">
                <Button>Profile</Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => setIsLoginFormOpen(true)}
              >
                Login
              </Button>
              <Button>Sign Up</Button>
            </>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
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
                {isAuthenticated ? (
                  <>
                    <Button variant="outline" onClick={handleLogout}>
                      Logout
                    </Button>
                    <Link href="/profile">
                      <Button>Profile</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setIsLoginFormOpen(true)}
                    >
                      Login
                    </Button>
                    <Button>Sign Up</Button>
                  </>
                )}
              </div>
              <ThemeSwitch />
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <LoginForm
        isOpen={isLoginFormOpen}
        onClose={() => setIsLoginFormOpen(false)}
      />
    </>
  );
}
