import type { Metadata } from 'next';
import '@/styles/globals.css';
import { inter, geistSans, geistMono, notoSansRegular } from '@/fonts/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
// import { AuthProvider } from '@/providers/auth-provider';

export const metadata: Metadata = {
    title: {
        template: `%s | STEP App`,
        default: 'STEP App',
    },
    description: 'Simple STEP App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <AuthProvider>
        <html lang="en" suppressHydrationWarning>
            {/* <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}> */}
            <body className={cn('font-inter antialiased', notoSansRegular.variable, geistSans.variable, geistMono.variable, inter.variable)}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
        // </AuthProvider>
    );
}
