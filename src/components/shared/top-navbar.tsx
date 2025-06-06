'use client';

import * as React from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { cn } from '@/lib/utils';
// import { Icons } from "@/components/icons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/shared';
import { MobileNav } from '@/components/shared';
import { LocaleSwitcher } from '@/components/shared';

export function TopNavbar() {
    const pathname = usePathname();
    const t = useTranslations('Navigation');

    const components: { title: string; href: string; description: string }[] = [
        {
            title: t('components.alert-dialog.title'),
            href: '/docs/primitives/alert-dialog',
            description:
                'A modal dialog that interrupts the user with important content and expects a response.',
        },
        {
            title: 'Hover Card',
            href: '/docs/primitives/hover-card',
            description:
                'For sighted users to preview content available behind a link.',
        },
        {
            title: 'Progress',
            href: '/docs/primitives/progress',
            description:
                'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        },
        {
            title: 'Scroll-area',
            href: '/docs/primitives/scroll-area',
            description: 'Visually or semantically separates content.',
        },
        {
            title: 'Tabs',
            href: '/docs/primitives/tabs',
            description:
                'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        },
        {
            title: 'Tooltip',
            href: '/docs/primitives/tooltip',
            description:
                'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        },
    ];
    return (
        <nav className="container mx-auto flex h-[56px] justify-between px-2">
            {/* <div className="flex items-center">LOGO</div> */}
            <Link
                href="/"
                className="flex min-w-max items-center justify-center gap-2"
            >
                {/* <pre>{JSON.stringify(t, null, 4)}</pre> */}
                <Image
                    src="/globe.svg"
                    alt="Site Logo"
                    width={20}
                    height={20}
                />
                <div className="py-2 font-bold">
                    <span className="text-orange-600">S</span>TEP
                </div>
            </Link>
            <NavigationMenu className="max-sm:hidden">
                <NavigationMenuList>
                    {' '}
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            title={t('home.description')}
                            className={cn(navigationMenuTriggerStyle(), {
                                'font-bold underline': pathname === '/',
                            })}
                        >
                            <Link href="/" passHref>
                                {t('home.title')}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className={cn(navigationMenuTriggerStyle(), {
                                'font-bold': false,
                            })}
                        >
                            {t('services.title')}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                                            href="/"
                                        >
                                            {/* <Icons.logo className="h-6 w-6" /> */}
                                            <div className="flex h-full w-full items-center justify-center">
                                                <Image
                                                    className="dark:invert"
                                                    src="\globe.svg"
                                                    alt="Site Logo"
                                                    width={80}
                                                    height={80}
                                                    priority
                                                />
                                            </div>
                                            {t.rich('services.description', {
                                                div: (chunks) => (
                                                    <div className="mt-4 mb-2 text-center text-lg font-medium">
                                                        {chunks}
                                                    </div>
                                                ),
                                                p: (chunks) => (
                                                    <p className="text-muted-foreground text-sm leading-tight">
                                                        {chunks}
                                                    </p>
                                                ),
                                            })}
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    href="/docs"
                                    title={t('services.design.title')}
                                >
                                    Re-usable components built using Radix UI
                                    and Tailwind CSS.
                                </ListItem>
                                <ListItem
                                    href="/docs/installation"
                                    title={t('services.development.title')}
                                >
                                    How to install dependencies and structure
                                    your app.
                                </ListItem>
                                <ListItem
                                    href="/docs/primitives/typography"
                                    title={t('services.support.title')}
                                >
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            {t('components.title')}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/dashboard" passHref>
                                {t('dashboard.title')}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            title={t('about.description')}
                            className={cn(navigationMenuTriggerStyle(), {
                                'font-bold underline': pathname === '/about',
                            })}
                        >
                            <Link href="/about" passHref>
                                {t('about.title')}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div className="ml-8"></div>
                <LocaleSwitcher />
                <div className="ml-1"></div>
                <ModeToggle />
            </NavigationMenu>
            <MobileNav />
        </nav>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
