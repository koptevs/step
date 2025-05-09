import React from 'react';
import Image from 'next/image';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

import Link from 'next/link';
import NavContent from './nav-content';
import { ModeToggle } from '@/components/mode-toggle';

const MobileNav = () => {
    return (
        <div className="ml-4 flex w-full items-center justify-end sm:hidden">
            <Sheet>
                <div className="flex w-full justify-between">
                    <ModeToggle />
                    {/* TODO remove if on sheet will close */}
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                </div>
                <SheetContent side="right" className="w-[300px]">
                    <SheetClose asChild>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2"
                        >
                            <Image
                                src="/assets/images/site-logo.png"
                                width={23}
                                height={23}
                                alt="Site Logo"
                            />
                            <div className="py-2 font-bold">
                                NEXT-
                                <span className="text-orange-600">TUV</span>
                            </div>
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
