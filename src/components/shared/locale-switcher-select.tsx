'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { routing } from '@/i18n/routing';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export function LocaleSwitcherSelect({ defaultValue, label }: Props) {
    const router = useRouter();

    const pathname = usePathname();
    const params = useParams();

    console.log(params);

    function onSelectChange(nextLocale: string) {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: nextLocale },
        );
    }

    return (
        <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
            <SelectTrigger
                className="h-8 w-[80px] border-none bg-transparent focus:ring-0 focus:ring-offset-0"
                aria-label={label}
            >
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {routing.locales.map((locale) => (
                    <SelectItem key={locale} value={locale}>
                        {locale.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
