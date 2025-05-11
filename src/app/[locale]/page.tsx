import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { TopNavbar } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Home',
};

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default function Home({ params }: Props) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('HomePage');
    return (
        <>
            {/* <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20"> */}
            <TopNavbar />
            <main className="container mx-auto px-2 font-[family-name:var(--font-inter)]">
                <h1 className="text-2xl font-bold">{t('title')}</h1>
                {t.rich('description', {
                    p: (chunks) => <p className="mt-4">{chunks}</p>,
                    test: (chunks) => (
                        <span className="font-bold text-red-800">{chunks}</span>
                    ),
                    code: (chunks) => (
                        <code className="font-bold">{chunks}</code>
                    ),
                })}
                <Button className="bg-indigo-800 font-bold">
                    <Image
                        className="dark:invert"
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                    />
                    <span className="mt-1">TEST</span>
                </Button>
            </main>
        </>
    );
}
