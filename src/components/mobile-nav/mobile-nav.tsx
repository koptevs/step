import React from 'react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

import { Link } from '@/i18n/navigation';
import NavContent from './nav-content';
import { ModeToggle } from '@/components/mode-toggle';
import LocaleSwitcher from '@/components/locale-switcher';

const MobileNav = () => {
    return (
        <div className="ml-4 flex w-full items-center justify-end sm:hidden">
            <Sheet>
                {/* add this */}
                <SheetTitle className="hidden"></SheetTitle>
                <SheetTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        <Menu />
                    </Button>
                </SheetTrigger>
                {/* </div> */}
                <SheetContent side="right" className="w-[300px]">
                    <SheetClose asChild>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2"
                        >
                            {/* <Image
                                src="/assets/images/site-logo.png"
                                width={23}
                                height={23}
                                alt="Site Logo"
                            /> */}
                            <div className="py-2 font-bold">
                                <span className="text-orange-600">S</span>TEP
                            </div>
                        </Link>
                    </SheetClose>
                    {/* <SheetClose asChild> */}
                    <NavContent />
                    <div className="mt-8 flex w-full flex-col items-center gap-2">
                        <LocaleSwitcher />
                    </div>
                    <div className="mt-4 flex w-full flex-col items-center gap-2">
                        <ModeToggle />
                    </div>
                    {/* </SheetClose> */}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
