"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
    SheetTrigger,
    SheetHeader,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import logo from "../../../public/logo.png";

const navItems = [
    { label: "Home", href: "/" },
    {
        label: "Solution",
        href: "/",
        subItems: [
            { label: "EGA™", href: "/ega" },
            { label: "EGOS™", href: "/ego" },
            { label: "Entrepreneur’s EDGE™", href: "/ee" },
            { label: "Business Stages of Growth", href: "/sog" },
        ],
    },
    {
        label: "Resources",
        href: "/",
        subItems: [
            { label: "TriMetrix HD", href: "/trimetrix" },
            { label: "Tools", href: "/tools" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Videos", href: "/videos" },
            { label: "Podcasts", href: "/podcasts" }
        ],
    },
    {
        label: "About us",
        href: "#",
        subItems: [
            { label: "Who We Are", href: "https://vrtmanagementgroup.com/who-we-are" },
            { label: "Our Purpose and Values", href: "/our-purpose-and-values" },
            { label: "Our Team", href: "https://vrtmanagementgroup.com/our-team-of-consultants/" },
        ],
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
];

const NavigationHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClasses = (isTrigger = false) =>
        cn(
            "xl:bg-transparent",
            isTrigger ? "" : navigationMenuTriggerStyle(),
            "hover:bg-transparent hover:text-black focus:bg-transparent focus:text-black",
            "data-[state=open]:bg-transparent"
        );

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 nav-font",
                isScrolled ? "shadow-md" : "shadow-sm"
            )}
            style={{ fontFamily: 'Lato, sans-serif' }}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="mx-auto flex h-[72px] max-w-[1280px] items-center px-6 lg:px-12 relative">
                {/* Logo on the left */}
                <Link href="/" className="shrink-0 absolute left-6 lg:left-12" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                    <Image
                        src={logo}
                        alt="VRT Logo"
                        width={100}
                        height={20}
                        priority
                    />
                </Link>

                {/* Navigation items in the center */}
                <NavigationMenu className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 text-lg font-normal" viewport={false}>
                    <NavigationMenuList className="space-x-8">
                        {navItems.map((item) =>
                            item.subItems ? (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuTrigger className={getLinkClasses(true)} >
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="nav-font font-normal" style={{ fontFamily: 'Lato, sans-serif' }}>
                                        <ul className="grid w-[240px] gap-2 p-3">
                                            {item.subItems.map((subItem) => (
                                                <ListItem
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    title={subItem.label}
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem key={item.label}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={getLinkClasses(true)}>
                                            {item.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        )}
                    </NavigationMenuList>
                </NavigationMenu>


                <div className="flex items-center xl:hidden absolute right-6 lg:right-12">
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-foreground hover:bg-accent"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-full sm:max-w-xs p-0 flex flex-col nav-font font-normal" style={{ fontFamily: 'Lato, sans-serif' }}>
                            <SheetHeader className="p-6 pb-2">
                                {/* <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                    <Image
                                        src={logo}
                                        alt="VRT Logo"
                                        width={154}
                                        height={24}
                                    />
                                </Link> */}
                            </SheetHeader>
                            <div className="flex-grow overflow-y-auto px-6">
                                <Accordion type="single" collapsible className="w-full">
                                    {navItems.map((item) =>
                                        item.subItems ? (
                                            <AccordionItem value={item.label} key={item.label} className="border-b">
                                                <AccordionTrigger className="py-4 hover:no-underline font-normal">
                                                    {item.label}
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-0">
                                                    <ul className="flex flex-col pt-2 pb-2 pl-4">
                                                        {item.subItems.map((subItem) => (
                                                            <li key={subItem.label}>
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="block py-3 hover:text-black text-md font-normal"
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                >
                                                                    {subItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ) : (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="flex w-full items-center border-b py-4 font-normal"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    )}
                                </Accordion>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

const ListItem = (({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none rounded-md px-3 py-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal",
                        className
                    )}
                    {...props}
                >
                    <div>{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default NavigationHeader;