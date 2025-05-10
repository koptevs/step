import { Geist, Geist_Mono, Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'cyrillic'],
});

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const notoSansRegular = localFont({
    src: './local/Noto-Sans-regular.woff',
    variable: '--font-noto-sans-regular',

    // weight: "100 900",
});

// in any file:
// import { lusitana } from '@/app/ui/fonts';
// <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`} >
