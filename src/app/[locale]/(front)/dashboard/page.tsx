import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default function DashboardPage({ params }: Props) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale);
    const t = useTranslations('HomePage');
    return (
        <div>
            <h1>{t('title')}</h1>
            <div className="max-w-[590px]">
                {t.rich('description', {
                    p: (chunks) => (
                        <p className="mt-4 text-orange-700">{chunks}</p>
                    ),
                    test: (chunks) => (
                        <span className="font-bold text-green-600">
                            {chunks}
                        </span>
                    ),
                    code: (chunks) => (
                        <code className="font-bold">{chunks}</code>
                    ),
                })}
            </div>
        </div>
    );
}
