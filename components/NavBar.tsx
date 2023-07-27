"use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiGlobe } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

import { headerLink } from "@/constants";
import Image from "next/image";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="full-bleed">
      <div className="bg-gray-100 fixed z-50 w-full top-0">
        <div className="flex justify-between inside items-center text-sm font-Arial text-gray-600">
          <p className="text-xs md:text-sm">GOV.PH</p>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xs md:text-sm bg-transparent">
                  Accessibility Statement
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-10 bg-white">
                  <ul className="grid gap-3 py-2 px-4 md:w-[300px] lg:w-[300px] z-10 bg-white">
                    <Link href="/docs" title="Introduction">
                      Re-usable
                    </Link>
                    <Link href="/docs/installation" title="Installation">
                      How to
                    </Link>
                    <Link href="/docs/primitives/typography" title="Typography">
                      Styles
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Input
                      className="bg-transparent h-7 text-mainTextColor"
                      placeholder="Search"
                    />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex justify-between px-4 md:px-10  md:pt-4 items-center py-2 inside fixed z-50 bg-white top-10">
        <Link href="/">
          <Image
            priority
            src="/logo.png"
            alt="logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
        {/* Mobile Only */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger name="menu">
              <HiOutlineMenuAlt3 className="w-8 h-8" name="menu" />
            </SheetTrigger>
            <SheetContent className="pt-12 bg-primary">
              {headerLink.map((item) => (
                <div className="space-y-4">
                  <div
                    key={item.title}
                    className={`p-4 text-white uppercase ${
                      pathname === item.url &&
                      "font-bold underline underline-white underline-offset-2"
                    }`}
                  >
                    <Link href={item.url} legacyBehavior passHref className="">
                      <h2 className="uppercase">{item.title}</h2>
                    </Link>
                  </div>
                </div>
              ))}
            </SheetContent>
          </Sheet>
        </div>
        <div className="md:flex flex-col items-end hidden">
          <NavigationMenu className="z-1">
            <NavigationMenuList>
              <NavigationMenuItem className="space-x-4 flex text-primary text-lg">
                <Link
                  href="https://www.facebook.com"
                  legacyBehavior
                  passHref
                  target="_blank"
                >
                  <NavigationMenuLink>
                    <BsFacebook className="w-6 h-6"/>
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="https://www.twitter.com"
                  legacyBehavior
                  passHref
                  target="_blank"
                >
                  <NavigationMenuLink>
                    <AiFillTwitterCircle className="w-6 h-6"/>
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="https://www.instagram.com"
                  legacyBehavior
                  passHref
                  target="_blank"
                >
                  <NavigationMenuLink>
                    <AiFillInstagram className="w-6 h-6"/>
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="https://www.gmail.com"
                  legacyBehavior
                  passHref
                  target="_blank"
                >
                  <NavigationMenuLink>
                    <MdAlternateEmail className="w-6 h-6"/>
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="https://www.junowebservices.com"
                  legacyBehavior
                  passHref
                  target="_blank"
                >
                  <NavigationMenuLink>
                    <BiGlobe className="w-6 h-6"/>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="z-1 mt-4">
            <NavigationMenuList>
              <NavigationMenuItem className="space-x-10">
                {headerLink.map((item) => (
                  <Link
                    href={item.url}
                    legacyBehavior
                    passHref
                    key={item.title}
                  >
                    <NavigationMenuLink
                      className={
                        pathname === item.url
                          ? `text-primary hover:text-primary`
                          : `text-secondaryTextColor hover:text-primary hover:underline uppercase`
                      }
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
