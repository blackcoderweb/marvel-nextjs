"use client";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Characters", href: "/characters" },
    { name: "Series", href: "/series" },
    { name: "Comics", href: "/comics" },
    { name: "Events", href: "/events" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-xl">MY MARVEL APP</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="text-xl" key={`${item.name}-${index}`}>
            <Link
              className={
                pathname === item.href ? "text-orange-600" : "text-white"
              }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <p className="font-bold text-xl text-orange-600">BlackCoder</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="text-xl" key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className={
                pathname === item.href ? "text-orange-600" : "text-white"
              }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navigation;
