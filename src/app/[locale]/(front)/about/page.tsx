import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default function AboutPage({ params }: Props) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);
    const t = useTranslations('AboutPage');
    return (
        <>
            <h1 className="text-2xl font-bold">{t('title')}</h1>
            {t.rich('description', {
                p: (chunks) => <p className="mt-4">{chunks}</p>,
                test: (chunks) => (
                    <span className="font-bold text-gray-600">{chunks}</span>
                ),
                code: (chunks) => <code className="font-bold">{chunks}</code>,
            })}
        </>
    );
}
