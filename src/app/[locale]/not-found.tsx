// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Page Not Found',
};

export default function NotFound() {
    const t = useTranslations('NotFoundPage');
    return (
        <div className="flex h-dvh flex-col items-center justify-center">
            <h2>
                <b>/[locale]/not-found.tsx: </b>
                {t('title')}
            </h2>
            <p>{t('description')}</p>
            <Link className="text-indigo-700 hover:underline" href="/">
                Return Home
            </Link>
        </div>
    );
}
