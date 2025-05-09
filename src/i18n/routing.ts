import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['ru', 'lv', 'en'],

    // Used when no locale matches
    defaultLocale: 'lv',
    pathnames: {
        '/': '/',
        '/dashboard': '/dashboard',
        '/about': {
            ru: '/о-нас',
            lv: '/par-mums',
            en: '/about',
        },
    },
});
