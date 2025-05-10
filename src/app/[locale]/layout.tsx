import { ThemeProvider } from '@/providers/theme-provider';
import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { inter, geistSans, geistMono, notoSansRegular } from '@/fonts/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
    const { locale } = await props.params;

    const t = await getTranslations({ locale, namespace: 'RootLayoutMeta' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<Props>) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        // <AuthProvider>
        // </AuthProvider>
        <html lang={locale} suppressHydrationWarning>
            {/* <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}> */}
            <body
                className={cn(
                    inter.className,
                    'text-[15px] antialiased',
                    notoSansRegular.variable,
                    geistSans.variable,
                    geistMono.variable,
                    inter.variable,
                )}
            >
                <NextIntlClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
